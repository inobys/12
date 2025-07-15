const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { getLocalIP, setupFilter } = require('./util');

const pr = path.resolve;
let isShipping = process.env.mode != 'development';
let rootDir = pr(__dirname, '..', 'dist');
let pandoraHtmlDir = pr(__dirname, '..');
let buildOutputPath = pr(rootDir, 'html' + (isShipping ? '-pro' : '-dev'));

function getHtmlName(v) {
    switch (v.name) {
        case 'app': {
            return 'index.html'; // app不允许自定义
        }
		case 'popup': {
            return 'index.html'; // app不允许自定义
        }
        case 'preprocess': {
            return 'index.html'; // preprocess不允许自定义
        }
        default: {
            return v.output ? `${v.output}.html` : `${v.name}.html`;
        }
    }
}

// let port = 8080;
// const port = require(pr(__dirname, '..', '.pixiderc.json'))['devServer.port'];
const port = process.env.port || 8080;
///////////////////////////////////
//所有app定义在这里
// TODO 把这部分配置放到单独的JSON文件中，便于自动生成或者通过图形界面管理
let appDef = require(pr(__dirname, 'apps.json'));
if (fs.existsSync(pr(__dirname, 'custom.json'))) {
    appDef = [...appDef, ...require(pr(__dirname, 'custom.json'))]
}
const appSettings = require(pr(__dirname, 'appsettings.json'));

console.log({isShipping});

const htmlCopyPlugins = appDef.map((app) => {
    return app.template ? new HtmlWebpackPlugin({
        hash: isShipping,
        minify: isShipping,
        chunks: [app.name],
        template: app.template,
        filename: app.name + '/' + getHtmlName(app),
    }) : false;
});

let plugins = [
    new webpack.DefinePlugin({
        APP_SETTING: JSON.stringify(appSettings),
    }),
	new CleanWebpackPlugin({
		cleanOnceBeforeBuildPatterns: [
				'**/*',
				path.join(rootDir, '.build'),

		]
	}),
	new ForkTsCheckerWebpackPlugin({ async: false }),
	...htmlCopyPlugins,
	!isShipping ? new webpack.HotModuleReplacementPlugin() : undefined,
].filter((v) => !!v);

let rewrites = appDef.map((v) => {
	return { from: new RegExp(`^/${v.name}/`), to: `/${v.name}` };
});

module.exports = {
	entry: Object.fromEntries(appDef.map((v) => [v.name, v.entry])),
	output: {
		path: buildOutputPath,
		filename: '[name]/[name].js',
		publicPath: isShipping
			? '../../../7628/dwNewLottery_bin/' //发布后都从文件系统加载，使用相对路径引用素材
			: '/', // `http://${getLocalIP()[0]}:${port}/`, //开发时绑定到外部ip，方便手机访问
	},

	externals: {
		preact: 'window.cpreact',
		react: 'window.cpreact',
		'preact/hooks': 'window.cpreact',
		'preact/compat': 'window.cpreact',
	},

	resolve: {
		modules: [`${pandoraHtmlDir}/src/node_modules`, pandoraHtmlDir, `${pandoraHtmlDir}/node_modules`], //必须使用绝对路径，不然那些符号链接过来的源文件会找不到当前目录下的node_modules
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			['preact$']: path.resolve('./lib/preact/src'),
			['preact/hooks$']: path.resolve('./lib/preact/hooks/src'),
			['preact-router$']: path.resolve('./lib/preact-router/src'),
			['preact-router/match']: path.resolve('./lib/preact-router/match/src'),
			['react-window']: path.resolve('./lib/react-window/src'),
			['@improbable-eng/grpc-web']: path.resolve('./lib/grpc-web/dist'),
			react: path.resolve('./lib/preact/compat/src'),
		},
	},

	module: {
		rules: [
			{
				test: /.(js|ts)x?$/,
				use: {
					loader: require.resolve('babel-loader'),
					options: {
						presets: [['@babel/preset-typescript', { allowNamespaces: true }]],
						plugins: [
							'@babel/plugin-transform-flow-strip-types',
							'@babel/plugin-syntax-jsx',
							['@babel/plugin-proposal-decorators', { legacy: true }],
							['@babel/plugin-proposal-class-properties'],
							['@babel/plugin-proposal-optional-chaining'],
							['@babel/plugin-transform-react-jsx', { pragma: 'makeDOM' }],
							['babel-plugin-jsx-pragmatic', { module: __dirname + '/../lib/dom', import: 'makeDOM' }],
							// 'babel-plugin-transform-remove-console',
						],
					},
				},
				// include: [path.resolve(__dirname + '/../')],
				exclude: /node_modules/,
			},
			//注：我们自己不写css，因此只有第3方库有css，它们的css不使用module(antd)
			{
				test: /\.css$/,
				use: [require.resolve('style-loader'), require.resolve('css-loader')],
			},
			//我们自己只写less或sass，且必须使用module
			{
				test: /\.less$/,
				use: ['style-loader', { loader: require.resolve('css-loader'), options: { modules: true } }, { loader: require.resolve('less-loader'), options: { javascriptEnabled: true } }],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', { loader: require.resolve('css-loader'), options: { modules: false } }, 'sass-loader'],
			},
			{
				test: /\.(png|jpg|gif|lottie|mp4|ttf)$/,
				loader: require.resolve('file-loader'),
				options: {
					name: 'static/media/[name].[hash:8].[ext]',
				},
			},
			//TODO
			// {
            //     test: /\.(png|jpg|gif|lottie|mp4|astc)$/,
            //     use: [
            //         {
            //             loader: require.resolve('file-loader'),
            //             options: {
            //                 name: 'static/media/[name].[hash:8].[ext]',
            //             },
            //         },
            //         {
            //             loader: path.resolve(require.resolve('pixui-webpack-components'), '../', 'dist', 'ktxConverter.js'),
            //             options: {
            //                 isDevServer: process.env.mode,
			// 				// isDevServer: 'production',
            //                 forceRefresh: true, //强制重新生成
            //                 compressRate: 8, //压缩率:[4, 6, 8, 10, 12]
            //             },
            //         },
            //     ],
            // },
		],
	},

	optimization: {
		minimize: false,
	},

	devtool: 'source-map',

	plugins,

	devServer: {
        sockPath: `/${port}/sockjs-node`,
        sockPort: port,
		port,
		host: '0.0.0.0',
		transportMode: 'ws',

		hot: true,
		liveReload: true,
		// inline: false,
		disableHostCheck: true,
		overlay: true,
		writeToDisk: true,

		contentBase: [__dirname + '/../lib/assets'],
		watchContentBase: true,

		historyApiFallback: {
			rewrites,
		},

		headers: {
			'Access-Control-Allow-Origin': '*', //方便本机用localhost打开，难记ip
		},

		before: setupFilter(appDef),
	},
};
