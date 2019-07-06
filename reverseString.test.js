const reverseString = require('./reverseString');

test('"This will be reversed!" returns "!desrever eb lliw sihT"', () => {
  const result = reverseString("This will be reversed!");
  expect(result).toBe("!desrever eb lliw sihT");
});