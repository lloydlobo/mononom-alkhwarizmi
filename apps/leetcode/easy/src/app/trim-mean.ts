/**
 * @description - Sorts the array, Removes 5% numbers from the start and end, and returns the mean of the remaining numbers.
 * @param {number[]} arr
 * @return {number}
 * @example
 * [1,2,3,4,5,6,7,8,9,10] => 5
 * [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] => 10
 * trimMean([1, 2, 3, 4, 5])
 * @param arr - array of numbers
 * @returns - mean of the array
 * @runtime - Runtime: 99 ms, faster than 66.67% of TypeScript online submissions for Mean of Array After Removing Some Elements.
 * @memoryUsage - Memory Usage: 45.1 MB, less than 46.67% of TypeScript online submissions for Mean of Array After Removing Some Elements.
 * @spaceComplexity - O(n)
 * @timeComplexity - O(n)
 */
export function trimMean(arr: number[]): number {
  let cache = [...arr];
  let arrLen = arr.length;
  let arrToReduce = (arrLen * 5) / 100;
  if (arrLen % 20 === 0 && arrLen >= 20 && arrLen <= 1000) {
    cache.sort((a, b) => a - b);

    for (let i = 0; i < arrToReduce; i += 1) {
      if (arr[i] >= 0 && arr[i] <= Math.pow(10, 5)) {
        cache.shift();
        cache.pop();
      }
    }
    const sum = cache.reduce((prev, curr) => prev + curr, 0);
    const mean =
      (sum / Math.pow(10, 5) / (arrLen - arrToReduce * 2)) * Math.pow(10, 5);

    return mean;
  } else {
    throw new Error('Stack Overflow');
  }
}
