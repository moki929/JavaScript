let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length); // logs 7

let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];
console.log(complexArray.length); // logs 2

let abcd = ["a", "b", "c", "d"];
abcd[1] = "not b anymore"; //changed the second item in the array
console.log(abcd);

let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];
romanNumerals.unshift("XIX", "XX");
console.log(romanNumerals); // now equals ['XIX', 'XX', 'XXI', 'XXII']
romanNumerals.push(twentyThree);
console.log(romanNumerals); // now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

function mixedNumbers(arr2) {
  // Only change code below this line
  arr2.unshift("I", 2, "three");
  arr2.push(7, "VIII", 9);
  // Only change code above this line
  return arr2;
}
console.log(mixedNumbers(["IV", 5, "six"])); // ["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]

let greetings = ["whats up?", "hello", "see ya!"];
greetings.pop();
console.log(greetings); // ['whats up?', 'hello']
greetings.shift();
console.log(greetings); //   ['hello']
let popped1 = greetings.pop();
console.log(greetings); //   []
console.log(popped1); // hello

function popShift(arr) {
  let popped2 = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped2];
}
console.log(popShift(["challenge", "is", "not", "complete"])); // (2) ["challenge", "complete"]

let today = ["today", "was", "not", "so", "great"];
console.log(today.splice(2, 2)); // ["not", "so"]  (removes 2 elements beginning with the 3rd element)
console.log(today); //(3) ["today", "was", "great"]

let feeling = ["I", "am", "feeling", "really", "happy"];
console.log(feeling); //["I", "am", "feeling", "really", "happy"];
console.log(feeling.splice(1, 1)); // ["am"]
console.log(feeling); //["I", "feeling", "really", "happy"];
let newArray = feeling.splice(1, 2);
console.log(feeling); // ["I", "happy"];
console.log(newArray); // ["feeling", "really"];

const arr10 = [2, 4, 5, 1, 7, 5, 2, 1];
console.log(arr10.splice(0, 2)); // spliced [2, 4]
console.log(arr10); // then arr10 is [5, 1, 7, 5, 2, 1]
console.log(arr10.splice(1, 2)); // spliced [1, 7]
console.log(arr10); // then arr10 is [5, 5, 2, 1]
console.log(arr10.splice(2, 2)); // spliced [2, 1]
console.log(arr10); // finally arr10 is [5, 5] to equal 10 as requested

const numbers = [10, 11, 12, 99, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
// 99 is removed, and we add 13 and 14 at the same index
console.log(numbers); // returns [ 10, 11, 12, 13, 14, 15 ]

function htmlColorNames(arr76) {
  arr76.splice(0, 2, "DarkSalmon", "BlanchedAlmond"); // removes the first two items and replaces them
  return arr76;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

//slice copies, unlike splice that cuts
//slice: the first is the index at which to begin extraction, and the second is the index at which to stop extraction
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
console.log(weatherConditions); //["rain", "snow", "sleet", "hail", "clear"];
console.log(weatherConditions.slice(1, 2)); // snow
console.log(weatherConditions.slice(2, 99)); // ["sleet", "hail", "clear"];
console.log(weatherConditions); // weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

//*+-*-+*+-*+*+*+*+-+
console.clear(); // to clear the browser console,
//*+-*-+*+-*+*+*+*+-+

function forecast(arr) {
  // Only change code below this line
  arr.slice(3, 5);
  return arr;
}

// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

console.log();

console.log();
