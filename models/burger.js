var ORM = require("../config/orm");

var burger = {
    all: function(){
        ORM.selectAll();
    },
    insert: function(){
        ORM.insertOne();
    },
    update: function(){
        ORM.updateOne();
    }
};

module.exports = burger;