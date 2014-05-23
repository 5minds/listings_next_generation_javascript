function timeout(name, duration) {
    return new Promise((resolve, reject) => {
        let doTimeout = function() {
            console.log("doTimeout "+ name + " aufgerufen.");
            resolve();
        };

        setTimeout(doTimeout, duration);
    })
}

let p1 = timeout("zu_1", 100);
let p2 = timeout("zu_2", 200);
let p3 = timeout("zu_3", 300);

Promise.all([p1, p2, p3])
.then(() => {
    console.log("promises erledigt ;-)");
})
.catch((err) => {
    console.log(err);
});

