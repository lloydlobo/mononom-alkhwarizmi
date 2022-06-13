// find-num-even-digit.ts
// cspell:disableCompoundWords cspell:disable
///////////////////////////////////////////////////////////////////////////////
///
/// findNumbers(nums: number[]): number[]
///
/// @file FindNumEvenDigit.ts
/// @brief Find the number of even digits in a number.
/// @author somebody that i used to know :)
/// @see - [Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)
///
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
///
/// findNumOfNums
///
/// Runtime: 69 ms, faster than 94.55% of TypeScript online submissions.
/// Memory Usage: 45.4 MB, less than 20.23% of TypeScript online submissions.
///
/// Tip: convert num to string before checking if the length is even.
///
///////////////////////////////////////////////////////////////////////////////
/**
 * findNumOfNums
 *
 * Returns the number of even digits in a array of numbers.
 *
 * @param {number[]} nums: `number[]`
 * @return {number} number of even digits: `number`
 */
export function findNumOfNums(nums: number[]): number {
  let count = 0;
  for (const num of nums) {
    const str = num.toString();
    if (str.length % 2 === 0) {
      count += 1;
    }
  }
  return count;
}

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
    const arrNumsString: string = nums.toString();
    const evenDigit: string[] = arrNumsString
      .split(',')
      .filter((w) => w.length % 2 == 0);
    return evenDigit.length as number;
  } else {
    return null;
  }
}

///////////////////////////////////////////////////////////////////////////////
///
/// findNumForLoop
///
/// Runtime: 70 ms, faster than 94.16% of TypeScript online submissions for Find Numbers with Even Number of Digits.
/// Memory Usage: 45.2 MB, less than 36.19% of TypeScript online submissions for Find Numbers with Even Number of Digits.Runtime: 110 ms
///
///
///////////////////////////////////////////////////////////////////////////////

export function findNumForLoop(nums: number[]): number {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    const len: number = nums[i].toString().length;
    if (len % 2 === 0) {
      index += 1;
    }
  }
  return index;
}

///////////////////////////////////////////////////////////////////////////////
///
/// @brief Find the number of even digits in a number.
/// @file FindNumEvenDigit.test.ts
/// @author somebody that i used to know :)
/// @see - [Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)
///
///////////////////////////////////////////////////////////////////////////////

// short unreadable code but works :)
/** findNumOneLiner
 * @title Find Number of Even Digits in an Array
 * @param nums: number[]
 * @returns number: number
 *
 * @sources https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 *
 * @performance
 * - Runtime: 77 ms, faster than 79.77% of TypeScript online submissions for Find Numbers with Even Number of Digits.
 * - Memory Usage: 45.7 MB, less than 9.34% of TypeScript online submissions for Find Numbers with Even Number of Digits.
 */
export function findNumOneLiner(nums: number[]): number {
  return nums
    .toString()
    .split(',')
    .filter((w) => w.length % 2 == 0).length;
}

///////////////////////////////////////////////////////////////////////////////
///
/// @brief Find the number of even digits in a number.
/// @file FindNumEvenDigit.test.ts
/// @author somebody that i used to know :)
/// @see - [Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)
///
///////////////////////////////////////////////////////////////////////////////

export function inRange(a: number, b: number, x: number): boolean {
  return x > a && x < b;
}

/** findEvenNums
 * @title Find Number of Even Digits in an Array
 * @param nums: number[]
 * @returns number: number
 *
 * @arguments
 * - nums: number[]
 *
 * @example
 * findEvenNums([12,345,2,6,7896]) // 2
 * findEvenNums([12,345,2,6,7896,1234]) // 3
 *
 * @functions
 * - hasEvenDigits = (n: number): boolean
 * - findNumbers = (nums: number[]): number
 *
 * @solution
 * 1. Filter the array to only include numbers with an even number of digits
 * 2. Declare a function hasEvenDigits(n: number): boolean that returns true if the number has an even number of digits.
 * 3. Declare a function isValid(nums: number[]): boolean that returns true if the number in 3 areas:
 *  - 9 < numbers < 100 have even number of digits,
 *  - 100 < numbers < 1000 have even number of digits,
 *  - Math.pow(10, 5)
 * 4. Return the length of the filtered array.
 * 5. Profit?
 *
 * @sources
 * - [Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)
 */
export function findEvenNum(nums: number[]): number {
  const hasEvenDigits = (x: number, y: number, num: number) =>
    num > x && num < y;

  const isValid = (num: number): boolean =>
    hasEvenDigits(9, 100, num) ||
    hasEvenDigits(999, 10000, num) ||
    num === Math.pow(10, 5);

  return nums.filter((num: number): boolean => isValid(num)).length as number;
}

/** findNumbers
 *
 * @example
 * findNumbers5,2,6,7896]) // 2
 * findNumbers5,2,6,7896,1234]) // 3
 *
 * @functions
 * - hasEvenDigits = (n: number): boolean
 * - findNumbers = (nums: number[]): number
 *
 * @solution
 * 1. Filter the array to only include numbers with an even number of digits
 * 2. Declare a function hasEvenDigits(n: number): boolean that
      returns rue if the   number has an even number of digits.
 * 3. Declare a function isValid(nums: number[]): boolean that
      returns true if the number in 3 areas:
 *  - 9 < numbers < 100 have even number of digits,
 *  - 100 < numbers < 1000 have even number of digits,
 *  - number === 100000.
 * 4. Return the length of the filtered array.
 * 5. Profit?
 *
 */
// const isEven = (x: number, y: number, num: number) => num > x && num < y;

// const isTrue = (num: number): boolean =>
//   isEven(9, 100, num) || isEven(999, 10000, num) || num === 100000;

// const findNumbers = (nums: number[]): number =>
//   nums.filter((num: number): boolean => isTrue(num)).length as number;

///////////////////////////////////////////////////////////////////////////////
/// findNum
///
/// @brief Find the number of even digits in a number.
/// Runtime: 93 ms
/// Memory Usage: 44.3 MB
///
///////////////////////////////////////////////////////////////////////////////

export const isEven = (x: number, y: number, num: number): boolean =>
  num > x && num < y;

export const findNum = (nums: number[]): number =>
  nums.filter(
    (num: number): boolean =>
      isEven(9, 100, num) || isEven(999, 10000, num) || num === 100000
  ).length;

///////////////////////////////////////////////////////////////////////////////
///
/// findNumWhile
///
///////////////////////////////////////////////////////////////////////////////

export function findNumWhile(nums: number[]): number {
  if (nums && nums.length > 0) {
    let evenDig = 0;

    nums.forEach((num: number): void => {
      let i = 0;
      while (num > 0) {
        const tallyNum = (): number => (num - (num % 10)) / 10;
        num = tallyNum();
        i++;
      }
      if (i % 2 === 0) {
        evenDig++;
      }
    });
    return evenDig;
  }
}

///////////////////////////////////////////////////////////////////////////////
///
/// findNumLog
///
/// Runtime: 87 ms
/// Memory Usage: 44.7 MB
///
///////////////////////////////////////////////////////////////////////////////

// const findNumLog = (nums: number[]): number =>
//   nums.filter((e) => !(1 & (Math.log10(e) + 1))).length;

export function findNumLog(nums: number[]): number {
  return nums.filter((e): boolean => !(1 & (Math.log10(e) + 1))).length;
}

///////////////////////////////////////////////////////////////////////////////
///
/// findNumForN
///
/// Runtime: 110 ms
/// Memory Usage: 44.8 MB
///
///////////////////////////////////////////////////////////////////////////////
export function findNumForN(nums: number[]): number {
  let indexEven = 0;
  for (const n of nums) {
    if (n.toString().length % 2 === 0) indexEven++;
  }
  return indexEven;
}
