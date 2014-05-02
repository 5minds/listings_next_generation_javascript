// bad sample

var bad_message = "outer value";

{
	var bad_message = "inner value";
}

console.log("BAD: " + bad_message);


// good sample
let good_message = "outer value";

{
	let good_message = "inner value";
}

console.log("GOOD: " + good_message);

