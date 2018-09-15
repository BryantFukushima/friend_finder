var mysql = require("mysql");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"));

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "friend_finder_db"
});

app.get("/match" , function(req,res) {
	connection.query("SELECT * FROM users" , function(err, response) {
		res.json(response)
	})
});

app.get("/results" , function(req,res) {
	res.sendFile(path.join(__dirname, "public/result.html"));
});

app.post("/survey", function(req,res) {
	var result = JSON.stringify(req.body.scores);
	connection.query('INSERT INTO users SET ?' , 
		{
			user: req.body.user,
			scores: result
		},
	function(err, response){
		res.redirect("/results");
	});
})


app.listen(3000, function() {
    console.log("listening on 3000");
});