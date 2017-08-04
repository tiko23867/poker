//Global Vars
var cards = [];
var playerOne;
var playerTwo;

window.onload = function() {
	shuff();
	getCards();

};

function restart()
{
	location.reload();
}

function newGame()
{
	shuff();
	getCards();
	$("#flop").attr("onclick",'flop()');
	$("#flop").html('Flop');
	$("#bet").attr("onclick",'bet()');

}

var mid = 1;

function shuff()
{
	$.ajax({
			url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/shuffle/',
			success: function (resp) {
				mid = 1;
				for (var i = 1; i < 6; i++)
				{
					$('#mid' + i).remove();
				}
			},
			error: function () {}
		});
}

function getCards() {

		$.ajax({
				url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/draw/?count=4',
				success: function (resp) {
					cards = resp.cards;
					if (playerOne || playerTwo)
						makePlayers();

					else
						makePlayers(1000);

					setTable()
				},
				error: function () {}
		});

}


function makePlayers(money)
{
	money = money || false;

	if (money !== false)
	{
		var Cp1 = [cards[0],cards[1]];
		var Cp2 = [cards[2],cards[3]];

		playerOne = new Player(Cp1, money);
		playerTwo = new Player(Cp2, money);

	}

	else
	{
		playerOne.setHand = [cards[0], cards[1]];
		playerTwo.setHand = [cards[2], cards[3]];
	}



}

function setTable()
{
	var p = parseInt(playerOne.getMoney);
	var o = parseInt(playerTwo.getMoney);

	$('#pmon').text(p);
	$('#omon').text(o);

	$('#poke1').attr('src', cards[0].image);
	$('#poke2').attr('src', cards[1].image);

	$('#op1').attr('src', cards[2].image);
	$('#op2').attr('src', cards[3].image);

}
