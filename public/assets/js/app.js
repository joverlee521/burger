$(document).ready(function(){
    // Listener for submission of burger form
    $("#burger-form").on("submit", function(event){
        event.preventDefault();
        // Store burger input as an object
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        };
        // Use post method to send burger input to the backend
        $.post("/api/burgers", newBurger, function(data){
            console.log("Added new burger");
            // Reload the page to display new burger
            location.reload();
        });
    });

    // Listener for clicking the devour button
    $(".devour-button").on("click", function(){
        var id = $(this).data("id");
        var devour = $(this).data("devour");
        // If the burger has not been devoured then update burger's devoured column
        if(devour){
            var newState = {
                devoured: devour
            };
            // Using put method to update burger
            $.ajax("/api/burgers/" + id,{
                type: "PUT",
                data: newState
            }).then(function(){
                console.log("Changed devoured to " + devour);
                // Reload the page to display changed state
                location.reload();
            });
        }
        // Else if the burger has already been devoured, delete the burger from the database
        else{
            // Using delete method to delete burger
            $.ajax("/api/burgers/" + id, {
                type: "DELETE"
            }).then(function(){
                console.log("Digested burger!");
                // Reload the page to delete burger from page
                location.reload();
            });
        }
    });
});