const fs = require('fs');
const path = require('path');
const wrapFilePath = './puertswrap.js'; //wrap脚本名
const splitFlag = '{ USER_WEBAPCK_CODE }'; //用户代码分隔符  ***这里要修改成模糊匹配，避免出现平台问题
const wepackFlag1 = 'var __webpack_modules__'; //段落标识1  ***这里要修改成模糊匹配
const wepackFlag2 = 'export { __webpack_exports___esModule as __esModule };'; //段落标识2  ***这里要修改成模糊匹配
let wrapString1;
let wrapString2;


async function getSrcFilePath() {
    let srcFolder = path.resolve(__dirname, '../', 'dist/html-pro');
    console.log(srcFolder);
    let dirent;
    let direntTable = [];
    const dir = await fs.promises.opendir(srcFolder);
    while (dirent = dir.readSync()) {
        direntTable.push(dirent.name);
    }

    // if (direntTable.length > 1) {
    //     let error = `${srcFolder} 下文件数量超过一个！\nfiles: ${direntTable}`;
    //     throw new Error(error);
    // }

    let continueFlag = false;
    for (const iterator of direntTable) {
        if(iterator == 'preprocess')
        continueFlag = true;
    }

    if(!continueFlag){
        throw new Error(`[Error] ${srcFolder} 下未找到 preprocess 目录` )
    }

    srcFolder = path.resolve(srcFolder, 'preprocess', 'preprocess' + '.js');
    return srcFolder;
}

function processFile(srcPath, srcData) {
    // ---------混合文件----------
    let postArray = [];
    let dataArray = srcData.split('\n');
    // 避免重复被wrap两次出错
    let splitFlagIdx = dataArray.findIndex(function (currentValue, index, arr) {
        return currentValue.includes(`This is Action Wrap Code. Please don't delete below Information`);
    })

    if (splitFlagIdx > 0) {
        let errorMsg = `源码已经被wrap封装过`;
        console.warn(errorMsg);
        return;
    }

    // 在源码中加入wrap信息
    let stepFlag = 0;
    for (const idx in dataArray) {
        let line = dataArray[idx];
        // 文件头部
        if (stepFlag === 0 && idx == 0) {
            postArray.push(wrapString1);
            stepFlag = 1;
        } 
        postArray.push(line);
        // 文件尾部
        // console.log((idxn + "   " +  dataArray.length + "   " + stepFlag))
        if (stepFlag == 1 && idx == dataArray.length - 1 ) {
            stepFlag = 2;
            postArray.push(wrapString2);
        }
    }

    if(stepFlag === 0 || stepFlag === 1){
        if (stepFlag === 0) {
            console.log("!在源码中无法找到起始位置");
        } else if (stepFlag === 1) {
            console.log("!在源码中无法找到结束位置");
        }
        // console.log("使用 parser 分析源文件...");
        // postArray = parseCodeToWrap(srcData);
        return;
    }

    // 写回文件 
    let outdata = postArray.join('\n');
    fs.writeFileSync(srcPath, outdata);
    console.log('wrap file success!');
}

function parseCodeToWrap(userFileContent){
    let startline = 0;
    let endline = 0;
    let findout = false;
    let acorn = require("acorn");
    // console.log(JSON.stringify( acorn.parse(userFileContent, {ecmaVersion: 2020, allowImportExportEverywhere:true,locations:true})));
    let ast = acorn.parse(userFileContent, {ecmaVersion: 2020, allowImportExportEverywhere:true,locations:true});
    // 查找AST顶层的__webpack_modules__ 变量，并给这个变量加上wrap
    if(ast.type === "Program" && ast.body instanceof Array){
        for (const element of ast.body) {
            if(element.type === "VariableDeclaration"){
                for (const iterator of element.declarations) {
                    if(iterator.id && iterator.id.name === "__webpack_modules__"){
                        // 记录位置
                        startline = iterator.loc.start.line;
                        endline = iterator.loc.end.line;
                        findout = true;
                        break;
                    }
                }
            }
            if(findout) break;
        }
    }

    let dataArray = userFileContent.split('\n');
    if(findout){
        dataArray.splice(startline - 1 , 0 , wrapString1 ); //ast行号从1开始，数据行号从0开始，消除差异
        dataArray.splice(endline + 1, 0 , wrapString2 ); //在 endline之后一行加入，所以下标+1
    }else{
        throw new Error("parseCodeToWrap not find __webpack_modules__");
    }
    return dataArray;
}

!async function () {
    console.log("check wrap env");
    let dirent;
    let direntTable = [];
    let srcFolder = path.resolve(__dirname, '..','node_modules');
    const dir = await fs.promises.opendir(srcFolder);
    while (dirent = dir.readSync()) {
        direntTable.push(dirent.name);
    }

    let continueFlag = false;
    for (const iterator of direntTable) {
        if('gamelet-pixui-frame' == iterator){
            continueFlag = true;
        }
    }

    if(!continueFlag){
        return;
    }

    console.log("begin wrap file");
    // 处理模板文件 puertswrap.js
    let wrapPath = path.resolve(__dirname, wrapFilePath);
    console.log("fildout wrap file path: " + wrapPath);
    let templateFileContent = fs.readFileSync(wrapPath, 'utf8');
    let templateFileContentArray = templateFileContent.split('\n');

    let splitFlagIdx = templateFileContentArray.findIndex(function (currentValue, index, arr) {
        return currentValue.includes(splitFlag);
    })

    if (splitFlagIdx < 0) {
        let errorMsg = `wrap 模板中找不要需要的字段：` + splitFlag;
        throw new Error(errorMsg);
    }

    wrapString1 = templateFileContentArray.slice(0, splitFlagIdx).join('\n');
    wrapString2 = templateFileContentArray.slice(splitFlagIdx + 1).join('\n');
    // ------以上把puertswrap脚本并分割成段落----------
    // ------以下是读取被修改文件----------
    srcFilePath = await getSrcFilePath()
    let srcPath = path.resolve(__dirname, '../', srcFilePath);
    console.log("fildout src file path: " + srcPath);
    let userFileContent = fs.readFileSync(srcPath, 'utf8');
    processFile(srcPath, userFileContent)
}()



