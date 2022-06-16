// console.log('Hello World!');
// debug - watch => numbers, number, rowIndex, colIndex, row, sum => with JavaScript debugger
const numbers = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

/// //////////////////////////////////////////////////////////////////////////////
///
/// region:      numbers | for loop
///
/// //////////////////////////////////////////////////////////////////////////////

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
console.log('file: main.ts | line 28 | result', result);

/// //////////////////////////////////////////////////////////////////////////////
///
/// region:      numbers | reduce method
///
/// //////////////////////////////////////////////////////////////////////////////
const sumReduce = numbers.reduce(
  (acc, curr) => acc + curr.reduce((acc, curr) => acc + curr),
  0
);
console.log('file: main.ts | line 39 | sumReduce', sumReduce);
