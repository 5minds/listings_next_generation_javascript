let x = 10,
	y = 20;

console.log(Math.max(x, y));

let list = [10, 20, 30, 40];

console.log(Math.max.apply(Math, list));

console.log(Math.max(...list));