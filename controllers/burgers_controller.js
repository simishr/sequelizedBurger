// DEPENDENCIES..
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// get route to index
router.get("/", function (req, res) {
	burger.selectAll(function (data) {
		res.render("index", {burgers: data});
	});
});

// post route to index
router.post("/", function (req, res) {
	burger.createOne(req.body.burger, function (result){
		console.log(result);
		res.redirect("/");
	});
});

// put route to index
router.put("/:id", function (req, res) {
	burger.updateOne(req.params.id, function (result){
		console.log(result);
		res.redirect("/");
	});
});

module.exports = router;