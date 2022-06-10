// region:      --- imports ---

// import { findCenter } from './app'; // const input = [ [1, 2], [5, 1], [1, 3], [1, 4], ]; // console.log(findCenter(input));
import { nearestValidPoint } from './app';

// endregion:   --- imports ---

console.log('Hello World!');

// region:      --- main ---

function main() {
  const currentLocation = [3, 4];
  const points = [ [1, 2], [3, 1], [2, 4], [2, 3], [4, 4], ]; // prettier-ignore

  const x1 = currentLocation[0],
    y1 = currentLocation[1];

  const nearestPoint = nearestValidPoint(x1, y1, points);
  console.log('🚀 ~ main ~ nearestPoint', nearestPoint);
}

main();

// endregion:   --- main ---
