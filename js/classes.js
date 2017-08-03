class Player {
	constructor(hand, money) {
		this.hand = hand;
		this.money = money;
	}
	get chips() {
    return this.money;
  }

	get card() {
    return this.hand[0];
  }

}
