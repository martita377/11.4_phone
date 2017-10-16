
function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and the size is " + this.size +".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 5.5);
iPhone6S.printInfo();

var SamsungGalaxyS6 = new Phone("Samsung", 1350, "white", 5.1);
SamsungGalaxyS6.printInfo();

var OnePlusOne = new Phone("OnePlus", 1450, "black", 5.5);
OnePlusOne.printInfo();