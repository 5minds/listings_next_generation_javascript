var MyClass = (function() {

	var priv = Symbol('priv');

	function MyClass() {
		this.publ = "public";
		this[priv] = "private"
	}

	MyClass.prototype.print = function() {
		console.log(this.publ);
		console.log(this[priv]);
	};

	return MyClass;

})();

var my = new MyClass();

my.print();
my["publ"] = "new value";

var priv = Symbol('priv');
my[priv] = "new prop";

my.print();
console.log(my[priv]);
