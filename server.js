// Dependencies
var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

// Setting up the express app
var app = express();
var PORT = process.env.PORT || 8080;

// Setting up data parsing for app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(path.join(__dirname, "/public")));

// Setting up handlbars for express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var router = require("./controllers/burgers_controller");
app.use(router);

// Starting express app
app.listen(PORT, function(){
    console.log("Server is listening on: http://localhost:" + PORT);
});