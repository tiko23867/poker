class Player {
	constructor(hand, money) {
		this.hand = hand;
		this.money = money;
		this.highC = 0;
		this.deck = [];
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


	 //set setHighestCard(cards) {
	 set setDeck(cards) {
		 var h1 = this.hand[0];
		 var h2 = this.hand[1];

		 var holder = cards.slice();
		 holder.push(h1);
		 holder.push(h2);

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


		 value.pop();
		 value.pop();
		 this.deck = value.slice();
		 console.log(this.deck)

		 }

	 get highestCard() {
		 return this.highC;
	 }


	 set setHighestCard(num) {
			this.highC = this.deck[num];
	 }

	 set setScore(cards) {
		 var s = 0;

		 if (this.hand[0].value === this.hand[1].value)
		 {
		 		s++;
				console.log("Match in hand")
		 }

		 	for (var i = 0; i < cards.length; i++)
		 	{
		 		if (cards[i].value === this.hand[0].value || cards[i].value === this.hand[1].value)
		 		{
		 			s++;

					if (this.highC === cards[i])
					{
						if (this.secondC !== null)
						{
							this.highC = this.secondC;
							this.secondC = null;
						}

						else
						{
							this.highC = this.thirdC;
						}
					}
				}
		 	}
				this.score = s;
		}

		get getScore() {
			return this.score;
		}
}
