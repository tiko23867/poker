function whowins()
{

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
			tie();
		}

}

var num = 0;
function tie()
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
		num++;
		if (num > 5 )
		alert("TIE!")
		else
		{
			playerOne.setHighestCard = num;
			playerTwo.setHighestCard = num;
			tie();
		}
	}

}
