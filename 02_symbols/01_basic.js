var s = Symbol('prop');
var s2 = Symbol('prop');

var object = {};
object[s] = 42;
object[s2] = 1234;

// Ausgabe 42
console.log(object[s]);
// Ausgabe 1234
console.log(object[s2]);

// Ausgabe {}
console.log(object);

