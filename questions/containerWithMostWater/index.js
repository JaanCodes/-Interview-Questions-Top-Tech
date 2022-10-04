/** Container with Most Water **
 * 
 * Given an array 'heights' which represents the heights of blocks
 * on a container, find the maximum area of water that can be stored
 * within these blocks. 
 * 
 * @example
 * maxWater([1, 5, 4, 3]) -> 6
 * maxWater([1, 5, 6, 3, 4, 2]) -> 12
 * maxWater([4, 3, 2, 1, 4]) -> 16
 * 
 */

 const maxWater = (heights) => {
   let l = 0
   let r = heights.length - 1
   let maxArea = 0 

   while (l < r){
      let width = r - l
      let height = Math.min(heights[l], heights[r])
      let area = width * height

      if (heights[l] < heights[r]){
         l += 1
      }
      else{
         r -= 1
      }

      if (area > maxArea){
         maxArea = area
      }
   }

   return maxArea

}

module.exports = maxWater;