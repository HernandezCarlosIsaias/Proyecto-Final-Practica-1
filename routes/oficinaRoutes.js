const express = require("express");
const router = express.Router();
const oficinaController = require("../controllers/oficinaController");
const auth = require ("../middlewares/authmiddlewre");

router.get("/", oficinaController.office);
router.get("/list", oficinaController.list);
router.post("/create", auth, oficinaController.create);


module.exports = router;