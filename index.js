'use strict';

var traceur = require('traceur');
var path = require('path');

// Verwendung der als exprimentell gekennzeichneten Funktionen
traceur.options.experimental = true;

traceur.require.makeDefault(function(filename) {
    // Ausnahmen definieren.
    if (filename.indexOf("node_modules") != -1) {
        return false;
    }

    // require aus node.js fuer alle anderen Dateien ueberschreiben
    return true;
});

if (process.argv.length === 3) {
    var filename = process.argv[2];

    if (filename.indexOf("./") !== 0) {
        filename = "./" + filename;
    }

    // Laden der ES6 JavaScript-Datei
    require(filename);
} else {
    console.log("ERROR: ");
    console.log("    using " + path.basename(__filename) + " <filename to use>.");
    console.log("");
    console.log("    sample: " + path.basename(__filename) + " variables/sample_let.js");
    process.exit();
}