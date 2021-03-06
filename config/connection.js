// Set up MySQL connection
var mysql = require("mysql");
var connection;

// Connect to JawsDB if availabe, else connect to localhost
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

// Make connection to MySQL database
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return
    }
    console.log("connected as id: " + connection.threadId);
});

// Export connection to ORM to use
module.exports = connection;