let str = "banana";
let output = [];


// Simple Solution
let str = "banana";
let output = [];

function maxChar(str) {

  let obj = {};

  [...str].map(item => {
    obj[item] = (obj[item] ?? 0) + 1;
  })
  
  return Object.entries(obj).map(([k, v]) => {
    return { [k]: v };
  });
}

console.log(maxChar(str)); // [{b: 1}, {a: 3}, {n: 2}]


// Robust solution
function maxChar(str) {
  return Object.entries(
    [...str].reduce((acc, curr) => {
      acc[curr] = (acc[curr] ?? 0) + 1;
      return acc;
    }, {})
  )
  .map(([k, v]) => {
    return { [k]: v };
  });
}

console.log(maxChar(str)); // [{b: 1}, {a: 3}, {n: 2}]
