function reduce(arr, fn, acc, index = 0) {
    if (index > arr.length - 1) return acc;
    return reduce(arr, fn, fn(acc, arr[index], index, arr), ++index);
}

module.exports = reduce