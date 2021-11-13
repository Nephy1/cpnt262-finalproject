// store environment with dotenv
require("dotenv").config();
const mongoose = require("mongoose");
const gallery = require("../gallery");
//  err handling
const wipeAndSeed = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		await gallery.deleteMany({});
		await gallery.insertMany([
			{
				id: 0,
				title: "Steak Tacos",
				description: "steak tacos",
				width: 600,
				height: 400,
				imageSrc: "public/assets/images/0-steak-tacos.jpg",
			},
			{
				id: 1,
				title: "Fish Tacos",
				description: "fish tacos",
				width: 600,
				height: 400,
				imageSrc: "public/assets/images/1-fish-tacos.jpg",
			},
			{
				id: 2,
				title: "Veggie Tacos",
				description: "veggie tacos",
				width: 600,
				height: 400,
				imageSrc: "public/assets/images/2-veggie-tacos.jpg",
			},
			{
				id: 3,
				title: "Chicken Tacos",
				description: "chicken tacos",
				width: 600,
				height: 400,
				imageSrc: "public/assets/images/3-chicken-tacos.jpg",
			},
			{
				id: 4,
				title: "Nachos",
				description: "nachos",
				width: 600,
				height: 400,
				imageSrc: "public/assets/images/4-nachos.jpg",
			},
			{
				id: 5,
				title: "Chips and Salsa",
				description: "chips and salsa",
				width: 600,
				height: 400,
				imageSrc: "public/assets/images/5-chips-salsa.jpg",
			},
			{
				id: 6,
				title: "Chips and Guacamole",
				description: "chips and guacamole",
				width: 600,
				height: 400,
				imageSrc: "public/assets/images/6-chips-guac.jpg",
			},
			{
				id: 7,
				title: "Quesadilla",
				description: "quesadilla",
				width: 600,
				height: 400,
				imageSrc: "public/assets/images/7-quesadilla.jpg",
			},
			{
				id: 8,
				title: "Burrito",
				description: "burrito",
				width: 600,
				height: 400,
				imageSrc: "public/assets/images/8-burrito.jpg",
			},
			{
				id: 9,
				title: "Churros",
				description: "churros",
				width: 600,
				height: 400,
				imageSrc: "public/assets/images/9-churros.jpg",
			},
		]);

		console.log("Data Import Success");

		process.exit();
	} catch (error) {
		console.error("Error with data import", error);
		process.exit(1);
	}
};
wipeAndSeed();
