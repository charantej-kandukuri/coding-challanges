function steps(n) {
  for (let i = 1; i < n; i++) {
    let result = "";
    for (let j = 1; j < n; j++) {
      if (j <= i) {
        result += "#";
      } else {
        result += " ";
      }
    }
    console.log(result);
  }
}

steps(3);
