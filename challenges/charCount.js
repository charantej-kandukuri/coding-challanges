const str = "abbccddddd";
// Output: [{a: 2}, {b: 2}, {c: 2}, {d: 2}]

function countCharacters(str) {
  const result = Object.entries(
    str.split("").reduce((acc, char) => {
      acc[char] = acc[char] + 1 || 1;
      return acc;
    }, {}),
  ).map(([key, value]) => ({ [key]: value }));

  return result;
}
// --------------------------------

function findMaxCharacter(str) {
  const charMap = str.split("").reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});

  const heighest = [...new Set(Object.values(charMap).sort())].pop();

  console.log({ heighest });

  const result = Object.keys(charMap).filter(
    (char) => charMap[char] === heighest,
  );

  return result[0];
}

console.log(findMaxCharacter(str));
