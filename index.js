function calculateSum(num1, num2){
    return num1 + num2;
}
console.log(calculateSum(5,7)); 
// print "Hello, World" and log the current date
console.log("Hello, World!");
const currentDate = new Date();
console.log(currentDate);
//program to print number 1 to 10
for (let i = 1; i <=10; i++) {
    console.log(i);
}
//find largest number in an array
const numbers = [12, 34, 5, 67, 89];
let largestNumber = numbers[0];
for (let i = 1; i< numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}
console.log(largestNumber);


