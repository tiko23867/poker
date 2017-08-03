window.onload = function() {
	newShuff();
	getCards()
};

var cards = [];


function newShuff()
{
	$.ajax({
			url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/shuffle/',
			success: function (resp) {
			},
			error: function () {}
		});
}

function getCards(callback) {
	var players = [];
    myFunction(function(d) {

			var img = [];
			for (var i = 0; i < d.cards.length; i++)
			{
				img.push(d.cards[i].image);
			}

			set(makePlayers(d.cards), img);

    });

}

function makePlayers(cards)
{
	var p1 = [cards[0],cards[1]];
	var p2 = [cards[2],cards[3]];

	var playerOne = new Player(p1, 1000);
	var playerTwo = new Player(p2, 1000);

	var players = [playerOne, playerTwo];


	return players;
}



function myFunction(callback) {
    var data;
    $.ajax({
      	url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/draw/?count=4',
        success: function (resp) {
        	data = resp;
          callback(data);
        },
        error: function () {}
    }); // ajax asynchronus request
    //the following line wouldn't work, since the function returns immediately
    //return data; // return data from the ajax request
}

function set(players, image)
{
	console.log(image)

	var p = parseInt(players[0].chips);
	var o = parseInt(players[1].chips);

	$('#pmon').text(p);
	$('#omon').text(o);

	$('#poke1').attr('src', image[0]);
	$('#poke2').attr('src', image[1]);

	$('#op1').attr('src', image[2]);
	$('#op2').attr('src', image[3]);

}

/*
function getCard()
{

			//Send to php
			$.ajax({
			 // url:'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
			 url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/draw/?count=4',
			  type:"get",
			 // data: {}})
			  //contentType:"application/json; charset=utf-8",
			  //dataType:"text",
			  success: (function(data){
					//alert("server says " + msg);
			//alert(data);
			//$('#poke').src=data.cards[0].image;
	//		$('#poke1').attr('src', data.cards[0].image);
	//		$('#poke2').attr('src', data.cards[1].image);
	//		$('#op1').attr('src', data.cards[2].image);
	//		$('#op2').attr('src', data.cards[3].image);

	//		cards = data.cards;
		console.log(data.cards)
		return data.cards;

		})
	});

}*/

/*
function shuffle()
{

	$.ajax({
	 url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/shuffle/',
		type:"get",
		success: (function(data){
			for (var i = 1; i < 6; i++)
			{
				$('#mid' + i).attr('src', "");
			}

			$('#pmon').text(1000);
			$('#omon').text(1000);

			mid = 1;

				$.ajax({
				 url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/draw/?count=4',
				  type:"get",
				  success: (function(data){
						p = [data.cards];
						console.log(p);
						return p;

					})
				});

			})
	});


}*/

function bet()
{
	var player = +($('#pmon').text());
	var opponet = +($('#omon').text());
	var pot = +($('#pot').text());

	player -= 100;
	opponet -= 100;
	pot += 200;

	$('#pmon').text(player);
	$('#omon').text(opponet);
	$('#pot').text(pot);

	$('#poke1').attr('src', data.cards[0].image);
	$('#poke2').attr('src', data.cards[1].image);

}

function end()
{
	console.log(cards[0]);

}

var mid = 1;

function flop()
{
	$.ajax({
	 url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/draw/?count=1',
		type:"get",
		success: (function(data){
			$('#mid' + mid).attr('src', data.cards[0].image);
			cards.push(data.cards[0]);
			mid++;
			})
		});

		if (mid === 5)
		end();

}
