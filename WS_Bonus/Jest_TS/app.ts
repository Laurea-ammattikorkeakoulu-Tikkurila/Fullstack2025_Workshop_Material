// Basic math functions in TypeScript

/**
 * Adds two numbers and returns the result.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b.
 */
export function add(a: number, b: number): number {
    return a + b;
}

/**
 * Subtracts the second number from the first and returns the result.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The difference of a and b.
 */
export function subtract(a: number, b: number): number {
    return a - b;
}

/**
 * Multiplies two numbers and returns the result.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The product of a and b.
 */
export function multiply(a: number, b: number): number {
    return a * b;
}

/**
 * Divides the first number by the second and returns the result.
 * @param a - The numerator.
 * @param b - The denominator.
 * @returns The quotient of a and b.
 * @throws Will throw an error if b is 0.
 */
export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}