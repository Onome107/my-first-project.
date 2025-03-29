//Create a Uint8Array with a length of 5
const uint8Array = new Uint8Array(5);

// Populate the array with values
uint8Array[0] = 10;
uint8Array[1] = 20;
uint8Array[2] = 30;
uint8Array[3] = 40;
uint8Array[4] = 50;

// print the original array
console.log("Original array");
console.log(uint8Array);

// reverse the array
const reversedArray = uint8Array.slice().reverse();

// print the reversed array
console.log("Reversed array:");
console.log(reversedArray);