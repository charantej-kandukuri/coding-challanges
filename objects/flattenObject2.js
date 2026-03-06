function flatObject(obj, result = {}, prefix = "") {
  for (let key in obj) {
    const newPrefix = prefix ? `${prefix}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flatObject(obj[key], result, newPrefix);
    } else {
      result[newPrefix] = obj[key];
    }
  }

  return result;
}

module.exports = flatObject;
