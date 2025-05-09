module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser", // 确保使用这个解析器
    requireConfigFile: true, // 明确要求配置文件
    sourceType: "module",
    babelOptions: {
      configFile: __dirname + "/babel.config.js", // 显式指定 Babel 配置文件路径（使用绝对路径）
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
