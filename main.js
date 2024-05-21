// Q1

let tringleLength = 2;
let tringleWidth = 4;
let area = tringleLength * tringleWidth;

console.log(`Q1 \nArea of the tringle is ${area} \n`);

// Q2
let tempretureCelisues = 30;

let celisuesToFahrenheit = (tempretureCelisues * 9) / 5 + 32;
let fahrenheitToCelisues = ((celisuesToFahrenheit - 32) * 5) / 9;

console.log(
  `Q2\n${tempretureCelisues}C is ${Math.round(celisuesToFahrenheit * 1) / 1}F`
);
console.log(
  `${celisuesToFahrenheit}F is ${Math.round(fahrenheitToCelisues * 1) / 1}F \n`
);

// Q3
let hour = 1;
let seconds = hour * 60 * 60;

console.log(`Q3 \n${hour} hours = ${seconds} Seconds \n`);

// Q4
let thingOne = 'thingOne';
let thingTwo = 'thingTwo';
console.log('Q4\n' + thingOne + ' and ' + thingTwo + '\n');

let bill = 10.25 + 3.99 + 7.15;

let tip = 0.15;

total = bill * tip + bill;

console.log(
  `Q5\ntotal before tip ${bill}\ntip value is ${tip} \ntotal after tip ${total}\n`
);

//Q6
var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';
var madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(`Q6\n${madLib}`);

//Q7
let firstName = 'Abdulaziz';
let interest = 'Building PCs';
let hobby = 'Swimming';
let awesomeMessage = `Hi My name is ${firstName},I'm intersted in ${interest}, and I'love ${hobby}. `;

console.log(`\nQ7\n${awesomeMessage}`);
