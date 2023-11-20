function isNumber(...n) {
  /*if one is nor a number, throw an error*/
  for (let i = 0; i < n.length; i++) {
    if (isNaN(n[i]) || typeof n[i] !== "number") {
      throw "Only accept numbers"
    }
  }
}

/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  isNumber(diameter)
  if (diameter < 0) {
    throw new Error("Diameter must be positive")
  }
  return (4 / 3) * Math.PI * (diameter / 2) ** 3
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  isNumber(n)
  return Math.round(n * 10) / 10
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  isNumber(...grades)
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  isNumber(...grades)
  return roundNumberToOneDecimals(computeAverage(grades))
}
