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

// const productExceptSelf = (nums) => {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 1;
//     for (let j = i + 1; j < nums.length; j++) {
//       sum = sum * nums[j];
//     }
//     result.push(sum / i);
//   }
//   return result;
// };

const productExceptSelf = (nums) => {
  const result = [];

  const leftProducts = [];
  const rightProducts = [];

  leftProducts[0] = 1;
  rightProducts[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; ++i) {
    leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; --i) {
    rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
  }
  for (let i = 0; i < leftProducts.length; i++) {
    result.push(leftProducts[i] * rightProducts[i]);
  }
  return result;
};

const meetingTimes = (times) => {
  times.sort((a, b) => a - b);
  for (let i = 1; i < times.length; i++) {
    if (times[i][1] > times[i - 1][0]) {
      return false;
    }
  }
  return true;
};

const binarySearch = (nums, target) => {
  // SOLUTION:
  let l = 0;
  let r = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    }
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }
};

const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      r = mid - 1;
    } else if (nums[mid] > target) {
      l = mid + 1;
    } else {
      return nums[l];
    }
  }
};

const flatten = (nums) => {
  const result = [];
  for (elem of nums) {
    if (Array.isArray(elem)) {
      flatten(elem);
    } else {
      result.push(elem);
    }
  }
  return result;
};

const moveZeroes = (nums) => {
  const result = [];
  const zeroes = [];

  for (elem of nums) {
    if (elem === 0) {
      zeroes.push(elem);
    } else {
      result.push(elem);
    }
  }
  return result.concat(zeroes);
};

const sumOfTwo = (nums1, nums2, target) => {
  const set = new Set();

  for (elem of nums1) {
    set.add(target - elem);
  }
  for (elem of nums2) {
    if (set.has(elem)) {
      return true;
    }
  }
  return false;
};

console.log(sumOfTwo([1, 2, 3], [5, 2], 8));
