// Find the missing number
const arr = [3, 1, 4, 5];

function missingNum(arr) {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1;
    }
  }
}

console.log(missingNum(arr));
