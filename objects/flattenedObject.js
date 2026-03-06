const res = {
  id: 1,
  user: {
    name: "John Doe",
    address: {
      city: "New York",
      area: {
        state: "NY",
        zip: "10001",
      },
    },
    friends: [
      {
        name: "Jane Smith",
        id: 2,
      },
      {
        name: "Bob Johnson",
        id: 3,
      },
    ],
  },
};

function flattenObject(obj, keyPrefix = "", result = {}) {
  for (const key in obj) {
    const newKey = keyPrefix ? `${keyPrefix}.${key}` : key;

    if (obj[key] && (typeof obj[key] === "object" || Array.isArray(obj[key]))) {
      return flattenObject(obj[key], newKey, result);
    }
    result[newKey] = obj[key];
  }

  return result;
}

console.log(flattenObject(res));
