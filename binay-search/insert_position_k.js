// Search insert position of K in a sorted array

/**
 * Given. a 0 based sorted array arr[] of distinct integers and an integer k, find the index of k
 * if it is present. If not, return the index where k should be inserted to maintain the sorted order
 */

function searchInsertKfn(arr, k) {
  let left = 0;
  let right = arr.length; // 4

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === k) {
      return mid;
    }

    if (arr[mid] < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

module.exports = searchInsertKfn;
