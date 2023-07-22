// 创建微应用
export default class CreateApp {
  constructor({ name, url, container }) {
    this.name = name; // 应用名称
    this.url = url; // 应用url地址
    this.container = container; // 应用挂在的micro-app元素
    this.status = "loading";
  }

  status = "created";

}
