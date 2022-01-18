var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
const port = 5000;

app.get("/users", (req, res) => {
	res.send(users);
});

app.get("/users/:id", (req, res) => {
	let id = req.params.id;
	console.log(req.params.id);
	res.send(users[id]);
});

const users = [
	{
		id: 0,
		name: "diabetices",
		description:
			"Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. Most of the food you eat is broken down into sugar (also called glucose) and released into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin",
		img: "https://image.freepik.com/free-photo/world-diabetes-day-medical-equipment-wooden-floor_1150-26692.jpg",
	},
	{
		id: 1,
		name: "heart",
		description:
			"The heart is a muscular organ in most animals, which pumps blood through the blood vessels of the circulatory system.[1] The pumped blood carries oxygen and nutrients to the body, while carrying metabolic waste such as carbon dioxide to the lungs.[2] In humans, the heart is approximately the size of a closed fist and is located between the lungs, in the middle compartment of the chest.",
		img: "https://image.freepik.com/free-photo/world-diabetes-day-medical-equipment-wooden-floor_1150-26692.jpg",
	},
	{
		id: 2,
		name: "kjlhbjhbj",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, totam!",
		img: "https://image.freepik.com/free-photo/world-diabetes-day-medical-equipment-wooden-floor_1150-26692.jpg",
	},



];

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
