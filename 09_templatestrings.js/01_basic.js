var moment = require('moment');

let world = 'Welt';

// Erstellen eines zusammengesetzten Text nach dem alten Muster.
let text_old = 'Altes hallo ' + world;
console.log(text_old);

// Erstellen eines zusammengesetzen Textes mit Hilfe von Template-Strings.
let text_new = `Neues hallo ${world}`;
console.log(text_new); 

let x = 1;
let y = 2;
let rechenergebnis = `${x} + ${y} = ${x+y}`;
console.log(rechenergebnis); 

function GetZeitpunkt() { return new Date(); }
let zeitpunktAusgabe = `Es ist jetzt: ${moment(GetZeitpunkt()).format("HH:MM")}`;
console.log(rechenergebnis); 
