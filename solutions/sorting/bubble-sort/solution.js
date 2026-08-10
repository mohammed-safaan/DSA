function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
  return arr;
}

const arr = [5, 2, 9, 1, 5, 6];
console.log(`Before: [${arr}]`);
console.log(`After:  [${bubbleSort(arr)}]`);
