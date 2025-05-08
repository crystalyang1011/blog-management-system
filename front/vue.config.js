const { defineConfig } = require("@vue/cli-service");
const path = require("path");

// 修改完config文件后，记得重启npm run serve
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 修改1.将resolve用configureWebpack包裹
    resolve: {
      alias: {
        "@css": path.resolve(__dirname, "src/assets/css"), // 修改2：去掉/*
        "@img": path.resolve(__dirname, "src/assets/imgs"), // 修改2：去掉/*
      },
    },
  },
  css: {
    // 将 base.less 的变量共享给所有组件
    loaderOptions: {
      less: {
        additionalData: `
          @import "${path.resolve(__dirname, "src/assets/css/base.less")}";
        `,
      },
    },
  },
});
