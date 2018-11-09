var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insert: function(){
        ORM.insertOne();
    },
    update: function(){
        ORM.updateOne();
    }
};

module.exports = burger;