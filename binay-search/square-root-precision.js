function findSquareRootWithPrecision(num, precision = 0.000001) {
  if (num < 0) {
    throw new Error("Number cant be negative.");
  }

  if (num <= 1) return num;

  let left = 0;
  let right = num;

  if (num < 1) right = 1;

  while (right - left > precision) {
    let mid = (left + right) / 2;

    //! don't add the commented line
    // if (mid * mid) return mid;

    if (mid * mid < num) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return +((left + right) / 2).toFixed(2); // can use Math.round
}

module.exports = findSquareRootWithPrecision;
