const arr = [1, 2, 3, 4, 5, 6];

function chunking(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

console.log(chunking(arr, 2));
