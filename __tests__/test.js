require("babel-polyfill");
require("babel-register");



test("return sum of two numbers", () =>  {
  const sum = require("../app/sum");
  expect(sum(1,2)).toBe(3);
});

test("returns divided value of two numbers", () => {
  const divide = require("../app/curry");
  expect(divide(5)(10)).toBe(2);
});