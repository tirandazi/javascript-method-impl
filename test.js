import UserDefinedArray from "./main.js";

const assertTestCase = (input = [], output = [], expected = []) => {
  const message = `Input: ${input}\nOutput: ${output}\nExpected: ${expected}\n`;
  output = output.toString();
  expected = expected.toString();
  console.assert(output === expected, message);
};

function testUserDefinedMap(arr, callback, testCase) {
  let result;
  result = arr.customMap(callback);
  assertTestCase(arr, result, testCase);
}

// Initialize all arrays to test
const numbers = new UserDefinedArray(9, 16, 64);
const persons = new UserDefinedArray(
  { firstname: "Rajpal", lastname: "Yadav" },
  { firstname: "Karun", lastname: "Nair" },
  { firstname: "Kiran", lastname: "Bedi" }
);

// Test UserDefinedMap
testUserDefinedMap(numbers, Math.sqrt, [3, 4, 8]);
testUserDefinedMap(numbers, (number) => 3 * number, [27, 48, 192]);
testUserDefinedMap(
  persons,
  (item) => [item.firstname, item.lastname].join(" "),
  ["Rajpal Yadav", "Karun Nair", "Kiran Bedi"]
);
