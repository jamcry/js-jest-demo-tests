const capitalize = require('./capitalize');

test('"hello" returns "Hello"', () => {
  const result = capitalize("hello");
  expect(result).toBe("Hello");
});

test('"hELLO world!" returns "Hello World!"', () => {
  const result = capitalize("hELLO world!");
  expect(result).toBe("Hello World!");
});