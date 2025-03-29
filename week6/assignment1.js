function processArray(arr){
// filter even numbers
    const evenNumbers =
    arr.filter(num => num % 2 ===0);
    // calculate sum of all numbers using reduce()
    const sum = 
    arr .reduce((accumulator, current) => accumulator + current, 0);
    return { evenNumbers, sum};
}
const numbers = [1, 2, 3, 4, 5, 6];
const result = 
processArray(numbers);
console.log(result);