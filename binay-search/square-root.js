function findSquareRoot(num) {
  //   return num ** 0.5;

  if (num < 0) {
    throw new Error("Number can't be negative");
  }

  if (num <= 1) {
    return num;
  }

  let left = 0;
  let right = num;
  let mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (mid * mid === num) {
      return mid;
    }

    if (mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return mid;
}

console.log(findSquareRoot(3));

module.exports = findSquareRoot;
