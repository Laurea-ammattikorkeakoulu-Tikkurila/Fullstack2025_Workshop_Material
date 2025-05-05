import {describe, expect, test} from '@jest/globals';
import {add, subtract, multiply, divide} from './app';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

    test('adds 0 + 0 to equal 0', () => {
        expect(add(0, 0)).toBe(0);
    });

    test("subtracts 5 - 2 to equal 3", () => {
        expect(subtract(5, 2)).toBe(3);
    });
    test("subtracts 5 - 5 to equal 0", () => {
        expect(subtract(5, 5)).toBe(0);
    });

    test("multiplies 3 * 4 to equal 12", () => {
        expect(multiply(3, 4)).toBe(12);
    });
    test("multiplies 0 * 5 to equal 0", () => {
        expect(multiply(0, 5)).toBe(0);
    });

    test("divides 10 / 2 to equal 5", () => {
        expect(divide(10, 2)).toBe(5);
    });
    test("divides 10 / 0 to throw an error", () => {
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
    });
});