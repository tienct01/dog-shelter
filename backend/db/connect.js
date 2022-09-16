const { MongoClient, ServerApiVersion } = require("mongodb");

const connectDB = (uri) => {
	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		serverApi: ServerApiVersion.v1,
	});
	return client.connect();
};

module.exports = connectDB;
