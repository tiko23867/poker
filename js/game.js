

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
	$.ajax({
	 url: 'https://deckofcardsapi.com/api/deck/'+ 'cg7faq3ikib5' + '/draw/?count=1',
		type:"get",
		success: (function(data){
			//add card to index.html
			var id = "mid";
			id += mid;
			var txt1 = '<img id=' + id + ' src=""></img>';
			$( txt1 ).insertBefore( "#pot" );
			$('#mid' + mid).attr('src', data.cards[0].image);
			$('#mid' + mid).attr('class', shakes[Math.floor(Math.random() * shakes.length) + 0]);
			cards.push(data.cards[0]);
			mid++;
			})
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

	for (var i = 0; i < cards.length; i++)
	{
		if (cards[i].value === playerOne.hand[0].value || cards[i].value === playerOne.hand[1].value)
		{
			pionts_playerOne++;
		}

		if (cards[i].value === playerTwo.hand[0].value || cards[i].value === playerTwo.hand[1].value)
		{
			pionts_playerTwo++;
		}

	}

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
		alert("TIe!")
		var half = pot/2;

		playerOne.setMoney = (half + playerOne.getMoney);
		playerTwo.setMoney = (half + playerTwo.getMoney);

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

	$("#flop").attr("onclick",'alert("Click New Game")');
	$("#bet").attr("onclick",'alert("Restart The Game")');

}
