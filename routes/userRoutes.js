const express = require("express");
const { register, login } = require("../controller/authController");
const { isObjectIdOrHexString } = require("mongoose");
const router = express.Router();

console.log("DotEnv", process.env.TOTO);

// post /api/register
router.post("/register", register);
router.post("/login", login);

module.exports = router;

const userSchema = new Schema({
	name: { type: string, retquired: true },
	prenom: { type: String, retquired: true, unique: true },
	age: { type: String, retquired: true },
});

