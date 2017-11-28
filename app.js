let tvShows = ["family guy", "game of thrones", "always sunny in philadelphia", "walking dead", "friends", "seinfeld"]
createButton();

// =======  Get show name from input form field =====================

$("#add-show").on('click', function () { 
    let newShow = $("#show-search").val();
    tvShows.push(newShow);
    $("#buttons").empty();
    createButton();
 })

// =============== For Loop to create a button for each show in tvShows array ================================
function createButton() { 
    for (let i = 0; i < tvShows.length; i++) {
        const element = tvShows[i];
        let button = $("<button>");
    
        button.addClass("btn btn-primary show-button");
        button.attr("data-show", element);
        button.attr("type", "submit");
        button.text(element);
        $("#buttons").append(button);
    }
 }


// ============== On click function to get gifs from giphy api when button is clicked =========================
$(".show-button").on('click', function () {
    let showName = $(this).attr("data-show");
    let queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + showName + "&api_key=2BRsP7hdMyRtDUKHz5GFVFy7b1utU4oC&limit=10";
    
    $.ajax ({
        url: queryUrl,
        method: "GET",
    }).done(function (response) {
        for (let i = 0; i < response.data.length; i++) {
            const element = response.data[i];
            let url = element.embed_url;
            let still = element.images.original_still.url;

            console.log(i);
            console.log(url);
            console.log(still);
            let iframe = $("<iframe>");
            iframe.attr("src", url);
            // iframe.attr("class", "gif");

            // iframe.attr("data-animate", url);
            // iframe.attr("data-still", still);
            // iframe.attr("data-state", "still");

            $("#results").append(iframe);
        }
        console.log(response);
    })


 })

//  ===================== Get gif for dynamically created buttons ==================================
$('body').on('click', '.show-button', function(){
    let showName = $(this).attr("data-show");
    let queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + showName + "&api_key=2BRsP7hdMyRtDUKHz5GFVFy7b1utU4oC&limit=10";
    
    $.ajax ({
        url: queryUrl,
        method: "GET",
    }).done(function (response) {
        for (let i = 0; i < response.data.length; i++) {
            const element = response.data[i];
            let url = element.embed_url;
            let still = element.images.original_still.url;

            console.log(i);
            console.log(url);
            console.log(still);
            let iframe = $("<iframe>");
            iframe.attr("src", url);
            // iframe.attr("class", "gif");

            // iframe.attr("data-animate", url);
            // iframe.attr("data-still", still);
            // iframe.attr("data-state", "still");

            $("#results").append(iframe);
        }
        console.log(response);
    })
});