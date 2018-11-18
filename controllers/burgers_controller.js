// Dependencies
var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

// Routes

// Get route to display all burgers in database
router.get("/", function(req, res){
    burger.all(function(data){
        // Store returned data as handlebar object
        var hbsObject = {
            burgers: data
        };
        // Render handlebar page with object
        res.render("index", hbsObject);
    });
});

// Post route to add a burger to database
router.post("/api/burgers", function(req,res){
    burger.insert(["burger_name"], [req.body.burger_name], function(data){
        // Return new burger as a JSON object
        res.json({id: data.insertId});
    });
});

// Update route to update information on a burger in database
router.put("/api/burgers/:id", function(req, res){
    var id = "id = " + req.params.id;
    burger.update(
        {   
            devoured: req.body.devoured
        },
        id, 
        function(data){
            // Return 404 Error if no matching burger was changed
            if(data.changedRows === 0){
                return res.status(404).end();
            }
            else{
                return res.status(200).end();
            }
        }
    );
});

// Delete route to delete burger from database
router.delete("/api/burgers/:id", function(req, res){
    var id = "id = " + req.params.id;
    burger.delete(id, function(data){
        // Return 404 Error if no matching burger was deleted
        if(data.affectedRows === 0){
            return res.status(404).end();
        }
        else{
            return res.status(200).end();
        }
    });
});

module.exports = router;