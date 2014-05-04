
var check_required_arg = function(name) {
    throw new Error("Parameter '" + name + "' is required.");
};

var fkt = function(arg=check_required_arg("arg")) {
    console.log(arg);
};

fkt("required arg");

try {
    fkt();
} catch(err) {
    console.log("ERR: " + err);
}
