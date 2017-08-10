class Player {
	constructor(hand, money) {
		this.hand = hand;
		this.money = money;
		this.highC = 0;
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


	 set setHighestCard(cards) {
		 var high;
		 var h1 = this.hand[0].value;
		 var h2 = this.hand[1].value;

		 h1 = h1 === "JACK" ? 11 :
		 			h1 === "QUEEN" ? 12 :
					h1 === "KING" ? 13 :
					h1 === "ACE" ? 14 :
					h1

		 h2 = h2 === "JACK" ? 11 :
 		 			h2 === "QUEEN" ? 12 :
 					h2 === "KING" ? 13 :
 					h2 === "ACE" ? 14 :
 					h2



		 switch (h1 > h2) {
			 case true:
			 		high = h1;
					break;

			 case false:
			 		high = h2;
					break;

				}

			 for (var i = 0; i < cards.length; i++)
			 {
				 if (cards[i].value > high)
				 	high = cards[i].value;
			 }

			this.highC = high;

		 }

	 get highestCard() {
		 return this.highC;
	 }

	 set setScore(cards) {
		 var s = 0;

		 if (this.hand[0].value === this.hand[1].value)
		 s++;

		 	for (var i = 0; i < cards.length; i++)
		 	{
		 		if (cards[i].value === this.hand[0].value || cards[i].value === this.hand[1].value)
		 		{
		 			s++;
				}

		 	}
				this.score = s;
		}

		get getScore() {
			return this.score;
		}
}
