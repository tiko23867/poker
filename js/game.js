function bet()
{
	//var player = +($('#pmon').text());
	var pMon = playerOne.money;
	var oMon = playerTwo.money;
	var pot = +($('#pot').text());

	pMon -= 100;
	oMon -= 100;
	pot += 200;

	$('#pmon').text(pMon);
	$('#omon').text(oMon);
	$('#pot').text(pot);

	playerOne.money = pMon;
	playerTwo.money = oMon;

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


function end()
{
//console.log(cards[0].value)
//console.log(playerOne.hand[0].value);
//console.log(cards)
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
	console.log(pot)

	if (pionts_playerOne > pionts_playerTwo)
	{
		alert("Player 1 wins!")
		pot = playerOne.chips + pot;
		playerOne.money = pot;
	}

	else if (pionts_playerOne < pionts_playerTwo)
	{
		alert("Player 2 wins!")
		pot = playerTwo.chips + pot;
		playerTwo.money = pot;
	}

	else
	{
		alert("TIe!")
		var half = pot / 2;


		playerOne.money = half + playerOne.chips;
		playerTwo.money = half + playerTwo.chips;

	}

	$('#pmon').text(playerOne.chips);
	$('#omon').text(playerTwo.chips);
	$('#pot').text(0);

	
}
