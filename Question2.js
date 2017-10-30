// ------------------------------------------------------------------------------
// Assignment (2)
// Written by: zhihong guo 40038183
// For SOEN 287 Section (2164) – Winter 2017
// -----------------------------------------------------------------------------

// Question 2.js
//   enter three numbers from the user,and see if these
//   numbers are zero,posivtive numbers or negative numbers,
//   then display the results.

// Get first,second and third integer from the user

var a = prompt("		Enter first integer: \n","");
var b = prompt("		Enter second integer:  \n", "");
var c = prompt("		Enter third integer:  \n","");

//declare and initialise counters for zero,positive and negative number scenario

var zeroCounter = 0;
var positiveCounter = 0;
var negativeCounter = 0;

//see what scenario the first input is.

if(a == 0)
	zeroCounter++;
else if(a < 0)
	negativeCounter++;
else
	positiveCounter++;

//see what scenario the second input is.

if(b == 0)
	zeroCounter++;
else if(b < 0)
	negativeCounter++;
else
	positiveCounter++;

//see what scenario the third input is.

if(c == 0)
	zeroCounter++;
else if(c < 0)
	negativeCounter++;
else
	positiveCounter++;

//display the results
document.write("Zeroes numbers entered by user = ", zeroCounter, "<br /><br />");
document.write("Positive numbers entered by user = ", positiveCounter, "<br /><br />");
document.write("Negative numbers entered by user = ", negativeCounter, "<br /><br />");