const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  devServer: {
    port: 4000,
  },
  transpileDependencies: true,
  // 配置resolve.alias，将mini-micro-app指向micro目录的index.js
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "mini-micro-app",
      path.join(__dirname, "../micro/index.js")
    );
  },
});
