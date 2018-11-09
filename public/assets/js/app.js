$(document).ready(function(){
    $("#burger-form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        };
        $.post("/api/burgers", newBurger, function(data){
            console.log("Added new burger");
            location.reload();
        });
    });
});