function iterateElements(array) {
    return {
        [Symbol.iterator]: function() {
            var index = 0;
            var current;

            return {
                next: function() {
                    if (index < array.length) {
                        current = array[index++];
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

var iter = iterateElements([1,2,3]);

for (var item of iter) {
    console.log(item);
}
