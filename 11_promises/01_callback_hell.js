function timeout(name, duration, callback) {
    let doTimeout = function() {
        console.log("doTimeout "+ name + " called.");
        callback(null);
    };

    setTimeout(doTimeout, duration);
}

try {
    timeout("to_1", 100, (err) => {
        if (err) {
            console.log(err);
        } else {
            timeout("to_2", 200, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    timeout("to_3", 300, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("callback's done ;-)");
                        }
                    });
                }
            });
        }
    });
} catch (err) {
    console.log("ERR: " + err);
}