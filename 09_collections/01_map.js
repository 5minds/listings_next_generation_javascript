require('es6-shim');

var m = new Map();

m.set("key1", "val1");
m.set("key2", "val2");
m.set("key3", "val3");

m.forEach(function(item, key) {
    console.log(key + ": " + item);
});

console.log("key2?: " + m.has("key2"));

console.log("wert von key2: " + m.get("key2"));

console.log("lösche key2: " + m.delete("key2"))

console.log("key2?: " + m.has("key2"));
