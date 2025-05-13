const express = require("express");
const router = express.Router();
const { Article } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const condition = {
      order: [["id", "DESC"]],
    };
    const articles = await Article.findAll(condition); // 这个查询操作是异步的，node不会等待它查询完结果再返回，因此需要加上await
    // 默认状态码200，可以不写
    res.json({
      status: true,
      message: "查询文章列表成功",
      data: articles,
    });
  } catch (error) {
    // 状态码500 —— 服务器错误
    res.status(500).json({
      status: false,
      // message: `查询文章列表数据失败：${error.message}`, //
      message: `查询文章列表数据失败`,
      data: [error.message],
    });
  }
  /**
   * Executing (default): SELECT `id`, `title`, `content`, `createdAt`, `updatedAt` FROM `Articles` AS `Article` ORDER BY `Article`.`id` DESC;
   */
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // findByPk: P大写，k小写
    const article = await Article.findByPk(id);
    if (article === null) {
      return res.json({
        status: false,
        message: "查询文章详情失败，文章不存在",
        data: null,
      });
    }
    res.json({
      status: true,
      message: "查询文章详情成功",
      data: article,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "查询文章详情失败",
      data: error.message,
    });
  }
});

module.exports = router;
