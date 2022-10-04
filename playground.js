const nums = [1, 2, 4, 9];
const target = 13;

const twoSum = (nums, target) => {
  const mapDifferenceToIndex = new Map();
  for (let i = 0; i < nums.length; ++i) {
    if (mapDifferenceToIndex.has(nums[i])) {
      return [mapDifferenceToIndex.get(nums[i]), i];
    }
    const difference = target - nums[i];
    mapDifferenceToIndex.set(difference, i);
  }
};

const containsDuplicate = (nums) => {
  const numsSorted = nums.sort();
  console.log(numsSorted);
  for (let i = 0; i < numsSorted; ++i) {
    if (numsSorted[i] === numsSorted[i + 1]) {
      return true;
    }
  }
  return false;
  // const set = new Set();
  // nums.forEach((num) => set.add(num));
  // if (nums.length === set.size) {
  //   return false;
  // }
  // return true;
};

const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(maxSum);
    console.log(sum);
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    if (maxSum < sum) {
      maxSum = sum;
    }
  }
  return maxSum;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
