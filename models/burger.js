// DEPENDENCIES..

// var orm = require("../config/orm.js");

// var burger = {
// 	selectAll: function (callback) {
// 		orm.selectAll(function(response){
// 			callback(response);
// 		})
// 	},

// 	createOne: function (burger_name,callback) {
// 		orm.insertOne(burger_name, function (response) {
// 			callback(response);
// 		});
// 	},

// 	updateOne: function (id, callback) {
// 		orm.updateOne(id, function(response) {
// 			callback (response);
// 		});
// 	}
// }

// module.exports = burger;

module.exports = function (sequelize, DataTypes) 
{
	return sequelize.define("burgers", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	}, {
		timestamps: false,
		freezeTableName: true,
		tableName: "burgers",
	
	});
};