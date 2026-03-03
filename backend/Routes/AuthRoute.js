const { Signup, Login, Logout } = require("../Controllers/AuthController");

const { userVarification } = require("../Middlewares/AuthMiddleware");

const express = require("express");
const router = express.Router();

router.post("/", userVarification);
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

module.exports = router;
