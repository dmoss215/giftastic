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
            let url = element.images.fixed_height.url;
            let still = element.images.original_still.url;

            console.log(i);
            console.log(url);
            console.log(still);
            let img = $("<img>");
            img.attr("src", still);
            img.attr("class", "gif");

            img.attr("data-animate", url);
            img.attr("data-still", still);
            img.attr("data-state", "still");

            $("#results").append(img);
        }
        console.log(response);
    })
});

$('body').on('click', '.gif', function (param) { 
    let state = $(this).attr('data-state');
    let img = $(this);
    // =============================================

    // Check if the variable state is equal to 'still',
    // then update the src attribute of this image to it's data-animate value,
    // and update the data-state attribute to 'animate'.

    // If state is equal to 'animate', then update the src attribute of this
    // image to it's data-still value and update the data-state attribute to 'still'

    console.log(state);
    // CODE GOES HERE
    if (state === 'still') {
      img.attr("src", img.attr("data-animate"));
      img.attr("data-state", "animate");
    } else {
      img.attr("src", img.attr("data-still"));
      img.attr("data-state", "still");
    }
 });