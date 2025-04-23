/**
 * Calculate BMI
 * - Accepts weight in KG as a parameter (type number)
 * - Accepts height in CM as a parameter (type number)
 * - returns the calculated BMI (type number)
 * - The equation for BMI is (weight (kg) / height^2(m)).
 */
function calculateBMI(weight: number, height: number): number {
  // Write your code here 👇🏼
  height = height / 100;
  // weight = 70;

  const BMI = weight / (height * height);
  // Stop making changes here!
  return BMI;
}

/**
 * Get BMI State
 * - Accepts BMI as a parameter (type number)
 * - returns a BMIStatus type indicating the BMI category (type BMIStatus)
 */

// Don't change this type
type BMIStatus = "underweight" | "healthy" | "overweight" | "obese";

function getBMIState(BMI: number): BMIStatus {
  // Don't change this variable
  let BMIState: BMIStatus = "obese";
  // Write your code here 👇🏼

  if (BMI < 18.5) {
    BMIState = "underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    BMIState = "healthy";
  } else if (BMI >= 25 && BMI < 30) {
    BMIState = "overweight";
  } else if (BMI >= 30) {
    BMIState = "obese";
  }

  // Stop making changes here!
  return BMIState;
}

/**
 * Get BMI State by Age
 * - Accepts BMI as a parameter (type number)
 * - Accepts age as a parameter (type number)
 * - returns a HealthStatus type indicating the BMI state (type HealthStatus)
 */

// Don't change this type
type HealthStatus = "not healthy" | "healthy";

function getBMIStateByAge(BMI: number, age: number): HealthStatus {
  // Don't change this variable
  let BMIState: HealthStatus = "not healthy";
  // Write your code here 👇🏼
  if (age >= 19 && age <= 24) {
    BMIState = BMI >= 19 && BMI <= 24 ? "healthy" : "not healthy";
  } else if (age >= 25 && age <= 34) {
    BMIState = BMI >= 20 && BMI <= 25 ? "healthy" : "not healthy";
  } else if (age >= 35 && age <= 44) {
    BMIState = BMI >= 21 && BMI <= 26 ? "healthy" : "not healthy";
  } else if (age >= 45 && age <= 54) {
    BMIState = BMI >= 22 && BMI <= 27 ? "healthy" : "not healthy";
  } else if (age >= 55 && age <= 64) {
    BMIState = BMI >= 23 && BMI <= 28 ? "healthy" : "not healthy";
  } else if (age >= 65) {
    BMIState = BMI >= 24 && BMI <= 29 ? "healthy" : "not healthy";
  } else {
    BMIState = "not healthy";
  }
  // Stop making changes here!
  return BMIState;
}

export { calculateBMI, getBMIState, getBMIStateByAge };
