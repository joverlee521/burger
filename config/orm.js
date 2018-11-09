var connection = require("./connection");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, ){

    },
    updateOne: function(){

    }
};

module.exports = orm;