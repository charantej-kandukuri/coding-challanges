const objA = { a: 1, b: 2, c: 3 };
const objB = { a: 1, b: 3 };

// Check if all keys in objA are present in objB
const result = Object.keys(objA).every((key) => key in objB);

// Filter the unique keys in objA that are not present in objB
const uniqueKeys = Object.keys(objA).filter((key) => !(key in objB));

// Get all keys present in both objA and objB
const commonKeys = Object.keys(objA).filter((key) => key in objB);

// Finding the keys whose values are different in objA and objB
const differentValueKeys = Object.keys(objA).filter(
  (key) => key in objB && objA[key] !== objB[key],
);

// Finding the objects that have different values for the same keys
// Note: Always iterate through the obj with less keys in this case.
const differentValueObjects = Object.keys(objB).reduce((acc, key) => {
  if (objA[key] !== objB[key]) {
    acc[key] = objB[key];
  }

  return acc;
}, {});

// Symmantic difference between objA and objB
const obj_A = { a: 1, b: 2 };
const obj_B = { b: 2, c: 3 };
const symmanticDifference = Object.keys(obj_A)
  .filter((key) => !(key in obj_B))
  .concat(Object.keys(obj_B).filter((key) => !(key in obj_A)));

// Alternative approach to find the symmantic difference (recommended)
const allKeys = new Set([...Object.keys(obj_A), ...Object.keys(obj_B)]);
const difference = [...allKeys].filter(
  (key) => !(key in obj_A) || !(key in obj_B),
);

// ------------------------------

const students = [
  { id: 1, age: 22, name: "Alice" },
  { id: 2, age: 30, name: "Bob" },
  { id: 3, age: 20, name: "Charlie" },
];

// Find the student with the maximum age
const oldestStudent = students.reduce((oldest, student) => {
  return student.age > oldest.age ? student : oldest;
}, students[0]);

// Alternative approach to find the student with the maximum age
function findOldestStudent(students) {
  let oldestStudent = students[0];
  for (const student of students) {
    if (student.age > oldestStudent.age) {
      oldestStudent = student;
    }
  }
  return oldestStudent;
}

console.log(findOldestStudent(students)); // Output: 30

// console.log(oldestStudent); // Output: { id: 2, age: 30, name: "Bob" }
