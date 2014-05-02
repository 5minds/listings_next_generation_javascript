
var fkt = function(salutation, ...names) {
	names.forEach(function (name) {
		console.log(salutation + " " + name);
	});	
};

fkt("Hi", "Martin", "Holger");
fkt("Guten Tag", "Herr Möllenbeck");
