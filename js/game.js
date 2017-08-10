

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
				var txt1 = '<img class="card" id=' + id + ' src=""></img>';
				$( txt1 ).insertBefore( "#pot" );
				$('#mid' + mid).attr('src', data.cards[0].image);
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
	playerOne.setDeck = cards;
	playerOne.setScore = cards;

	playerTwo.setDeck = cards;
	playerTwo.setScore = cards;

	var pot = +($('#pot').text());

	whowins();

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
