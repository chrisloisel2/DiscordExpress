const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config();

const app = express();
const port = 3000;

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);


const url = process.env.MONGODB_URI;

mongoose
	.connect(url)
	.then(() => {
		console.log("MongoDB connection successful");
	})
	.catch((err) => console.error("MongoDB connection error:", err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/userRoutes'));

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
