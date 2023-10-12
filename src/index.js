function reverse(n) {
    let str = n.toString().split("").reverse().join("");

    return parseInt(str, 10);
}

module.exports = reverse;


