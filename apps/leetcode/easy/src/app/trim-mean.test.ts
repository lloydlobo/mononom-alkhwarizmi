import { trimMean } from './trim-mean';

describe('trimMean', () => {
  it('should return 10.5', () => {
    expect(
      trimMean([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ])
    ).toBe(10.5);
  });

  it('should return 10.5', () => {
    const arr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1,
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    expect(trimMean(arr)).toBe(10.5);
  });

  it('should return 10.5', () => {
    expect(
      trimMean([
        10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ])
    ).toBe(10.611111111111112);
  });
});

// array length is multiple of 20 and greater than 20 and less than 1000
// function newArray(length: number): number[] {
//   // if (length % 20 === 0 && length >= 20 && length <= 1000) {
//   const arr = new Array<number>(length);
//   for (let i = 0; i < length; i += 1) {
//     arr.push(i);
//   }
//   return arr;
//   // } else {
//   // throw new Error('Length is not valid');
//   // }
// }
