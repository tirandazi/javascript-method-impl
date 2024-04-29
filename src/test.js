import UserDefinedArray from "./main.js";

const customMethods = {
  map: Math.random(),
  filter: Math.random(),
  reduce: Math.random(),
  forEach: Math.random(),
};

const assertTestCase = (input = [], output = [], expected = []) => {
  const message = `Input: ${input}\nOutput: ${output}\nExpected: ${expected}\n`;
  output = output.toString();
  expected = expected.toString();
  console.assert(output === expected, message);
};

function testUserDefinedMethods(arr, action, callback, testCase) {
  let result;
  switch (action) {
    case customMethods.map:
      result = arr.customMap(callback);
      break;
    case customMethods.filter:
      result = arr.customFilter(callback);
      break;
    case customMethods.reduce:
      result = arr.customReduce(callback);
      break;
    case customMethods.forEach:
      result = arr.customForEach(callback);
      break;
  }
  assertTestCase(arr, result, testCase);
}

// Initialize all arrays to test
const numbers = new UserDefinedArray(9, 16, 64);
const persons = new UserDefinedArray(
  { firstname: "Rajpal", lastname: "Yadav" },
  { firstname: "Karun", lastname: "Nair" },
  { firstname: "Kiran", lastname: "Bedi" }
);

// Test Map
testUserDefinedMethods(numbers, customMethods.map, Math.sqrt, [3, 4, 8]);
testUserDefinedMethods(
  numbers,
  customMethods.map,
  (number) => 3 * number,
  [27, 48, 192]
);
testUserDefinedMethods(
  persons,
  customMethods.map,
  (item) => [item.firstname, item.lastname].join(" "),
  ["Rajpal Yadav", "Karun Nair", "Kiran Bedi"]
);

// Test Filter
testUserDefinedMethods(
  numbers,
  customMethods.filter,
  (item) => item > 15,
  [16, 64]
);
