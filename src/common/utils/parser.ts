import { createElement, VNode } from 'preact';

export function parseHtmlString(str?: string | null): (string | VNode)[] {
  const arr: (string | VNode)[] = [];
  do {
    if (!str) break;
    const matched = str.match(/<(\w+)([^>/]*)(\/)?>/);
    if (!matched) {
      if (str) arr.push(str);
      break;
    }

    const start = Number(matched.index);
    const preStr = str.substring(0, start);
    if (preStr) arr.push(preStr);
    const { length } = matched[0];
    const tagName = matched[1];
    const attrs = matched[2];

    const props = {};
    let subChilds: (string | VNode)[] = [];
    str = str.substring(start + length);

    // 解析属性
    attrs?.match(/[\w_-]+='[^']*'|[\w_-]+="[^"]*"|[\w_-]+/g)?.forEach((s) => {
      if (!s) return;
      const parts = s.split('=');
      props[parts[0]] = parts[1]?.replaceAll(/^['"]|['"]$/g, '') || '';
    });

    // 子节点
    if (!matched[3]) {
      // 查找结束标签
      const endTag = `</${tagName}>`;
      const pos = str.indexOf(endTag);
      if (pos >= 0) {
        subChilds = parseHtmlString(str.substring(0, pos));
        str = str.substring(pos + endTag.length);
      }
    }

    const el = createElement(tagName, props, ...subChilds);
    arr.push(el);
  } while (true);

  return arr;
}

// @ts-ignore
window.parseHtmlString = parseHtmlString;
