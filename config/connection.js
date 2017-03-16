// THIS FILE INITIATES THE CONNECTION TO MYSQL..

// DEPENDENCIES..
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

	connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "burgerss_db"
	});
};

// CONNECTING TO THE DATABASE..
connection.connect(function(err) {
	if(err) throw err;
	console.log("Connected as ID: " + connection.threadId);
});

// EXPORT CONNECTION..
module.exports = connection;
