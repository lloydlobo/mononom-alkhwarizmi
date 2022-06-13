/**
 * Returns true or false if the robot moved back to the origin.
 *
 * @performance
 * O(1)
 * Runtime: 99 ms, faster than 63.46% of TypeScript online submissions for Robot Return to Origin.
 * Memory Usage: 46.1 MB, less than 42.31% of TypeScript online submissions for Robot Return to Origin.
 *
 * @param {number} x
 * @param {number} y
 *
 * @param moves : string
 * @returns boolean
 */
export function judgeCircle(moves: string): boolean {
  const xy: number[] = [0, 0];
  for (let i = 0; i < moves.length; i += 1) {
    if (moves[i] === 'U') {
      xy[1] += 1;
    } else if (moves[i] === 'R') {
      xy[0] += 1;
    } else if (moves[i] === 'D') {
      xy[1] -= 1;
    } else if (moves[i] === 'L') {
      xy[0] -= 1;
    }
  }
  return xy[0] === 0 && xy[1] === 0;
}

export function judgeCircleBySum(moves: string): boolean {
  const movesStr = moves.split('');

  if (movesStr.length === 1) {
    return false;
  } else {
    let U = 0;
    let R = 0;
    let D = 0;
    let L = 0;
    let positive = 0;
    let negative = 0;

    for (const str of movesStr) {
      if (str === 'U') {
        positive += 1;
        U += 1;
      }
      if (str === 'R') {
        positive += 1;
        R += 1;
      }
      if (str === 'D') {
        negative += 1;
        D += 1;
      }
      if (str === 'L') {
        negative += 1;
        L += 1;
      }
    }

    if (positive === negative) {
      if (U === D || R === L) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

// robot starts at (0 , 0)
// its a 2D plane

// given a sequence of `moves`: string e.g. `UD`
// predict if the robot ends up back at (0, 0)

// moves[i] represents the ith move --> U = moves[0], D = moves[1]

// valid moves are ['R', 'L', 'U', 'D']
// Right, Left, Up, Down

// if robot returns to origin (0, 0) => return true;
// else => return false;

// where the robot is facing is irrelevant
// (like no unit circle ray tracing required) i guess

// each move time step is the same quantity . . . .

/*

  Input: moves = "UD"
  Output: true

  Input: moves = "LL"
  Output: false

  ideas: shapiro's creativity faucet --- first drafts suck ----
  - cache the index of zero- of each coordinate
    - if the last move hashmap index matches the origin return true
    - this seems complicated?
  - next approach ->
    - U = 1, D = -1 => so x = -x - add the moves -- if it's zero then origin
    - L = -1, R = 1 -> LL = -2 !== 0 so false
    - "UD" => 1 + -1 => 0 === true
    - exceptions
      - LURD :) -1 + 1 + 1 + -1 = 0 ==> true
      - RRUDLDULL - like a palindrome - too smart
        - => 1 + 1 + 1 + -1 + -1 + 1 + -1 + -1 = 0
        - so count all them or sum all of them? which is faster? and takes less memory
  - another approach
    - think of UDLR as bytes or 0 & 1
      - U && R = 0; L && D = 1
  - I guess let's go with approach 2 -- adding sums in a cartesian coordinate !!!!!!

                           +1

                            U

                            6
                            5
                            4
                            3
                            2
                            1
    -1      L  -6-5-4-3-2-1 0 1 2 3 4 5 6     R       +1
                            1
                            2
                            3
                            4
                            5
                            6

                            D

                           +1

  */

/*
Input: moves = "UD"
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
*/

/*

                            U

                            6
                            5
                            4
                            3
                            2
                            1
            L  -6-5-4-3-2-1 0 1 2 3 4 5 6     R
                            1
                            2
                            3
                            4
                            5
                            6

                            D
  */
