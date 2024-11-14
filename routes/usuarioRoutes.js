const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const auth = require("../middlewares/authmiddleware");


router.post("/register", usuarioController.register);

module.exports = router;