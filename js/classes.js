class Player {
	constructor(hand, money) {
		this.hand = hand;
		this.money = money;
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

}
