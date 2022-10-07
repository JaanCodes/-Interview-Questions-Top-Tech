/** Search in Rotated Sorted Array **
 *
 * Given a rotated sorted array and a target,
 * return the index of the number in the array
 * which equals to the target.
 *
 * Note: Your solutions' time complexity must be faster than O(n).
 *
 * @example
 * search([5, 4, 1, 2, 3], 2) -> 3
 * search([7, 9, 12, 3, 4], 7) -> 0
 * search([3, 4, 2, 0], 4) -> 1
 *
 */

const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Green portion of the array
    if (nums[mid] < nums[r]) {
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    // Blue portion of the array
    else {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return "not found";
};

module.exports = search;
