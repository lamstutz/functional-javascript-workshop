function repeat(operation, num) {
    return num <= 0 ? operation() : repeat(operation, --num);
}

// Do not remove the line below
module.exports = repeat
