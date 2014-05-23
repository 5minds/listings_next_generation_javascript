function iterateElements(min, max, count) {
    return {
        [Symbol.iterator]: function() {
            var index = 0;
            var current = 0;

            return {
                next: function() {
                    if (index < count) {
                        index++;
                        current = Math.round(Math.random() * (max - min)) + min;
                        return {
                            value: current,
                            done: false
                        };
                    } else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            };
        }
    };
}

var iter = iterateElements(5, 10, 3);

for (var item of iter) {
    console.log(item);
}
