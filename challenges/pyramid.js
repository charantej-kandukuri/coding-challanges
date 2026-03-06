// function pyramid(n) {
//   let result = "";
//   for (let i = 1; i <= n; i++) {
//     result += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
//   }
//   return result;
// }

// Alternative implementation using recursion
function pyramid(n) {
  const midpoint = Math.floor((n * 2 - 1) / 2);
  console.log(midpoint);
  for (let i = 0; i < n; i++) {
    let result = "";
    for (j = 0; j < n * 2 - 1; j++) {
      if (midpoint - i <= j && midpoint + i >= j) {
        result += "#";
      } else {
        result += " ";
      }
    }
    console.log(result);
  }
}

pyramid(3);
