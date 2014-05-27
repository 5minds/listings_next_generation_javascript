
// exportieren von Variablen 
export var firstname = "Martin";
export var lastname = "Möllenbeck";
export var position = "Geschäftsführer";

// exportieren von Funktionen
export var fkt = function(name) {
    console.log("Hallo " + name);
};

// exportieren einer Klasse
export class MyClass {
	
}

// Standard-Export
export default function default_fkt() {
    console.log("Standard-Funktion");
};