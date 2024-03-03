// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var Result = "Result" ;
console.log(Result) ;

var a = 10 ;
console.log("The value of a is : " + 10);


var a = 10 ;
var preA = ++a ;
console.log("The value of ++a is : " + preA);
console.log("Now the value a is : " + a);


var a = preA ;
var postA = a++ ;
console.log("The value of a++ is : " + postA);
console.log("Now the value a is : " + a);


var a = a ;
var postA = --a ;
console.log("The value of --a is : " + postA);
console.log("Now the value a is : " + a);


var a = a ;
var postA = a-- ;
console.log("The value of a-- is : " + postA);
console.log("Now the value a is : " + a);


var a = 2, b = 1;

// Stage 1: --a;
--a; // a is decremented before use, a becomes 1

// Stage 2: --a - --b;
--a;        // a is decremented before use, a becomes 0
--b;        // b is decremented before use, b becomes 0
var stage2Result = a - b; // Result: 0

// Stage 3: --a - --b + ++b;
--a;        // a is decremented before use, a becomes -1
--b;        // b is decremented before use, b becomes -1
++b;        // b is incremented before use, b becomes 0
var stage3Result = a - b + b; // Result : -1 - (-1) + 0 = 0

// Stage 4: --a - --b + ++b + b--;
--a;        // a is decremented before use, a becomes -2
--b;        // b is decremented before use, b becomes -2
++b;        // b is incremented before use, b becomes -1
var stage4Result = a - b + b--; // Result: -2 - (-2) + (-1) = 1, b is decremented after use

// Output the results
console.log("Result at --a : " + a);
console.log("Result at --a - --b : " + stage2Result);
console.log("Result at --a - --b + ++b : " + stage3Result);
console.log("Result at --a - --b + ++b + b-- : " + stage4Result);


// Take input from the user
var userName = ("Enter your name:");

// Greet the user
if (userName) {
  alert("Hello, " + userName + "! Welcome!");
} else {
  alert("Hello! Welcome!");
}


// Take input from the user
var userInput = ("Enter a number for its multiplication table:");

// Convert the user input to a number; use 5 by default if the input is invalid or empty
var number = parseInt(userInput) || 5;

// Generate and display the multiplication table
console.log("Multiplication Table of " + number);
for (var i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}


// Take input from the user for three subjects' names
var subject1 = ("English");
var subject2 = ("Urd");
var subject3 = ("Math");

// Total marks for each subject
var totalMarks = 100;

// Take obtained marks for each subject from the user
var obtainedMarks1 = ( 54);
var obtainedMarks2 = ( 54);
var obtainedMarks3 = ( 48);

// Calculate total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = totalObtainedMarks /  totalMarks  * 100;

// Display the result in a tabular format using console.table
console.table([
  {"Subject": subject1, "Total Marks": totalMarks, "Obtained Marks": obtainedMarks1},
  {"Subject": subject2, "Total Marks": totalMarks, "Obtained Marks": obtainedMarks2},
  {"Subject": subject3, "Total Marks": totalMarks, "Obtained Marks": obtainedMarks3},
  {"Total Obtained Marks": totalObtainedMarks},
  {"Percentage": percentage + "%"}
]);




