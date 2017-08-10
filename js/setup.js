const fs = require("fs");
var path = require('path');
var p = path.join(__dirname, 'extra/file.txt');

//Global Vars
var cards = [];
var playerOne;
var playerTwo;

window.onload = function() {
	getId();
	shuff();
	getCards();
}

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

function getId()
{
	fs.readFile(p, 'utf8', function (err, data) {
  if (err) return console.log(err);
//	var deckId = data;

		if (data.length === 0)
		{
			$.ajax({
					url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
					success: function (resp)
					{
						fs.writeFile(p, resp['deck_id'], (err) =>
						{
						    if (err)
								{
						        alert("An error ocurred updating the file" + err.message);
						        console.log(err);
						        return;
						    }

						  //  alert("The file has been succesfully saved");
						});
					}
			});

/*
			//Get the new id
				fs.readFile(p, 'utf8', function (err, data)
				{
			  	if (err) return console.log(err);

					else
					var deckId = data;
				})*/

		}


	});

}

var mid = 1;

function shuff()
{

	fs.readFile(p, 'utf8', function (err, data)
	{
			if (err) return console.log(err);

		$.ajax({
				url: 'https://deckofcardsapi.com/api/deck/' + data + '/shuffle/',
				success: function (resp) {
					mid = 1;
					for (var i = 1; i < 6; i++)
					{
						$('#mid' + i).remove();
					}
				},
				error: function () {}
			});
	});
}

function getCards()
{
	fs.readFile(p, 'utf8', function (err, data)
	{
			if (err) return console.log(err);

			$.ajax({
					url: 'https://deckofcardsapi.com/api/deck/'+ data + '/draw/?count=4',
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

	$('#op1').attr('src', "pic/cbr.png");
	$('#op2').attr('src', "pic/cbr.png");
	cards = [];

}
