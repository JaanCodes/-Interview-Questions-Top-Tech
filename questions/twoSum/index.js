/** Two Sum **
 *
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 *
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 *
 */

const twoSum = (nums, target) => {
  // SOLUTIONS:
  // Least Efficient Way (Junior):
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  // More Efficient Way (Mid Level):
  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  // Most Efficient Way (Top Tech):
  const mapDifferenceToIndex = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (mapDifferenceToIndex.has(nums[i])) {
      return [mapDifferenceToIndex.get(nums[i]), i];
    }
    const difference = target - nums[i];
    mapDifferenceToIndex.set(difference, i);
  }
};

module.exports = twoSum;
