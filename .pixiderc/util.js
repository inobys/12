const port = process.env.port || 8080;
const { rtCompilerToolPath } = process.env;
module.exports.getLocalIP = function () {
	let os = require('os');
	let ifaces = os.networkInterfaces();

	let ipList = [];
	Object.keys(ifaces).forEach(function (ifname) {
		let alias = 0;

		ifaces[ifname].forEach(function (iface) {
			if ('IPv4' !== iface.family || iface.internal !== false) {
				// skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
				return;
			}
			ipList.push(iface.address);
		});
	});
	console.log('iplist', ipList);
	return ipList;
};

module.exports.setupFilter = (appDef) =>
	function (app, servers) {
		let log = () => {};
		log = console.log;

		app.disable('etag');

		app.get('/log0', (req, res) => {
			log = () => {};
			res.send('ok');
		});
		app.get('/log1', (req, res) => {
			log = console.log;
			res.send('ok');
		});

		//拦截输出，当agent为PixUI且输出类型为html时，转换为fbs二进制数据再返回
		app.use((req, res, next) => {
			//去掉缓存标记，因为很可能源文件没变，但转换后的表示变了
			delete req.headers['if-none-match'];
			let ua = req.get('User-Agent');
			log('req', req.url, ua, JSON.stringify(req.headers));

			let _write = res.write;
			let _end = res.end;
			let _send = res.send;

			let buffers = [];
			var addBuffer = (chunk, encoding) => {
				if (chunk === undefined) return;
				if (typeof chunk === 'string') {
					chunk = Buffer.from(chunk, encoding);
				}
				buffers.push(chunk);
			};

			//处理直接裸写的情况，一般见于发送静态文件
			res.write = function (chunk, encoding) {
				let type = res.get('Content-Type');
				log('hook write...', type, chunk);
				addBuffer(chunk, encoding);
			};
			res.end = function (chunk, encoding) {
				let type = res.get('Content-Type');
				if (chunk) addBuffer(chunk, encoding);
				let data = Buffer.concat(buffers);
				log('hook end...', type, data.length);
				res.write = _write;
				res.end = _end;
				_send.call(this, data);
			};

			//处理通过send发送的情况，如webpack合成的html
			res.send = function (c) {
				let type = res.get('Content-Type') || 'text/plain';
				let isPixUI = /PixUI/.test(ua);
				let ver = /(\d)\.(\d)\.(\d+)/.exec(ua); // 0.2.*以上
				let isHTML = type.indexOf('text/html') >= 0;
				let isJS = type.indexOf('javascript') >= 0;
				let isCSS = type.indexOf('text/css') >= 0;
				log('hook send...', c.length, type);
				if (isPixUI && parseInt(ver[2]) >= 2 && (isHTML || isJS)) {
					let cp = require('child_process');
					let opts = isJS ? ['--js'] : [];
					let child = cp.spawn(rtCompilerToolPath, ['--src', 'stdin', ...opts]);
					child.stdin.write(c);
					child.stdout.on('data', (data) => {
						// console.log('get data from fbs', req.url, data.byteLength);
						addBuffer(data);
					});
					child.stdout.on('close', () => {
						// console.log('get data from fbs finish!!', req.url);
						res.end();
					});
					child.stderr.on('data', (data) => {
						console.log('get err from fbs', data.toString());
					});
					child.stdin.end();
				} else {
					_send.call(this, c);
				}
			};
			next();
		});

		//定制首页显示所有entry，方便浏览
		app.get(`/`, (req, res) => {
			res.setHeader('content-type', 'text/html');
			res.send(
				appDef
					.concat([{ name: 'test' }])
					.map((v) => {
						return `<a href=${port}/${v.name} style='font-size:36px'>${v.name}</a>`;
					})
					.join('<br>') + "<div style='font-size:40pt' onclick='window.close();'>close</div>"
			);
		});
	};
