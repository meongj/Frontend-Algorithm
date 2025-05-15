/**
 * 문제 : Get
 * optional chaining operator (?.)을 대신할 함수 만들기
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
  // 배열이 아니면 .단위로 자른다
  let array = Array.isArray(pathParam) ? pathParam : pathParam.split(".");
  let obj = objectParam;

  let index = 0;
  let length = array.length;

  // 조건! 배열의 개수가 맞아야한다
  while (obj != null && index < length) {
    let info = String(array[index]);
    obj = obj[info];
    index++;
  }

  // 배열의 개수만큼 다 돌았다면 obj , 아니라면 undefined
  const value = index && index === length ? obj : undefined;
  return value !== undefined ? value : defaultValue;
}

const john = {
  profile: {
    name: { firstName: "John", lastName: "Doe" },
    age: 20,
    gender: "Male",
  },
};

const jane = {
  profile: {
    age: 19,
    gender: "Female",
  },
};

function getFirstName(user) {
  return user.profile.name.firstName;
}

// Using the `john` and `jane` objects from above
// console.log(get(john, "profile.name.firstName")); // 'John'
// console.log(get(john, "profile.gender")); // 'Male'
// console.log(get(jane, "profile.name.firstName")); // undefined

// An example where path is provided as an array
// console.log(get({ a: { b: 2, c: { foo: 2 } } }, ["a", "c"])); // foo: 2,

console.log(get({ a: [{ b: { c: 3 } }] }, "a.0.b.c")); // 3
console.log(get({ a: [{ b: { c: 3 } }] }, ["a", 0, "b", "c"])); // 3

// console.log(get({ a: { b: 2, c: { d: 0 } }, c: 1 }, "a.c.d")); // 0
// console.log(get({}, "a", 1)); // 1
