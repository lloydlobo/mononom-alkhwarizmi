// region:      --- imports ---

import { ListNode, removeElements } from './app';

// import { nearestValidPoint } from './app';

// endregion:   --- imports ---

// region:      --- main ---

function main() {
  // findNearestValidPoint();
  // console.log('twoSum', twoSum([2, 7, 11, 15], 9)); // [0, 1] console.log('twoSum', twoSum([3, 2, 4], 6)); // [1, 2] console.log('twoSum', twoSum([3, 3], 6)); // [0, 1] console.log('twoSum', twoSum([3, 2, 4, 8, 12, 32], 20)); // [3, 4] console.log('twoSum', twoSum([3, 2, 4, 8, 12, 32], 34)); // [1, 5]
  // console.log('twoSumRecursive', twoSumRecursive([2, 7, 11, 15], 9)); // [0, 1]
  console.clear();

  const heads: ListNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))); // prettier-ignore

  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 6,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: {
                val: 6,
              },
            },
          },
        },
      },
    },
  };
  // stringify the head
  // console.log('head', JSON.stringify(head));
  console.log(typeof head);
  console.log(typeof head.next);
  console.log(typeof head.next.next);
  const array = new Array<number>();
  const hashMap = new Map<number, number>();
  array.push(head.val);

  const headJSON = JSON.stringify(head, (key, value) => {
    if (typeof value === 'object') {
      console.log('key', key, 'value', value);
      return JSON.stringify(value);
    }
    return value;
  });
  const split = headJSON.split(' ');
  console.log('🚀 ~ main ~ split', split);

  console.log('🚀 ~ main ~ headJSON', headJSON);
  for (let i = 0; i < 10; i += 1) {
    // console.dir(head.next);
    array.push(head.next.val);
    hashMap.set(head.next.val, i);
  }
  console.log(`hashMap: ${hashMap}, array: ${array}`);
  console.log(`hashMap.get(6): ${hashMap.get(6)}`);
  console.log('hashMap.size:', hashMap.size);
  console.log('hashMap:', hashMap);

  // console.log('\n\n\nmain.ts\n........\n\n', removeElements(heads, 6));
}

main();

// endregion:   --- main ---

// cspell:ignore twoSumRecursive nums
// function twoSumRecursive(nums: number[], target: number): number[] {
//   const result = [];
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     if (map.has(diff)) {
//       result.push(map.get(diff));
//       result.push(i);
//     }
//     map.set(nums[i], i);
//   }
//   return result;
// }

// function findNearestValidPoint() {
//   let currentLocation = [3, 4], points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4],]; // prettier-ignore
//   console.log('2', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
//   (currentLocation = [3, 4]), (points = [[2, 3]]); // prettier-ignore
//   console.log('-1', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
//   currentLocation = [5, 1], points = [[1, 1], [6, 2], [1, 5], [3, 1]]; // prettier-ignore
//   console.log('3', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
//   (currentLocation = [3, 4]), (points = [[3, 4]]); // prettier-ignore
//   console.log('0', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
//   currentLocation = [1, 1], points = [[1, 1], [1, 1]]; // prettier-ignore
//   console.log( '0', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
// }
