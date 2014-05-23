// Schlechtes Beispiel
var bad_message = "äußere Wert";

{
    var bad_message = "innerer Wert";
}

console.log("SCHLECHT: " + bad_message);

// Gutes Beispiel
let good_message = "äußere Wert";

{
    let good_message = "innerer Wert";
}

console.log("GUT: " + good_message);

