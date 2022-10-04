/** Contains Duplicate **
 *
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 *
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 *
 */

const containsDuplicate = (nums) => {
  // MY TRY (Optimal Solution):
  const set = new Set();
  nums.forEach((num) => set.add(num));
  if (nums.length === set.size) {
    return false;
  }
  return true;
  //
  //
  // OTHER SOLUTIONS:
  // 1st Way:
  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
  //
  // 2nd Way:
  const numsSorted = nums.sort();
  for (let i = 0; i < numsSorted.length - 1; ++i) {
    if (numsSorted[i] === numsSorted[i + 1]) {
      return true;
    }
  }
  return false;
};

module.exports = containsDuplicate;
