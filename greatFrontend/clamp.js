export default function clamp(value, lower, upper) {
  // for (let i = lower; i <= upper; i++) {
  //   if (value === i) {
  //     return value;
  //   }
  // }

  const result = value >= lower && upper >= value;
  console.log(result);
  if (result) {
    return value;
  }
  console.log(value <= lower); // -5.5 <= -5.6
  console.log(value >= upper); // -5.5 >= 5.6

  if (value <= lower) {
    return lower;
  } else if (value >= upper) {
    return upper;
  }

  console.log("실행안됨");
  throw "Not implemented";
}

// Within the bounds, return as-is.
// console.log(clamp(3, 0, 5)); // => 3

// Smaller than the lower bound.
// console.log(clamp(-10, -3, 5)); // => -3

// Bigger than the upper bound.
// console.log(clamp(10, -5, 5)); // => 5
// console.log(clamp(-4, -5, 5));
// console.log(clamp(-5, -5, 5));
console.log(clamp(-5.5, -5.6, 5.6));
