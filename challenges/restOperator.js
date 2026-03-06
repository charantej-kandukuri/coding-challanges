// 1, 2, 3 ,4 ,5

function sumArrar(...rest) {
  // return rest.reduce((a, b) => a + b, 0);
  let sum = 0;
  for (const element of rest) {
    sum += element;
  }

  return sum;
}

console.log(sumArrar(1, 2, 3, 4, 5)); // 15
