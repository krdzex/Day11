// Only change code below this line
function splitArrayInGroups(arr, n) {
    var brojac = 0;
    var result = [];
    for (var i = 0; i < arr.length; i += n) {
        if (brojac < n) {
            result.push(arr.slice(i, i + n));
        }
        brojac++;
    }
    return result;
}
// Only change code above this line
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;
