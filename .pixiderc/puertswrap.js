/**
 * This is Action Wrap Code. Please don't delete below Information.
 * 本文件是 Pixui 活动 Wrap ，请不要修改本行及以下任何代码，否则活动可能无法正常运行
 * ver 1.0.0
 * 
 * 历史版本
 * 1.0.0
 * + wrap中引入console, 活动无需手动引入console变量
 * + 通过wrap实现了window变量隔离。比如两个活动中同时存在window["var"]也不会相互冲突
 */

// 允许写入全局变量的白名单
{
let write_global_white_list = new Set([
  'addOP'
]);

let globalproxy = new Proxy({}, {
    get: function (target, prop) {
        let val = prop in target ? target[prop] : window[prop];
        if (val instanceof Function){
            return val.bind(window);
        } else {
            return val;
        }
    },
    set: function (target, prop, value) {
          if(write_global_white_list.has(prop)){
            window[prop] = value;
          }else{
            target[prop] = value;
          }
          return true;
    }
});

/**
 * 使用 consoleproxy 的原因是用户后面会改写 console , 如果直接用 console = cache_console
 * 那么改写 console.log = xxx 时就会改到原函数，使用proxy避免此情况
 * proxy 是能避免改Object内部值的快捷方式，否则就要使用深拷贝分别记录
 */
let consoleproxy = new Proxy({}, {
    get: function (target, prop) {
        if (typeof target[prop] != 'undefined') {
            return target[prop];
        }else if(window["___gamelet_console"] && typeof window["___gamelet_console"][prop] != 'undefined'){
            return window["___gamelet_console"][prop];
        }else {
            return console[prop];
        }
    },
    set: function (target, prop, value) {
        target[prop] = value;
        return true;
    }
});

{
let global = globalproxy;
let globalThis = globalproxy;
let window = globalproxy;
let console = consoleproxy;

/**
 * ------------wrap end ---------------
 */
{ USER_WEBAPCK_CODE }
/**
 * ------------wrap start ---------------
 */
}}
 /**
 * ------------wrap end ---------------
 */