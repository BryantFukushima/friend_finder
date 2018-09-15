CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE users(
	id INT AUTO_INCREMENT NOT NULL,
	user VARCHAR(45) NOT NULL,
	scores VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);
