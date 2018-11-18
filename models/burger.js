// Importing ORM object
var orm = require("../config/orm");

// Burger model object that uses ORM methods
var burger = {
    // Method to get all burger data
    all: function(cb){
        orm.selectAll("burgers", "updated_at", "ASC", function(res){
            cb(res);
        });
    },
    // Method to add burger
    insert: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    // Method to update burger
    update: function(colValObj, id, cb){
        orm.updateOne("burgers", colValObj, id, function(res){
            cb(res);
        });
    },
    // Method to delete burger
    delete: function(id, cb){
        orm.delete("burgers", id, function(res){
            cb(res);
        });
    }
};

module.exports = burger;