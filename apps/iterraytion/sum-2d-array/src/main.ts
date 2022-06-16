// cspell:ignore leetcode nums

/// //////////////////////////////////////////////////////////////////////////////
///
/// region:      shiftGrid | leetcode.com/problems/shift-2d-grid
///
/// //////////////////////////////////////////////////////////////////////////////

/**
 * Returns a new matrix with the same elements as the input matrix, but shifted by k linear steps.
 *
 * @explanation
 * 1. Flattens the grid into a single array.
 * 2. Shifts the grid by k spaces.
 * 3. Splits the array back into a grid.
 * 4. Returns the grid.
 * @source https://leetcode.com/problems/shift-2d-grid/
 * @example
 * shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1)
 * // [[9,1,2],[3,4,5],[6,7,8]]
 * @example
 * shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4)
 * // [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
 * @param grid - 2D array of numbers
 * @param k - number of steps to shift the grid
 * @returns - shifted grid as 2D array number[][]
 */
export function shiftGrid(grid: number[][], k: number): number[][] {
  const len: number = grid.length;
  const gridBorrowFlatten: number[] = grid.flat();
  const newShiftedGrid: number[][] = [];
  for (let i = 0; i < k; i++) {
    const last: number = gridBorrowFlatten.pop();
    gridBorrowFlatten.unshift(last);
  }

  if (grid[0].length === 1) {
    let count = 1;
    for (let i = 0; i < gridBorrowFlatten.length; i += 1) {
      const newGrid: number[] = [...gridBorrowFlatten.slice(i, count)];

      newShiftedGrid.push(newGrid);
      count += 1;
    }
  } else {
    for (let i = 0; i < len; i++) {
      let count: number = grid[0].length;
      newShiftedGrid.push(
        gridBorrowFlatten.slice(i * count, i * count + count)
      );
      count += len;
    }
  }

  return newShiftedGrid as number[][];
}

/**
 * Runtime: 115 ms, faster than 80.65% of TypeScript online submissions for Shift 2D Grid.
 * Memory Usage: 48.8 MB, less than 74.19% of TypeScript online submissions for Shift 2D Grid.
 */

// const grid = [[1], [2], [3], [4], [7], [6], [5]];
// const k = 23;
// const expected = [[6], [5], [1], [2], [3], [4], [7]];

// prettier-ignore
const grid = [[953, -882, 470, -684, -617, -973, 799, 615, -967, 327, -521, -737, -219, -528, -438, 670, -645, -212, -391, 725, -397, -445, -897, 505, 867, 804, -758,], [-273, -801, 668, -907, -142, 945, 351, 721, 63, 243, -413, 260, -124, -58, 472, 823, 710, -433, 308, 79, -166, 576, -221, -43, 113, -106, 747,], [-506, -952, -446, 84, -378, 85, -536, 266, -820, 588, -698, 418, -455, 749, 831, 801, 7, -233, -339, 90, 972, 508, -823, -353, -675, -313, 615,], [828, -915, 28, 719, -914, 249, 105, -815, 664, -910, 95, -420, 513, 609, 493, 852, 620, 931, -562, -150, -603, 185, -92, -19, -392, 847, -109,], [-161, -340, 303, -992, 519, 592, -808, -209, -168, 56, -188, -384, 476, 558, 19, 403, 619, -634, 40, -875, -116, -319, 365, -890, 530, 812, 799,], [538, -120, -490, -137, 463, -389, 368, -824, 396, 464, 530, -937, -620, -737, 192, -602, 676, -560, -291, 735, 523, -836, 222, -478, 461, -519, -30,], [73, 285, -176, -686, 500, -386, -817, -934, -95, -691, 729, 690, -152, -109, 476, 583, 480, -311, 538, 178, -363, -144, -317, -262, 154, 898, -393,], [129, 705, 919, -514, 956, 750, 173, 976, -894, -532, -261, 394, 122, 47, 739, 244, 525, 447, 729, 308, 969, -661, -715, -510, -857, 318, -521,], [-197, 433, -910, 586, -933, -159, -950, -975, 907, 85, -39, 2, -198, 15, 427, 62, -23, -276, -574, 919, 567, -404, -902, 6, -299, -952, 507,], [-339, -821, -619, 0, -884, 114, -768, 750, 250, 16, 189, 818, -700, -898, -714, -118, -548, -916, 865, 239, -787, -279, 569, 220, 124, 745, 143,], [24, 511, 583, -104, 712, -230, 375, 90, 561, 282, 850, 174, -909, -687, -124, -15, -876, -121, 581, 768, -632, -653, 656, 785, 936, -196, 211,], [445, 581, -235, 88, -601, 235, 37, 276, 114, -808, -860, -780, 216, 103, 494, 296, 825, 305, 116, -987, 321, -247, 591, -419, 241, -284, -241,], [-987, 56, -977, 942, -818, -633, -185, 184, -20, 279, 239, 150, -191, 717, 502, 139, 6, -266, 921, -647, 597, 825, 397, 246, -68, -690, 831,], [986, 628, -545, -823, 472, -841, -655, 352, -446, 95, -73, 979, -996, 687, 497, 482, 764, 870, 473, 629, 846, -439, 87, 689, 749, 322, -326,], [-65, -85, -419, -68, -719, 945, 350, 315, 261, -108, 366, -314, 204, 623, 377, 853, -524, -402, 937, 506, -807, 487, 120, -974, 602, -498, 53,], [950, 556, -204, -349, 231, 314, -700, -539, 200, 805, 226, -449, 752, -164, -439, 101, 501, 983, 416, 972, -429, -18, -824, -108, 432, -906, -324,], [573, 242, -529, 614, -429, 125, -39, 833, -99, -191, -629, -893, -934, -460, 321, -551, -515, 875, -746, 213, 315, 10, -711, 887, 371, -181, 378,], [-80, -141, -197, 801, -397, 280, 158, -469, -515, 450, -873, 917, -209, -128, 989, -152, -633, -834, -931, -965, 902, -629, 527, -942, 892, -551, -607,], [-333, -768, 820, -471, 943, 865, 310, -699, -726, -308, -867, -986, -305, -228, -405, 425, 332, -495, -693, 56, -421, 856, 489, -868, -296, -787, -934,], [-952, 755, -864, -925, 672, 959, -713, 367, 19, 995, 122, -614, 728, 408, -231, 919, -678, -746, -45, 260, 895, 850, -458, -558, 968, -375, -687,], [-904, 821, 728, -148, -980, 769, 199, 493, -259, 295, 468, 459, -969, 534, -710, 860, -981, 121, -700, 275, -838, -844, 836, -679, -91, -598, 219,], [-418, -53, 290, 483, 782, 74, -110, 887, 527, -833, 629, -513, 185, 519, 513, -634, -781, -72, -2, -112, 739, -987, -375, 967, -146, 432, -266,], [-873, 623, 951, -925, -676, -709, 853, -377, -993, 487, 591, 994, -598, -13, 896, 145, -254, 844, -562, -189, -244, -666, 490, -432, -987, 265, 212,], [693, 939, -290, -198, -108, -161, 460, -14, 905, -418, -76, -988, 636, 478, 535, 191, 533, 520, 664, 6, -600, -219, -771, 418, -911, 514, 808,], [22, -503, -832, 431, -296, -675, -348, 786, -534, -450, -427, -830, -243, 188, -788, -444, -564, -704, 559, 160, -501, 614, -953, -283, 460, 781, -34,], [-319, -839, 77, -119, -158, 186, 955, -533, -383, -99, -955, 560, -331, 251, 810, -896, -706, 883, -773, -864, -91, 678, -804, -316, 535, 375, 619,], [790, 826, 513, 531, -441, 416, -910, -89, -720, 877, 990, 675, -613, 683, -652, 102, -386, 280, 434, 244, 400, -344, -555, -298, 121, -383, 440,], [34, -236, -207, -211, -724, -355, -747, -929, 213, -728, -440, -164, 889, 10, 636, -884, -913, -879, -767, 565, -786, 290, 114, -43, 71, 798, -332,], [-557, 462, 191, 965, 952, 795, -944, 178, 366, 729, 166, 422, -521, 571, 433, 714, -126, -109, -162, 605, 860, -939, 635, -872, -317, -588, 64,], [-721, 46, 318, -177, 973, 446, -654, 682, -380, -575, -86, -853, 277, -85, 709, -590, -198, 768, 918, 674, 799, -653, -443, 85, 526, -145, -724,], [797, -106, -425, -594, 57, 164, -891, -236, -568, 999, -744, 604, -359, 5, 745, -929, -631, -761, -708, -772, -316, -817, 62, 129, 259, 585, -373,], [362, -892, 191, 4, -290, -952, 167, -873, 80, -581, 14, 980, -753, -736, 328, -901, 715, 456, -637, 982, 224, 791, -818, 275, -670, -477, 760,], [26, 320, 932, -501, 735, 803, 933, -830, -331, -739, -875, -604, -888, -957, 798, 490, -384, -576, -938, 140, -344, -521, 263, -691, -200, -926, 977,], [-207, -369, 948, 500, -48, 239, -793, 697, 395, 673, -877, -175, -802, 460, 422, -307, -760, -894, 457, 765, -11, -224, 619, -315, -732, -668, -195,],]; // prettier-ignore
const k = 1;
const resultExpected = shiftGrid(grid, k);
console.log({ resultExpected });
// prettier-ignore
// const expected = [[-195, 953, -882, 470, -684, -617, -973, 799, 615, -967, 327, -521, -737, -219, -528, -438, 670, -645, -212, -391, 725, -397, -445, -897, 505, 867, 804], [-758, -273, -801, 668, -907, -142, 945, 351, 721, 63, 243, -413, 260, -124, -58, 472, 823, 710, -433, 308, 79, -166, 576, -221, -43, 113, -106], [747, -506, -952, -446, 84, -378, 85, -536, 266, -820, 588, -698, 418, -455, 749, 831, 801, 7, -233, -339, 90, 972, 508, -823, -353, -675, -313], [615, 828, -915, 28, 719, -914, 249, 105, -815, 664, -910, 95, -420, 513, 609, 493, 852, 620, 931, -562, -150, -603, 185, -92, -19, -392, 847], [-109, -161, -340, 303, -992, 519, 592, -808, -209, -168, 56, -188, -384, 476, 558, 19, 403, 619, -634, 40, -875, -116, -319, 365, -890, 530, 812], [799, 538, -120, -490, -137, 463, -389, 368, -824, 396, 464, 530, -937, -620, -737, 192, -602, 676, -560, -291, 735, 523, -836, 222, -478, 461, -519], [-30, 73, 285, -176, -686, 500, -386, -817, -934, -95, -691, 729, 690, -152, -109, 476, 583, 480, -311, 538, 178, -363, -144, -317, -262, 154, 898], [-393, 129, 705, 919, -514, 956, 750, 173, 976, -894, -532, -261, 394, 122, 47, 739, 244, 525, 447, 729, 308, 969, -661, -715, -510, -857, 318]];
// HINT 1 : Simulate step by step. move grid[i][j] to grid[i][j+1]. handle last column of the grid.
// HINT 2: Put the matrix row by row to a vector. take k % vector.length and move last k of the vector to the beginning. put the vector to the matrix back the same way.

/// //////////////////////////////////////////////////////////////////////////////
///
/// region:      shiftGrid | leetcode.com/problems/shift-2d-grid
///
/// //////////////////////////////////////////////////////////////////////////////

// const shiftGridResult = shiftGrid( [ [1, 2, 3], [4, 5, 6], [7, 8, 9], ], 1); // prettier-ignore
// console.log('file: main.ts | line 38 | shiftGridResult', shiftGridResult);

// export function shiftGrid(grid: number[][], k: number): number[][] {
//   const gridBorrowFlatten = grid.flat();
//   //  we want [[9,1,2],[3,4,5],[6,7,8]]
//   for (let i = 0; i < k; i++) {
//     const last = gridBorrowFlatten.pop();
//     // console.log('file: main.ts | line 21 | shiftGrid | last', last);
//     gridBorrowFlatten.unshift(last);
//     // console.log('file: main.ts | line 22 | shiftGrid | unshift', unshift);
//   }
//   // const kModulus = k % gridBorrowFlatten.length;
//   // console.log('file: main.ts | line 26 | shiftGrid | kModulus', kModulus);
//   // console.log(gridBorrowFlatten); // [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ]
//   const newShiftedGrid: number[][] = [];
//   for (let i = 0; i < grid.length; i++) {
//     let count = grid.length;
//     newShiftedGrid.push(gridBorrowFlatten.slice(i * count, i * count + count));
//     count += grid.length;
//   }
//   return newShiftedGrid;
// }

// RUST

// fn shiftGrid(grid: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
//     let mut grid = grid;
//     let gridLenX = grid.len();
//     if k == gridLenX {
//         for i in 1..k {
//             grid[gridLenX - i] = grid[gridLenX - (i + 1)];
//         }
//         grid[0] = grid[gridLenX - 1];
//     }
//     return grid;
// }

/* Here is the explanation for the code above:
1. The function splitMatrixFlat is called with the arguments a and n.
2. The function returns an empty array if a is empty.
3. The function returns an array of arrays if a is not empty.
4. The function splits a into n arrays.
5. The function concatenates the first n arrays into one array.
6. The function concatenates the remaining arrays into one array.
7. The function returns the concatenated array. */
// function splitMatrixFlat(a: number[][], n: number) {
//   const emptyArray = [];
//   if (a.length) {
//     return [a.splice(0, n)].concat(splitMatrixFlat(a, n));
//     // return [a.splice(0, n)].concat(splitMatrixFlat(a, n));
//   } else {
//     return emptyArray;
//   }
// }

// fn split_matrix_flat(a: Vec<Vec<i32>>, n: usize) -> Vec<Vec<i32>> {
//     let mut empty_array: Vec<Vec<i32>> = Vec::new();
//     if a.len() > 0 {
//         return [a.splice(0, n)].concat(split_matrix_flat(a, n));
//     } else {
//         return empty_array;
//     }

// console.log(
//   'splitMatrixFlat:',
//   splitMatrixFlat(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     1
//   )
// );
/// //////////////////////////////////////////////////////////////////////////////
///
/// region:      numbers | for loop
///
/// //////////////////////////////////////////////////////////////////////////////

const numbers = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

let sum = 0;

for (let rowIndex = 0; rowIndex < numbers.length; rowIndex += 1) {
  const row = numbers[rowIndex];
  for (let colIndex = 0; colIndex < row.length; colIndex += 1) {
    const n̥umber: number = row[colIndex];
    if (n̥umber === 1) {
      sum += 1;
    }
  }
}

const result = sum;
// console.log('file: main.ts | line 28 | result', result);

/// //////////////////////////////////////////////////////////////////////////////
///
/// region:      numbers | reduce method
///
/// //////////////////////////////////////////////////////////////////////////////
const sumReduce = numbers.reduce(
  (acc, curr) => acc + curr.reduce((acc, curr) => acc + curr),
  0
);
// console.log('file: main.ts | line 39 | sumReduce', sumReduce);
