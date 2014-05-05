require('es6-shim');

var s = new Set();

s.add('a');
s.add({hello: 'world'});

console.log("a?: " + s.has('a'));

s.forEach(function(item) {
    console.log("item: " + JSON.stringify(item));
});