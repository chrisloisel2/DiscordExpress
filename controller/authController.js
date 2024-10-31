const user = require("../model/user");
const User = require('../model/user');
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		console.log("register", req.body);

		if (!name || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.findOne({ email });

		if (user) {
			console.log("User found:", user);
			return res
				.status(400)
				.json({ message: "Cette adresse email existe déjà" });
		}

		const userUsername = await User.findOne({ name });

		if (userUsername) {
			return res
				.status(400)
				.json({ message: "Ce nom d'utilisateur existe déjà" });
		}

		const newUser = new User({
			name,
			email,
			password: hashedPassword
		});

		await newUser.save();
		res.status(201).json({ message: "Utilisateur enregistré avec succès" });
	} catch (error) {
		console.error("Server error:", error);
		res.status(500).json({ message: "Erreur serveur" });
	}
};

exports.login = async (req, res) => {
	console.log("register");
	res.json({ message: "register" });
}
