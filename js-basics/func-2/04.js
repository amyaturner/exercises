/* Create a function that calculates a person's body mass index (BMI).
It should take two parameters: someone's height (in cm) and weight (in kg).
The formula for calculating the BMI is as follows:


bmi = weightInKilograms / heightInMeters**2;

Note that formula requires a height in meters, but the function takes the height in centimeters
(1 meter is equivalent to 100 centimeters).

Return the result as a string rounded to two decimals. For example:

calculateBMI(180, 80); // "24.69"

ANSWER:
*/

function calculateBMI(heightInCM, weightInKG) {
  let BMI = ( weightInKG / ((heightInCM / 100) ** 2 ) );
  return BMI.toFixed(2).toString();
}


console.log(calculateBMI(180, 80)); // "24.69"
console.log(calculateBMI(162.56, 61.235)); // "24.69"

// Mostly CORRECT
// I don't need the .toString() method chained on the end of the return statement, b/c the Number object's .toFixed() method
// already returns a string "representing the given number using fixed-point notation."