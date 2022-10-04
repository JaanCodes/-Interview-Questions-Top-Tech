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

console.log(twoSum([0, 1, 2, 3, 4], 13));
