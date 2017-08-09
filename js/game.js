

function bet()
{
	var pMon = playerOne.getMoney;
	var oMon = playerTwo.getMoney;
	if (pMon <= 0 || oMon <= 0)
	return;

	var howMuch = +($('#howmuch').val());


	if (/^[0-9]+$/.test(howMuch) === false) {
		Materialize.toast('Use only numbers', 4000);
		return;
	}

	if (pMon - howMuch < 0 || oMon - howMuch < 0)
	{
		Materialize.toast('You do not have that much muns', 4000);
		return;
	}

	var pot = +($('#pot').text());

	pMon -= howMuch
	oMon -= howMuch;
	pot += (howMuch * 2);

	$('#pmon').text(pMon);
	$('#omon').text(oMon);
	$('#pot').text(pot);

	playerOne.money = pMon;
	playerTwo.money = oMon;

}


var shakes = ["shake", "shake-little", "shake-slow", "shake-hard", "shake-horizontal",
"shake-vertical", "shake-rotate", "shake-opacity", "shake-crazy", "shake-chunk"]


function flop()
{
	fs.readFile(p, 'utf8', function (err, data)
	{
			if (err) return console.log(err);
			deckId = data;
			console.log(deckId)

		$.ajax({
		 url: 'https://deckofcardsapi.com/api/deck/'+ deckId + '/draw/?count=1',
			type:"get",
			success: (function(data){
				var id = "mid";
				id += mid;
				var txt1 = '<img id=' + id + ' src=""></img>';
				$( txt1 ).insertBefore( "#pot" );
				$('#mid' + mid).attr('src', data.cards[0].image);
				$('#mid' + mid).attr('class', shakes[Math.floor(Math.random() * shakes.length) + 0]);
				$('#mid' + mid).addClass("card");
				cards.push(data.cards[0]);
				mid++;
				})
			});
		});

		if (mid === 3)
			$("#flop").html('Turn');

		if (mid === 4)
			$("#flop").html('River');

		if (mid === 5)
		{
			$("#flop").attr("onclick",'end()');
			$("#flop").html('See Who Won');
		}
}


function end()
{
var pionts_playerOne = 0;
var pionts_playerTwo = 0;
var p1HighestCard = null;
var p2HighestCard = null;

if (playerOne.hand[0].value === playerOne.hand[1].value)
	pionts_playerOne++;

if (playerTwo.hand[0].value === playerTwo.hand[1].value)
	pionts_playerTwo++;

playerOne.setScore = cards;

console.log(playerOne);
pionts_playerOne += playerOne.getScore;

/*
	for (var i = 0; i < cards.length; i++)
	{
		if (cards[i].value === playerOne.hand[0].value || cards[i].value === playerOne.hand[1].value)
		{
			pionts_playerOne++;
			if (p1HighestCard === null)
				p1HighestCard = playerOne.highestCard;


			else
			{
				if (cards[i].value > p1HighestCard)
					p1HighestCard = cards[i].value;
			}
		}

		if (cards[i].value === playerTwo.hand[0].value || cards[i].value === playerTwo.hand[1].value)
		{
			pionts_playerTwo++;
			if (p2HighestCard === null)
				p1HighestCard = playerTwo.highestCard;

			else
			{
				if (cards[i].value > p2HighestCard)
					p2HighestCard = cards[i].value;
			}
		}

	}*/

	var pot = +($('#pot').text());

	if (pionts_playerOne > pionts_playerTwo)
	{
		alert("Player 1 wins!")
		pot = playerOne.getMoney + pot;
		playerOne.setMoney = pot;
	}

	else if (pionts_playerOne < pionts_playerTwo)
	{
		alert("Player 2 wins!")
		pot = playerTwo.getMoney + pot;
		playerTwo.setMoney = pot;
	}

	else
	{
		if (p1HighestCard > p2HighestCard)
		{
			alert("Player 1 won!");
			pot = playerOne.getMoney + pot;
			playerOne.setMoney = pot;
		}

		else if (p1HighestCard < p2HighestCard)
		{
			alert("Player 2 won!");
			pot = playerTwo.getMoney + pot;
			playerTwo.setMoney = pot;
		}

		else
		{
			alert("TIE!");
			var half = pot/2;
			playerOne.setMoney = (half + playerOne.getMoney);
			playerTwo.setMoney = (half + playerTwo.getMoney);
		}


	}

	if (playerOne.getMoney <= 0 || playerTwo.getMoney <= 0)
	{
		$("#ng").attr("onclick",'alert("Restart The Game")');

		if (playerOne.getMoney <= 0)
			alert("You lose");

		else
		 	alert("You win");

	}

	$('#pmon').text(playerOne.getMoney);
	$('#omon').text(playerTwo.getMoney);
	$('#pot').text(0);

	$('#op1').attr('src', playerTwo.getHand[1]['image']);
	$('#op2').attr('src', playerTwo.getHand[0]['image']);

	$("#flop").attr("onclick",'alert("Click New Game")');
	$("#bet").attr("onclick",'alert("Restart The Game")');

}
