var connection = require("./connection");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [table, cols, vals], function(err, result){
            if(err) throw err;
            console.log(vals);
            cb(result);
        });
    },
    updateOne: function(){

    }
};

module.exports = orm;