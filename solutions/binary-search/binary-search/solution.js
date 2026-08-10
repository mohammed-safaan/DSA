function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15];

for (const target of [7, 1, 15, 4]) {
  const index = binarySearch(arr, target);
  if (index !== -1) {
    console.log(`${target} found at index ${index}`);
  } else {
    console.log(`${target} not found`);
  }
}
