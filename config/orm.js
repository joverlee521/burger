// Import MySQL connection
var connection = require("./connection");

// Function for generating question marks for column values 
function addQuestionMarks(length){
    var array = [];
    for(var i = 0; i < length; i++){
        array.push("?");
    }
    return array.toString();
}

// Function for converting an object to a string in MySQL query
function objToSql(ob){
    var array = [];
    for(var key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            // Generates a string such as burger_name='Juicy Lucy Burger'
            array.push(key + "=" + value);
        }
    }
    return array.toString();
}

// ORM object
var orm = {
    // Method to select all from table
    selectAll: function(table, orderCol, order, cb){
        var queryString = "SELECT * FROM " + table + " ORDER BY " + orderCol + " " + order + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    // Method to insert one row into table
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + addQuestionMarks(vals.length) +  ");";
        connection.query(queryString,vals, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    // Method to update one row in table
    updateOne: function(table, colValObj, id, cb){
        var queryString = "UPDATE " + table + " SET " + objToSql(colValObj) + " WHERE " + id;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    // Method to delete one row in table
    delete: function(table, id, cb){
        var queryString = "DELETE FROM " + table + " WHERE " + id;
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;