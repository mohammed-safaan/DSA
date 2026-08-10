function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(`Before: [${arr}]`);
console.log(`After:  [${mergeSort(arr)}]`);
