//function soma() {
//    return 4;
//}

function collatz(n) {

    if (n === 1) {
        return [n].concat(collatz(4));
    } else if (n === 2) {
        return [n, 1];
    } else if (n % 2 === 0) {
        return [n].concat(collatz(n / 2));
    } else {
        return [n].concat(collatz(n * 3 + 1));
    }
}
