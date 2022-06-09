export function findCenter(edges: number[][]): number {
  let result = 1;
  let valueResult = 1;
  if (edges.length >= 3 && edges.length <= Math.pow(10, 5)) {
    const arrayCommonValues: number[] = [];
    let commonValue: number[] | any;
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
