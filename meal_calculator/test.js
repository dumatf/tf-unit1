// CONSTANTS
var dishPrices = {
	chicken: 7.5,
	beef: 9.75,
	pork: 8.25,
	lamb: 8.25,
	tofu: 6.5,
	salad: 2.5
}

var Diner = function(name, dishes) {
	this.name = name;
	this.dishes = dishes;
	this.getTotal = function(tax) {
		var sum = 0;
		for (var i=0; i<this.dishes.length; i++) {
			sum += dishPrices[ this.dishes[i] ];
		}
		return sum * (1+(tax/100));
	}
};

//var stephen = new Diner("Stephen", ['chicken','salad']);
//console.log(stephen.getTotal(1.07));

function printBill(diners, menu, tip, tax) {
	var dinerTotals = {};
	var subtotal = 0;

	for (var i=0; i<diners.length; i++) {
		var dinerTotal = diners[i].getTotal(tax);
		dinerTotals[diners[i].name] = dinerTotal;
		subtotal += dinerTotal;
	}

	console.log("Total: "+subtotal);
	var tipTotal = subtotal * (tip/100);
	var totalWithTip = subtotal + tipTotal;
	console.log("Total with tip: "+totalWithTip);

	var tipSplit = tipTotal/(diners.length);
	for (var dinerTotal in dinerTotals) {
		dinerTotalWithTip = dinerTotals[dinerTotal] + tipSplit;
		console.log(dinerTotal+": "+dinerTotalWithTip);
	}
};

var stephen = new Diner("Stephen", ['chicken','lamb']);
var daniel = new Diner("Daniel", ['beef','salad']);
var lou = new Diner("Lou", ['pork','tofu'])
printBill([stephen, daniel, lou],dishPrices, 20, 7);