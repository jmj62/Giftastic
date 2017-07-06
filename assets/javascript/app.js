"use strict";

$(document).ready(function()
{
    var topics = [ "Donald Trump", "Barrack Obama", "George W. Bush", "William Clinton", "George Bush", "Ronald Reagand", "Jimmy Carter", "Richard Nixon" ];

    function renderButtons()
    {
    	$("#playerButtons").empty();

        for (var i = 0; i < topics.length; i++)
        {
        	var playerBtn = $("<button>");
        	playerBtn.addClass("playerButton");
        	playerBtn.attr("data-player", topics[i]);
        	playerBtn.text(topics[i]);
        	$("#playerButtons").append(playerBtn);
        }
    }

    renderButtons();

    $("#add-player").on("click", function(event)
    {
    	event.preventDefault();
    	var player = $("#inputName").val();
    	topics.push(player);
    	$("inputName").val("");
    	renderButtons();
    	console.log(topics);
    })

});


function displayPlayerInfo()
{
    var players = $(this).attr("data-player");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + players + "&rating=pg&limit=13&api_key=2d298b1a68de43a292b9643f3cd50e7f";

    $.ajax({
          url: queryURL,
          method: "GET",
        })
    .done(function(response)
    {
        console.log(response);

        var dataArray = response.data;

        for (var j = 0; j < dataArray.length; j++)
        {
            var newImg = $("<img>");

            newImg.attr("src", dataArray[j].images.fixed_height.url);
      	     $("#players").append(newImg);
         }

    });
}

$(document).on("click", ".playerButton", displayPlayerInfo);

//  ("#playerButtons").on("click", displayPlayerInfo(){
// console.log(response);
//  });


    	// $("#playerButtons").append(playerBtn).val(inputName)

    // });

// $("#players").on("click", displayPlayerInfo);

// });
