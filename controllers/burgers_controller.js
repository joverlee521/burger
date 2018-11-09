var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
    burger.insert("burger_name", req.body.burger_name, function(data){
        res.json({id: data.insertId});
    });
});

module.exports = router;