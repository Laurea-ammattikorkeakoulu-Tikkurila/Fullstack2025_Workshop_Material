// File: app.test.js

const subtract= require('./subtract');

test('adds 1 - 2 to equal -1', () => {
  expect(subtract(1, 2)).toBe(-1);
});

test('adds 9 + 2 to equal 11', () => {
  expect(subtract(9, 2)).toBe(7);
});

test('adds 0 + 0 to equal 0', () => {   
  expect(subtract(0, 0)).toBe(0);
});

test('adds -1 + 1 to equal -2', () => {          
    expect(subtract(-1, 1)).toBe(-2);
    }   
);
