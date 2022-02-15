export const removeDuplicatesFromUnsortedArray = (
  array: string[]
): string[] => {
  let map = new Map();

  array.forEach((element) => {
    if (!map.has(element)) {
      map.set(element, element);
    }
  });

  let arr: string[] = [];

  map.forEach((value) => {
    arr.push(value);
  });

  return arr;
};
