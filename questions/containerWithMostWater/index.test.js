const maxWater = require("./index");

test(" ", () => {
  expect(maxWater([1, 1])).toStrictEqual(1);
});

test(" ", () => {
  expect(maxWater([1, 5, 4, 3])).toStrictEqual(6);
});

test(" ", () => {
  expect(maxWater([1, 5, 6, 3, 4, 2])).toStrictEqual(12);
});

test(" ", () => {
  expect(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toStrictEqual(49);
});

test(" ", () => {
  expect(maxWater([4, 3, 2, 1, 4])).toStrictEqual(16);
});

test(" ", () => {
  expect(maxWater([1, 2, 1])).toStrictEqual(2);
});
