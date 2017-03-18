// DEPENDENCIES..
var express = require("express");
// var burger = require("../models/burger.js");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// // get route to index
// router.get("/", function (req, res) {
// 	burger.selectAll(function (data) {
// 		res.render("index", {burgers: data});
// 	});
// });

// // post route to index
// router.post("/", function (req, res) {
// 	burger.createOne(req.body.burger, function (result){
// 		console.log(result);
// 		res.redirect("/");
// 	});
// });

// // put route to index
// router.put("/:id", function (req, res) {
// 	burger.updateOne(req.params.id, function (result){
// 		console.log(result);
// 		res.redirect("/");
// 	});
// });

// module.exports = router;

router.get("/", function (req, res) {
	res.redirect("/burgers");
});


router.get("/burgers", function (req, res) {
	db.burgers.findAll({})
		.then(function(data) {
			res.render("index", {
				burgers: data
			});
		});
});

router.post("/burgers/create", function (req, res) {
	  console.log(req.body);
	db.burgers.create({
		burger_name: req.body.name
		})
			.then(function(data) {
				res.redirect("/burgers");
			});
});

router.put("/burgers/update/:id", function (req, res) {
	db.burgers.update(req.body,
	{
		where: {
			id: req.params.id
		}
	})
		.then (function (data) {
			res.redirect("/burgers");
		});
});

module.exports = router;
