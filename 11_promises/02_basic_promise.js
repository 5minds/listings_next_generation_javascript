function timeout(name, duration) {
    return new Promise((resolve, reject) => {
        let doTimeout = function() {
            console.log("doTimeout "+ name + " called.");
            resolve();
        };

        setTimeout(doTimeout, duration);
    })
}

let p1 = timeout("to_1", 100);
let p2 = timeout("to_2", 200);
let p3 = timeout("to_3", 300);

Promise.all([p1, p2, p3])
.then(() => {
    console.log("promises done ;-)");
})
.catch((err) => {
    console.log(err);
});

