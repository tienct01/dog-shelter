const express = require("express");
const router = express.Router();

const { getDogs, addDogs, getDog } = require("../controllers/dogs");

router.route("/").get(getDogs).post(addDogs);
router.route("/:id").get(getDog);

module.exports = router;
