const express = require("express");
const businessController = require("../controllers/businessController");

const router = express.Router();

router
  .route("/")
  .get(businessController.getBusiness)
  .post(businessController.createBusiness);

module.exports = router;
