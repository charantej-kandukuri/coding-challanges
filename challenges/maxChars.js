// Find the max chars remove special chars
function maxChars(str) {
  return [...str.replace(/[^\w]/g, "")].reduce((acc, curr) => {
    acc[curr] = (acc[curr] ?? 0) + 1;
    return acc;
  }, {});
}

module.exports = maxChars;

/**
 * HCL Hacathon question
 * 
 * function maxChars2(str) {
  return Object.entries(
    [...str.replace(/[^\w]/g, "")].reduce((acc, curr) => {
      acc[curr] = (acc[curr] ?? 0) + 1;
      return acc;
    }, {}),
  ).map(([key, value]) => ({ [key]: value }));
}  // --> output: [{h: 1}, {l: 3}, ...];

function removeSpecialChars(str) {
  return str.replace(/[^\w]/g, "");
}
 */
