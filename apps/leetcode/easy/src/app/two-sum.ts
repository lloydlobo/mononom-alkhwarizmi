// cspell:ignore twoSum nums
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
//       }
//     }
//   }
//   return outputTwoSum;
// }

/* Runtime: 94 ms, faster than 75.44% of TypeScript online submissions for Two Sum.
Memory Usage: 45.7 MB, less than 25.02% of TypeScript online submissions for Two Sum.  */
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
}
