let fib = [0, 1];
let nextFib = fib[0] + fib[1];

while (nextFib <= 200) {
    fib.push(nextFib);
    nextFib = fib[fib.length - 1] + fib[fib.length - 2];
}

console.log(fib.join(' '));
