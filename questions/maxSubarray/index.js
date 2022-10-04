/** Maximum Subarray
 *
 * Given an integer array `nums`, find the subarray which has the
 * largest sum and return the sum.
 *
 * @examples
 * maxSubArray([5, 4, -1, 7, 8]) = 23
 * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
 * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
 */

const maxSubArray = (nums) => {
  // SOLUTIONS:
  // 1st Way:
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const subarray = nums.slice(i, j);
      const sum = subarray.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      maxSum = Math.max(maxSum, sum);
    }
  }
  //
  // 2nd Way (Most Optimal):
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;
