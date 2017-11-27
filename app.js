let tvShows = ["family guy", "game of thrones", "always sunny in philadelphia", "walking dead", "friends", "seinfeld"]

// =============== For Loop to create a button for each show in tvShows array ================================
for (let i = 0; i < tvShows.length; i++) {
    const element = tvShows[i];
    let button = $("<button>");

    button.addClass("btn btn-primary show-button");
    button.attr("data-show", element);
    button.attr("type", "submit");
    button.text(element);
    $("#buttons").append(button);
}

// ============== On click function to get gifs from giphy api when button is clicked =========================
$(".show-button").on('click', function () {
    let showName = $(this).attr("data-show");
    let queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + showName + "&api_key=2BRsP7hdMyRtDUKHz5GFVFy7b1utU4oC";
    
    $.ajax ({
        url: queryUrl,
        method: "GET",
    }).done(function (response) {

        console.log(response);
    })


 })