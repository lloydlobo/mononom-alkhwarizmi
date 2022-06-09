// https://leetcode.com/problems/find-center-of-star-graph/
export function findCenter(edges: number[][]): number {
  if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
    return edges[0][0];
  } else {
    return edges[0][1];
  }
}
/*
Success
Details
Runtime: 115 ms, faster than 93.48% of TypeScript online submissions for Find Center of Star Graph.
Memory Usage: 57.6 MB, less than 80.43% of TypeScript online submissions for Find Center of Star Graph.
Next challenges:
Sum of Distances in Tree
Loud and Rich
Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree
*/

/*
There is an undirected star graph consisting of n nodes labeled from 1 to n.
A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi.
Return the center of the given star graph.

Example 1:

Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

Example 2:

Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1

Constraints:

    3 <= n <= 105
    edges.length == n - 1
    edges[i].length == 2
    1 <= ui, vi <= n
    ui != vi
    The given edges represent a valid star graph.
*/

/*
    #    ######   #####  #     # ### #     # #######
   # #   #     # #     # #     #  #  #     # #
  #   #  #     # #       #     #  #  #     # #
 #     # ######  #       #######  #  #     # #####
 ####### #   #   #       #     #  #   #   #  #
 #     # #    #  #     # #     #  #    # #   #
 #     # #     #  #####  #     # ###    #    #######

*/

export function findCenterArchive(edges: number[][]): number {
  let result = 1;
  let valueResult = 1;
  if (edges.length >= 3 && edges.length <= Math.pow(10, 5)) {
    const arrayCommonValues: number[] = [];
    let commonValue: number[];
    const edgesReverse = [...edges].reverse();
    for (let i = 0; i < edges.length; i += 1) {
      if (
        edges[i].length === 2 &&
        edges[i][0] >= 1 &&
        edges[i][1] <= Math.pow(10, 5)
      ) {
        for (let j = 0; j < 2; j += 1) {
          if (edges[i][0] !== edges[i][1]) {
            if (edges[i][j] === edgesReverse[i][j]) {
              arrayCommonValues.push(edges[i][j]);
              commonValue = arrayCommonValues.filter((val) => {
                const value = val;
                if (edges[i].toString().includes(value.toString())) {
                  return value;
                }
              });
            }
          }
        }
      }
    }
    valueResult = parseInt(commonValue.toString().split(',')[0], 10);
    result = valueResult;
  }
  return result;
}
