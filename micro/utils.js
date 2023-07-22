/**
 * 获取资源
 * @param {string} url 资源url
 * @returns
 */
export function fetchSource(url) {
  return fetch(url).then((res) => res.text());
}
