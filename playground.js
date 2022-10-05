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

const stocks = (prices) => {
  let buy = prices[0];
  let sell = prices[1];
  for (let i = 0; i < prices.length - 2; i++) {
    for (let j = i + 1; j < prices.length - 1; j++) {
      if (prices[i] < buy) {
        buy = prices[i];
      }
      if (prices[j] > sell) {
        sell = prices[j];
      }
    }
  }
  return [buy, sell];
};

// function threeSum(nums) {
//   let result = [];
//   for (let a = 0; a < nums.length; a++) {
//     for (let b = a + 1; b < nums.length; b++) {
//       for (let c = nums.length + 1; c > 0; c--) {
//         if (nums[a] + nums[b] + nums[c] === 0) {
//           result.push([nums[a], nums[b], nums[c]]);
//         }
//       }
//     }
//   }
//   return result;
// }
function threeSum(nums) {
  let results = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r--;
      }
      if (sum < 0) {
        l++;
      }
      if (sum === 0) {
        results.push([nums[i], nums[l], nums[r]]);
        l++;
        if (nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }
  return results;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
