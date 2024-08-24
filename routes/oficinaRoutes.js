const express = require("express");
const router = express.Router();
const oficinaController = require("../controllers/oficinaController");

router.get("/", oficinaController.office);
router.get("/list", oficinaController.list);

module.exports = router;