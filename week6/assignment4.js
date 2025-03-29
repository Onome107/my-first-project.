function arrayToTypedArray(array)
{
    return new Int32Array(array)
}
function typedArrayToArray(typedArray) {
    return Array. from(typedArray);
}

const regularArray = [1, 2, 3, 4, 5];
console.log("Regular array:", regularArray);

const typedArray = arrayToTypedArray(regularArray);
console.log("Typed array:", typedArray);

const convertedArray = typedArrayToArray(typedArray);
console.log("Converted array:", convertedArray);