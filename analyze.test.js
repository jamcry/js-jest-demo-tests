const analyze = require('./analyze');

test('returns the array analitics', () => {
  const analysis = analyze([1, 8, 3, 4, 2, 6]);
  expect(analysis).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
})

test('returns the array analitics', () => {
  const analysis = analyze([1]);
  expect(analysis).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1
  });
})