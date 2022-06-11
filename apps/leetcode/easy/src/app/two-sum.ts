// cspell:ignore twoSum nums testcases

/** twoSum(nums: number[], target: number): number[]
 * @name twoSum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * @spaceComplexity O(n)
 * @timeComplexity O(n)
 * @performance Runtime: 94 ms, faster than 75.44% of TypeScript online submissions for Two Sum.
 * @memory Memory Usage: 45.7 MB, less than 25.02% of TypeScript online submissions for Two Sum.
 * @source https://leetcode.com/problems/two-sum/
 * @testcases
 * twoSum([2, 7, 11, 15], 9) => [0, 1]
 * twoSum([2, 7, 11, 15], 18) => [1, 2]
 * @example
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: The sum of nums[0] and nums[1] is 9.
 * @example
 * Input: nums = [2,7,11,15], target = 18
 * Output: [0,3]
 * Explanation: The sum of nums[0] and nums[3] is 18.
 * @param nums - array of numbers
 * @param target - target number
 * @returns - array of indices of two numbers that add up to target
 */
export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const remaining = target - nums[i];

    if (seen.has(remaining)) {
      return [seen.get(remaining), i];
    } else {
      seen.set(nums[i], i);
    } // end if
  } // end for
  return [];
} // end twoSum

/* Runtime: 94 ms, faster than 75.44% of TypeScript online submissions for Two Sum.
Memory Usage: 45.7 MB, less than 25.02% of TypeScript online submissions for Two Sum.  */

/*
   ###    ########   ######  ##     ## #### ##     ## ########
  ## ##   ##     ## ##    ## ##     ##  ##  ##     ## ##
 ##   ##  ##     ## ##       ##     ##  ##  ##     ## ##
##     ## ########  ##       #########  ##  ##     ## ######
######### ##   ##   ##       ##     ##  ##   ##   ##  ##
##     ## ##    ##  ##    ## ##     ##  ##    ## ##   ##
##     ## ##     ##  ######  ##     ## ####    ###    ########
 */

// export function twoSum(nums: number[], target: number): number[] {
//   const outputTwoSum = new Array<number>();

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const sum = nums[i] + nums[j];
//       if (sum === target) {
//         outputTwoSum.push(i);
//         outputTwoSum.push(j);
//         return outputTwoSum;
//       } else {
//         continue;
//       } // end if
//     } // end for
//   } // end for
//   return outputTwoSum;
// } // end twoSum
