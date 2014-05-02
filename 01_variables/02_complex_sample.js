// bad example
var bad_func = [];

for (var i=0; i < 10; i++) {
	bad_func.push(function() {
		console.log("BAD: " + i);
	});
}

bad_func.forEach(function(func) {
	func();
});

console.log("");


// good example
var good_func = [];

for (let j=0; j < 10; j++) {
	good_func.push(function() {
		console.log("GOOD: " + j);
	});
}

good_func.forEach(function(func) {
	func();
});

