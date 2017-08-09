class Player {
	constructor(hand, money) {
		this.hand = hand;
		this.money = money;
		this.score = 0;
	}
	get getMoney() {
    return this.money;
  }

	get getHand() {
    return this.hand;
  }

	set setMoney(newMoney) {
			 this.money = newMoney;
	 }

	 set setHand(newHand) {
		 this.hand = newHand;
	 }

	 get highestCard() {
		 if (this.hand[0].value >= this.hand[1].value)
		 	return this.hand[0].value;

		else return this.hand[1].value;
	 }

	 set setScore(cards) {
		 var s = 0;
		 //var highestC = this.highestCard();

		 //if (getHand[0])

		 console.log(cards);

		 	for (var i = 0; i < cards.length; i++)
		 	{
		 		if (cards[i].value === this.hand[0].value || cards[i].value === this.hand[1].value)
		 		{
					console.log("Matching " + cards[i].value);
		 			s++;
				}


		 	}

				this.score = s;

		}

		get getScore() {
			return this.score;
		}
}
