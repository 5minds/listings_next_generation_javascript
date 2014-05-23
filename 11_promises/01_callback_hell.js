function timeout(name, duration, callback) {
    let doTimeout = function() {
        console.log("doTimeout "+ name + " aufgerufen.");
        callback(null);
    };

    setTimeout(doTimeout, duration);
}

try {
    timeout("zu_1", 100, (err) => {
        if (err) {
            console.log(err);
        } else {
            timeout("zu_2", 200, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    timeout("zu_3", 300, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("callback's erledigt ;-)");
                        }
                    });
                }
            });
        }
    });
} catch (err) {
    console.log("Fehler: " + err);
}