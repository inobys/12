const { rmdirSync, existsSync } = require('fs');
const { resolve: pathResolve } = require('path');

// rm -rf node_modules/@types/react && rm -rf node_modules/preact

const dirs = [
    pathResolve(__dirname, '..', 'node_modules/@types/react'),
    pathResolve(__dirname, '..', 'node_modules/preact'),
];

dirs.forEach(dir => {
    existsSync(dir) && rmdirSync(dir, {recursive: true});
})

// > 14.14之后可以使用rmSync:
// rmSync(pathResolve(__dirname, '..', 'node_modules/@types/react'), {recursive: true, force: true});
// rmSync(pathResolve(__dirname, '..', 'node_modules/preact'), {recursive: true, force: true});