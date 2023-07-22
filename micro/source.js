import { fetchSource } from "./utils";

export default function loadHtml(app) {
  fetchSource(app.url)
    .then((html) => {
      // html处理
      // 1. 字符串 => 标签处理
      // 2. 字符串 => 转化为dom（不插入）
      window.htmlStr = html;
      // head、body标签替换，加上micro-app-前缀，防止页面标签重复
      html = html
        .replace(/<head[^>]*>[\s\S]*?<\/head>/i, (match) => {
          // 将head标签替换为micro-app-head
          return match
            .replace(/<head/i, "<micro-app-head")
            .replace(/<\/head>/i, "</micro-app-head>");
        })
        .replace(/<body[^>]*>[\s\S]*?<\/body>/i, (match) => {
          // 将body标签替换为micro-app-body
          return match
            .replace(/<body/i, "<micro-app-body")
            .replace(/<\/body>/i, "</micro-app-body>");
        });

      // 将html字符串转化为dom结构
      const htmlDom = document.createElement("div");
      htmlDom.innerHTML = html;
      console.log("html", htmlDom);
    })
    .catch((e) => console.error("加载html出错", e));
}
