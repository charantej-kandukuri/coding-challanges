const strA = "Hello World!";
const strB = "World! World";

function isAnagram(strA, strB) {
  const str_A = transformStr(strA);
  const str_B = transformStr(strB);
}

function transformStr(str) {
  const r = str.replace(/[^W]/g);
  console.log({ r });
}
