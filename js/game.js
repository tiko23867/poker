

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

		$.ajax({
		 url: 'https://deckofcardsapi.com/api/deck/'+ data + '/draw/?count=1',
			type:"get",
			success: (function(data){
				var id = "mid";
				id += mid;
				var txt1 = '<img id=' + id + ' src=""></img>';
				$( txt1 ).insertBefore( "#pot" );
				$('#mid' + mid).attr('src', data.cards[0].image);
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
	playerOne.setScore = cards;
	playerOne.setHighestCard = cards;

	playerTwo.setScore = cards;
	playerTwo.setHighestCard = cards;

	var pot = +($('#pot').text());

	if (playerOne.getScore > playerTwo.getScore)
	{
		alert("Player 1 wins!")
		pot = playerOne.getMoney + pot;
		playerOne.setMoney = pot;
	}

	else if (playerOne.getScore < playerTwo.getScore)
	{
		alert("Player 2 wins!")
		pot = playerTwo.getMoney + pot;
		playerTwo.setMoney = pot;
	}

	//It is a tie so compares the highest card
	else
	{
		if (playerOne.highestCard > playerTwo.highestCard)
		{
			alert("Player 1 won with a " + playerOne.highestCard + " kicker");
			pot = playerOne.getMoney + pot;
			playerOne.setMoney = pot;
		}

		else if (playerOne.highestCard < playerTwo.highestCard)
		{
			alert("Player 2 won with a " + playerTwo.highestCard + " kicker");
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

	console.log("Player One's pionts " + playerOne.score);
	console.log("Player One's Highest card " + playerOne.highestCard);

	console.log("Player Two's pionts " + playerTwo.score);
	console.log("Player Two's Highest card " + playerTwo.highestCard);

	$('#pmon').text(playerOne.getMoney);
	$('#omon').text(playerTwo.getMoney);
	$('#pot').text(0);

	$('#op1').attr('src', playerTwo.getHand[1]['image']);
	$('#op2').attr('src', playerTwo.getHand[0]['image']);

	$("#flop").attr("onclick",'alert("Click New Game")');
	$("#bet").attr("onclick",'alert("Restart The Game")');

}
