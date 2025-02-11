function zipList(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        result.push(arr1[i], arr2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(arr1, arr2) {
    return arr1.flatMap(function (item, index) { return [item, arr2[index]]; });
}
// Example usage
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
