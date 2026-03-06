const arr = [1, 3, 4, 5];

function missingNumber(arr) {
  arr.sort(); // extra step if numbers are not sorted already.

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1;
    }
  }
}

console.log(missingNumber(arr));
