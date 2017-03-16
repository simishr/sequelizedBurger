// THIS FILE OFFERS A SET OF EASIER METHODS FOR INTERACTING WITH THE DATABASE..

// DEPENDENCIES..
var connection = require("./connection.js");

var tableName = "burgers";

var orm = {

	selectAll: function(callback) {
		let query = "SELECT * FROM " + tableName;
		connection.query(query, function(err, data) {
			if(err) throw err;
			callback(data);
		});
	},

	insertOne: function(burger, callback) {
		let query = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
		connection.query(query, [burger, false], function(err, data) {
			if(err) throw err;
			callback(data);
		});
	},

	updateOne: function(id, callback) {
		let query = "UPDATE " + tableName + " SET ? WHERE ?";
		connection.query(query, [{devoured: true}, {id:id}], function(err, data) {
			if(err){
				 throw err;	
			}
			callback(data);
		});
	}
};

module.exports = orm;