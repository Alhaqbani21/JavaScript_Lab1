//#####Q1#####
var title = 'Welcome to My JavaScript Lesson';
let titleArray = title.split('');
let reversedTitleArray = titleArray.reverse();
let titleReversed = reversedTitleArray.join('');

console.log('\n#####Q1#####');
console.log(
  `1- The length for { Welcome to My JavaScript Lesson } is  ${title.length}`
);
console.log(`2- ${title.slice(0, 13)}`);
console.log(`3- ${title.toUpperCase()}`);
console.log(`4- ${title.toLowerCase()}`);
console.log(`5- ${title.replace('Welcome', 'Hello')}`);
console.log(`6- ${typeof title}`);
console.log(`7- ${titleReversed}`);

//#####Q2#####
console.log('\n#####Q2#####');

let number1 = 10;
let number2 = 20;
let number3 = 30;
console.log(`1- Min value is ${Math.min(number1, number2, number3)}`);
console.log(`2- Max value is ${Math.max(number1, number2, number3)}`);

if (number1 == number2) {
  console.log(`3- True ${number1} == ${number2}`);
} else {
  console.log(`3- False ${number1} =! ${number2}`);
}

//#####Q3#####
console.log('\n#####Q3#####');

year = 1900;
if (
  (year % 4 == 0 && year % 100 != 0) ||
  (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
) {
  console.log(`1- year: ${year} is leap year`);
} else {
  console.log(`1- year: ${year} is not leap year`);
}

//#####Q4#####
console.log('\n#####Q4#####');

inputNumber = 2;

if (inputNumber % 2 == 0) {
  console.log(`1- number: ${inputNumber} is Even`);
} else {
  console.log(`1- number: ${inputNumber} is Odd`);
}

//#####Q5#####
console.log('\n#####Q5#####');
var weight = 75;
var height = 1.8;

var bmi = weight / (height * height);

console.log(`1- BMI is ${Math.round(bmi * 100) / 100} `);
if (bmi < 15) {
  console.log('Very Very Underweight');
} else if (bmi >= 15 && bmi < 16) {
  console.log('Very Underweight');
} else if (bmi >= 16 && bmi < 18.5) {
  console.log('Very Underweight');
} else if (bmi >= 18.5 && bmi < 25) {
  console.log('Normal');
} else if (bmi >= 25 && bmi < 30) {
  console.log('Overweight');
} else if (bmi > 30 && bmi < 35) {
  console.log('Overweight level 1');
} else if (bmi >= 35 && bmi <= 40) {
  console.log('Overweight level 2');
} else {
  console.log('Obese');
}

//#####Q6#####
console.log('\n#####Q6#####');
// تغيير قيم `shirtWidth` و `shirtLength` و `shirtSleeve` لاختبار الشيفرة
var shirtWidth = 19;
var shirtLength = 28;
var shirtSleeve = 8.13;

if (
  shirtWidth >= 18 &&
  shirtWidth < 20 &&
  shirtLength >= 28 &&
  shirtLength < 29 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve < 8.38
) {
  console.log(
    `1- Shirt width is ${shirtWidth}, Shirt length is ${shirtLength} and Shirt sleeve is ${shirtSleeve}-- Size is S`
  );
} else if (
  shirtWidth >= 20 &&
  shirtWidth < 22 &&
  shirtLength >= 29 &&
  shirtLength < 30 &&
  shirtSleeve >= 8.38 &&
  shirtSleeve < 8.63
) {
  console.log(
    `1- Shirt width is ${shirtWidth}, Shirt length is ${shirtLength} and Shirt sleeve is ${shirtSleeve}-- Size is M`
  );
} else if (
  shirtWidth >= 22 &&
  shirtWidth < 24 &&
  shirtLength >= 30 &&
  shirtLength < 31 &&
  shirtSleeve >= 8.63 &&
  shirtSleeve < 8.88
) {
  console.log(
    `1- Shirt width is ${shirtWidth}, Shirt length is ${shirtLength} and Shirt sleeve is ${shirtSleeve}-- Size is L`
  );
} else if (
  shirtWidth >= 24 &&
  shirtWidth < 26 &&
  shirtLength >= 31 &&
  shirtLength < 33 &&
  shirtSleeve >= 8.88 &&
  shirtSleeve < 9.63
) {
  console.log(
    `1- Shirt width is ${shirtWidth}, Shirt length is ${shirtLength} and Shirt sleeve is ${shirtSleeve}-- Size is XL`
  );
} else if (
  shirtWidth >= 26 &&
  shirtWidth < 28 &&
  shirtLength >= 33 &&
  shirtLength < 34 &&
  shirtSleeve >= 9.63 &&
  shirtSleeve < 10.13
) {
  console.log(
    `1- Shirt width is ${shirtWidth}, Shirt length is ${shirtLength} and Shirt sleeve is ${shirtSleeve}-- Size is 2XL`
  );
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log(
    `1- Shirt width is ${shirtWidth}, Shirt length is ${shirtLength} and Shirt sleeve is ${shirtSleeve}-- Size is 3XL`
  );
} else {
  console.log('Error in resolving the size');
}
