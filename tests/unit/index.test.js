const index = require('../../src/index');

test("subtract 2 - 1 to equal 1", () => {
  expect(index(2, 1)).toBe(1);
});