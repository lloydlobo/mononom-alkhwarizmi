// cspell:disableCompoundWords cspell:disable

///////////////////////////////////////////////////////////////////////////////
///
/// findNumbers(nums: number[]): number[]
///
/// @file FindNumEvenDigit.ts
/// @brief Find the number of even digits in a number.
/// @author somebody that i used to know :)
/// @date 2020-08-05
/// @see - [Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)
///
///////////////////////////////////////////////////////////////////////////////

/** findNumbers
 * @title Find Number of Even Digits in an Array
 *
 * - Given an array nums of integers, return how many of them contain an even number of digits.
 *
 * @sources https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 *
 * @solution
 * 1. Convert `nums: number[]`  with the toString() method.
 * 2. Split it to an array of string[] with the split() method.
 * 3. Filter the array to only include numbers with an even number of digits,
 * by using the filter(method) where each word's length % (modulus) 2 === 0.
 * 4. Return the length of the filtered array.
 *
 * @param nums: number[]
 * @returns number: number
 * @example
 * findNumbers([12,345,2,6,7896]) // 2
 * findNumbers([12,345,2,6,7896,1234]) // 3
 * findNumbers([12,345,2,6,7896,1234,1234]) // 4
 *
 * @note
 * - The input array may contain integers of different lengths.
 * - The input array may contain duplicates.
 *
 * @edgecases
 * - The input array may be empty.
 *
 * @complexity
 * - Time: O(n)
 * - Space: O(n)
 *
 * @performance
 * - Runtime: 107 ms, faster than 35.41% of TypeScript online submissions for Find Numbers with Even Number of Digits.
 * - Memory Usage: 44.9 MB, less than 68.48% of TypeScript online submissions for Find Numbers with Even Number of Digits.
 *
 * @stability
 * - Stable
 *
 * @todo
 * - [ ] Add test cases.
 * - [ ] Add edge cases.
 * - [ ] Add performance tests.
 * - [ ] Add stability tests.
 *
 * @bugs
 * - [ ] None
 *
 * @dependencies
 * - [x] None
 *
 * @best-practices
 * ***************************************************************************/
export function findNumbers(nums: number[]): number {
  if (nums.length >= 1 && nums.length <= 500) {
    let arrNumsString: string = nums.toString();
    const evenDigit: string[] = arrNumsString
      .split(',')
      .filter((w) => w.length % 2 == 0);
    return evenDigit.length as number;
  } else {
    return null;
  }
}
