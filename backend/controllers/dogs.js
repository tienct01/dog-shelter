const asyncWrapper = require("../middlewares/asyncWrapper");
const connectDB = require("../db/connect");
const { ObjectId } = require("mongodb");

const getDogs = asyncWrapper(async (req, res) => {
	const client = await connectDB(process.env.MONGO_URI);
	const coll = client.db("MyDatabase").collection("dogs");
	const cursor = await coll.find();
	let dogs = [];
	await cursor.forEach((dog) => {
		dogs.push(dog);
	});
	client.close();

	res.status(200).json({ dogs });
});

const addDogs = asyncWrapper(async (req, res) => {
	const dogs = req.body;

	const client = await connectDB(process.env.MONGO_URI);
	const coll = client.db("MyDatabase").collection("dogs");
	await coll.insertMany(dogs);
	client.close();
	res.status(201).json({ success: true });
});

const getDog = asyncWrapper(async (req, res) => {
	const { id } = req.params;

	const client = await connectDB(process.env.MONGO_URI);
	const coll = client.db("MyDatabase").collection("dogs");
	const dog = await coll.findOne({ _id: ObjectId(id) });
	client.close();
	res.status(200).json({ dog });
});
module.exports = {
	getDogs,
	addDogs,
	getDog,
};
