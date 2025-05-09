const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ status: "success", code: 0, msg: "hello 123" });
});

module.exports = router;
