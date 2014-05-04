let list = [1, 2, 3];

let generator = (for (x of list) x);

for (let item of generator) {
    console.log(item);
}