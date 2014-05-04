
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

for (let item of generator()) {
    console.log(item);
}
