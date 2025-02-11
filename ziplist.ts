function zipList<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
    let result: (T | U)[] = [];
    
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i], arr2[i]);
    }

    return result;
}

function zipListTheFunctionalWay<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
    return arr1.flatMap((item, index) => [item, arr2[index]]);
}

// Example usage
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
