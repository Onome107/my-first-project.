function flattenArray(nestedArray){
    return nestedArray.flat();
}
const nestedArray = [[1, 2], [3,4], [5]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);