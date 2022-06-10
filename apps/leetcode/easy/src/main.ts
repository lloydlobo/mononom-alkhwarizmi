// region:      --- imports ---

import { nearestValidPoint } from './app';

// endregion:   --- imports ---

// region:      --- main ---

function main() {
  findNearestValidPoint();
}
main();

// endregion:   --- main ---

function findNearestValidPoint() {
  let currentLocation = [3, 4], points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4],]; // prettier-ignore
  console.log('2', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
  (currentLocation = [3, 4]), (points = [[2, 3]]); // prettier-ignore
  console.log('-1', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
  currentLocation = [5, 1], points = [[1, 1], [6, 2], [1, 5], [3, 1]]; // prettier-ignore
  console.log('3', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
  (currentLocation = [3, 4]), (points = [[3, 4]]); // prettier-ignore
  console.log('0', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
  currentLocation = [1, 1], points = [[1, 1], [1, 1]]; // prettier-ignore
  console.log( '0', nearestValidPoint(currentLocation[0], currentLocation[1], points)); // prettier-ignore
}
