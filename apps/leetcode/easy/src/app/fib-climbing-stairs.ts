///////////////////////////////////////////////////////////////////////////////
///
/// Runtime: 92 ms, faster than 44.22% of TypeScript online submissions for Climbing Stairs.
/// Memory Usage: 42.5 MB, less than 89.73% of TypeScript online submissions for Climbing Stairs.
///
///////////////////////////////////////////////////////////////////////////////
/**
 * Returns the number of unique ways to climb the stairs.
 *
 * Similar to the Fibonacci sequence, but this time we can take multiple steps at a time.
 *
 * @param n : number
 * @returns number
 */
export function climbStairs(n: number): number {
  if (n === 1 || n === 2) {
    return n;
  }
  let prev = 0;
  let curr = 1;
  for (let i = 0; i < n; i += 1) {
    const next = curr + prev;
    prev = curr;
    curr = next;
  }
  return curr;
}
