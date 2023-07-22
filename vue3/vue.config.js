const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*", // cors跨域
    },
  },
  transpileDependencies: true,
});
