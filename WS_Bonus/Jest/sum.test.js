// File: app.test.js

const sum= require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 9 + 2 to equal 11', () => {
  expect(sum(9, 2)).toBe(11);
});

test('adds 0 + 0 to equal 0', () => {   
  expect(sum(0, 0)).toBe(0);
});

test('adds -1 + 1 to equal 0', () => {          
    expect(sum(-1, 1)).toBe(0);
    }   
);
