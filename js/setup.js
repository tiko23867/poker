window.onload = function() {
	shuff();
	getCards()
};

function restart()
{
	location.reload()
}

//Global Vars
var cards = [];
var playerOne;
var playerTwo;


function shuff()
{
	$.ajax({
			url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/shuffle/',
			success: function (resp) {
			},
			error: function () {}
		});
}

function getCards(callback) {

    myFunction(function(d) {

			var img = [];
			for (var i = 0; i < d.cards.length; i++)
			{
				img.push(d.cards[i].image);
			}

			set(makePlayers(d.cards), img);

    });
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
    });
}

function makePlayers(cards)
{
	var Cp1 = [cards[0],cards[1]];
	var Cp2 = [cards[2],cards[3]];

	var p1 = new Player(Cp1, 1000);
	var p2 = new Player(Cp2, 1000);

	playerOne = p1;
	playerTwo = p2;

	var players = [p1, p2];

	return players;
}



function set(players, image)
{

	var p = parseInt(players[0].money);
	var o = parseInt(players[1].money);

	$('#pmon').text(p);
	$('#omon').text(o);

	$('#poke1').attr('src', image[0]);
	$('#poke2').attr('src', image[1]);

	$('#op1').attr('src', image[2]);
	$('#op2').attr('src', image[3]);

}
