function flipFlop() {
    let randomNumber = Math.floor((Math.random() * 10) + 1);

    console.log("Zahl: " + randomNumber);

    return new Promise((resolve, reject) => {
        if ((randomNumber % 2) == 0) {
            resolve();
        } else {
            reject();
        }
    });
}

let promise = flipFlop();

promise.then(() => console.log("Zahl ist durch 2 teilbar."));

promise.catch(() => console.log("Zahl ist nicht durch 2 teilbar."));