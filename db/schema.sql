DROP DATABASE IF EXISTS burgerss_db;
CREATE DATABASE burgerss_db;

USE burgerss_db;

CREATE TABLE burgers (
	id INT(100) NOT NULL AUTO_INCREMENT ,
	burger_name VARCHAR(25) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY(id)
);