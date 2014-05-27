// 01_import.js

// Die Variablen 'firstname' und 'lastname' importieren
import {firstname, lastname} from './02_export';

console.log(firstname);
console.log(lastname);

// Die Funktion 'fkt' als 'hello_world' importieren und die Klasse
// mit dem exportierten Namen 'MyClass' importieren
import {fkt as hello_world, MyClass} from './02_export';

hello_world("welt");

let myClass = new MyClass();

// Default importieren
import default_fkt from './02_export';

default_fkt();
