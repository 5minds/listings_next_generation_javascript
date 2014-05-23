
var check_required_arg = function(name) {
    throw new Error("Parameter '" + name + "' ist erforderlich.");
};

var fkt = function(arg=check_required_arg("arg")) {
    console.log(arg);
};

fkt("erforderlicher Wert");

try {
    fkt();
} catch(err) {
    console.log("FEHLER: " + err);
}
