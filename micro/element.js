// 自定义元素
class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  // 元素被插入到DOM时执行，此时去加载子应用的静态资源并渲染
  connectedCallback() {
    console.log("micro-app is connected");
  }

  // 元素从DOM中删除时执行，此时进行一些卸载操作
  disconnectedCallback() {
    console.log("micro-app is disconnected");
  }

  // 声明需要监听的属性名，这些属性变化时才会触发attributeChangedCallback
  static get observedAttributes() {
    return ["name", "url"];
  }

  // 所监听属性发生变化时执行，可获取变化属性的值
  attributeChangedCallback(attr, oldVal, newVal) {
    console.log(`attribute ${attr}: ${newVal}`);
  }
}

/**
 * 注册元素
 * 注册后，就可以像普通元素一样使用micro-app
 * 当micro-app元素被插入或删除DOM时即可触发相应的生命周期函数。
 */
export function defineElement() {
  if (!window.customElements.get("micro-app")) {
    window.customElements.define("micro-app", MyElement);
  }
}
