// DEPENDENCIES..
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// SETTING EXPRESS APP
var app = express();

var PORT=  process.env.PORT || 3000;

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "/public"));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
 app.use(express.static(__dirname + "/public"));



var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Syncing our sequelize models and then starting our express app
//I took out force: true from within sync
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// app.use("/:id", routes);
// app.use("/create", routes);

// app.listen(port);



// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "password",
// 	database: "burgerss_db"
// });

// connection.connect(function(err) {
// 	if(err) throw err;
// 	console.log("Connected as ID: " + connection.threadId);
// });

// app.get("/", function (req, res) {
// 	connection.query("SELECT * FROM burgers;" , function (err, data) {
// 		res.render("index", {burgers: data});
// 	})
// })

// app.post("/create", function (req, res) {
// 	connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);",[req.body.burger, false], function(err, result) {
// 		if(err) throw err;
// 		res.redirect("/");
// 	})
// })

// app.put("/:id", function (req, res) {
// 	connection.query("UPDATE burgers SET? WHERE?;", [{devoured:true}, {id:req.params.id}], function (err, results) {
// 		if(err) throw err;
// 		res.redirect("/");
// 	})
// })



var mysql = require("mysql");