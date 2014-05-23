// Schlechtes Beispiel
var bad_func = [];

for (var i=0; i < 10; i++) {
    bad_func.push(function() {
        console.log("SCHLECHT: " + i);
    });
}

bad_func.forEach(function(func) {
    func();
});

console.log("");


// Gutes Beispiel
var good_func = [];

for (let j=0; j < 10; j++) {
    good_func.push(function() {
        console.log("GUT: " + j);
    });
}

good_func.forEach(function(func) {
    func();
});

