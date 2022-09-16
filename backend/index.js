const express = require("express");
const app = express();
const router = require("./router/router");
const errorHandler = require("./middlewares/errorHandler");

require("dotenv").config();
// convert to json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/dogs", router);
app.use(errorHandler);
const PORT = 3030;

const start = async () => {
	try {
		app.listen(PORT, () => {
			console.log("Server is running on port: ", PORT);
		});
	} catch (error) {
		console.log(error);
	}
};
start();
