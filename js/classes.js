class Player {
	constructor(hand, money) {
		this.hand = hand;
		this.money = money;
		this.highC = 0;
		this.secondC = 0;
		this.thirdC = 0;
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
		 var h1 = this.hand[0];
		 var h2 = this.hand[1];

		 var holder = cards;
		 holder.push(h1);
		 holder.push(h2);

/*
		 holder.sort();
		 holder.pop();
		 holder.pop();
*/

		 var value = [];
		 for (var i = 0; i < holder.length; i++)
		 {
			 value.push(holder[i].value);

			 value[i] = value[i] === "JACK" ? 11 :
			 			value[i] === "QUEEN" ? 12 :
						value[i] === "KING" ? 13 :
						value[i] === "ACE" ? 14 :
						value[i]
		 }

		 value.sort(function(a, b){return b - a});

		console.log("Sorted value " + value);


		 this.highC = value[0];
		 this.secondC = value[1];
		 this.thirdC = value[2];


/*
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
*/


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
