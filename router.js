const express = require("express");
const controller = require("./controller");
const router = express.Router();

// Search food
router.route("/").get(controller.getHome);

module.exports = router;