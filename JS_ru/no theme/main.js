var calc = {
	read: function() {
		this.a = +prompt("a",0);
		this.b = +prompt("b",0);
	},
	sum: function() {
		var sum = this.a + this.b;
		return sum;
	},
	mul: function() {
		var mul = this.a * this.b;
		return mul;
	}
}
calc.read();
alert(calc.sum());
alert(calc.mul());