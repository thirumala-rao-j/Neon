const express = require("express");
const assistantController = require("../controllers/assistantController");

const router = express.Router();

router.route("/").post(assistantController.createOpenAiId);

module.exports = router;
