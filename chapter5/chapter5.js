// chapter_5
// 1. Write a program that take two numbers & add them in anew variable. Show the result in your browser.

var a = 5 ;
var b = 3 ;
var sum = a + b ;
console.log("The result of sum " + a + " and " + b + " is " + sum) ;

// Subtract
var a = 5 ;
var b = 3 ;
var subtract = a - b ;
console.log("The result of subtraction " + a + " and " + b + " is " + subtract) ;

// multiplication
var a = 5 ;
var b = 3 ;
var multiply = a * b ;
console.log("The result of multiplication " + a + " and " + b + " is " + multiply) ;

// division
var a = 5 ;
var b = 3 ;
var divide = a / b ;
console.log("The result of division " + a + " and " + b + " is " + divide) ;

// module
var a = 5 ;
var b = 3 ;
var module = a % b ;
console.log("The result of module " + a + " and " + b + " is " + module) ;

// MATH EXPRESSIONS 
// a. Declare a variable.
var MyVariable;

// b. Show the value of the variable after declaration.
console.log("Value after variable declaration is: " + MyVariable);

// c. Initialize the variable with some number.
var MyVariable = 5 ;

// d. Show the initial value of the variable.
console.log("Initial value: " + MyVariable);

// e. Increment the variable.
MyVariable++ ;

// f. Show the value of the variable after increment.
console.log("Value after increment is: " + MyVariable );

// g. Add 7 to the variable.
MyVariable += 7;

// h. Show the value of the variable after addition.
console.log("Value after addition is: " + MyVariable);

// i. Decrement the variable.
MyVariable--;

// j. Show the value of the variable after decrement.
console.log("Value after decrement is: " + MyVariable);

// k. Show the remainder after dividing the variable's value by 3.
var remainder = MyVariable % 3;

// l. Output: "The remainder is: 0".
console.log("The remainder is: " + remainder);



// Store the ticket price in a variable
var ticketPrice = 600;

// Calculate the cost of buying 5 tickets
var totalCost = ticketPrice * 5;

// Display the result in the console
console.log("Cost of one movie ticket: " + ticketPrice + " PKR");
console.log("Cost of buying 5 tickets: " + totalCost + " PKR");


// Prompt the user to enter a number
var number = 4 ;

// Check if the input is a valid number
if (!isNaN(number)) {
    // Display the multiplication table in the console
    console.log("Multiplication Table for " + number + ":");
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
} else {
    // Display an error message if the input is not a valid number
    console.log("Invalid input. Please enter a valid number.");
}


// a. Store a Celsius temperature into a variable.
var celsiusTemperature = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemperature2 = 77;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
console.log(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");


// Store the price and quantity information
var priceItem1 = 650;  // Price of item 1
var quantityItem1 = 3;   // Ordered quantity of item 1

var priceItem2 = 100;  // Price of item 2
var quantityItem2 = 7;   // Ordered quantity of item 2

var shippingCharges = 100;  // Shipping charges

// Calculate the total cost for each item and the overall total cost
var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;
var subtotal = totalCostItem1 + totalCostItem2;
var totalCostWithShipping = subtotal + shippingCharges;

// Display the checkout details
console.log("Shopping Cart Checkout:");
console.log("Item 1 - Price: PKR " + priceItem1 + ", Quantity: " + quantityItem1 + ", Total Cost: PKR " + totalCostItem1);
console.log("Item 2 - Price: PKR " + priceItem2 + ", Quantity: " + quantityItem2 + ", Total Cost: PKR " + totalCostItem2);
console.log("Subtotal: PKR " + shippingCharges);
console.log("Total Cost (including shipping): PKR " + totalCostWithShipping);


// Store total marks and marks obtained
let totalMarks = 980;
let marksObtained = 804;

// Calculate the percentage
let percentage = (marksObtained / totalMarks) * 100;

// Display the result in the console
console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + marksObtained);
console.log("Percentage: " + percentage.toFixed(2) + "%");


// Given amounts
var usDollars = 10;
var saudiRiyals = 25;

// Exchange rates
var exchangeRateUSD = 104.80;  // 1 US Dollar = 104.80 Pakistani Rupees
var exchangeRateSAR = 28;     // 1 Saudi Riyal = 28 Pakistani Rupees

// Convert to Pakistani Rupees in a single expression
var totalRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

// Display the result in the console
console.log("Amount in US Dollars: $" + usDollars);
console.log("Amount in Saudi Riyals: " + saudiRiyals + " SAR");
console.log("Total amount in Pakistani Rupees: " + totalRupees.toFixed(2) + " PKR");



// Initialize a variable with some number
var initialNumber = 15;

// Perform arithmetic operations in a single expression
var result = (((initialNumber + 5) * 10) / 2);

// Display the result in the console
console.log("Initial number: " + initialNumber);
console.log("Result after arithmetic operations: " + result);


// Store the current year
var currentYear = new Date().getFullYear();


var birthYear = 2000; // Replace with the actual birth year

// Calculate their possible ages
var age1 = currentYear - birthYear;
var age2 = age1 ; // Assuming the birthday hasn't occurred yet this year

// Display the result in the console
console.log("Current year: " + currentYear);
console.log("Birth year: " + birthYear);
console.log("Your Age is " + age1  + " years old.");

// Store the radius of the circle
var radius = 20; // Replace with the actual radius

// Calculate the circumference
var circumference = 2 * Math.PI * radius;

// Calculate the area
var area = Math.PI * Math.pow(radius, 2);

// Display the results in the console
console.log("Radius of the circle: " + radius);
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));

// Store your favorite snack
var favoriteSnack = "chocolate Chip";

// Store your current age
var currentAge = 15; // Replace with your actual age

// Store a maximum age
var maxAge = 65; // Replace with your estimated maximum age

// Store an estimated amount per day
var amountPerDay = 3; // Replace with your estimated daily consumption

// Calculate the total needed for the rest of your life
var yearsRemaining = maxAge - currentAge;
var totalNeeded = yearsRemaining * amountPerDay;

// Display the result in the console
console.log("Favorite Snack: " + favoriteSnack);
console.log("Current age: " + currentAge);
console.log("Estimated maximum age: " + maxAge);
console.log("Amount per day snack: " + amountPerDay);
console.log("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");


