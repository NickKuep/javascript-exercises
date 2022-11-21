const sumAll = function (...numbers) {
  try {
    const sanitized = sanitizeInput(...numbers);
  } catch (e) {
    return "ERROR";
  }
  const maxNum = Math.max(...numbers);
  const minNum = Math.min(...numbers);
  let calc = 0;
  for (let i = minNum; i < maxNum + 1; i++) {
    calc += i;
  }
  return calc;
};

function sanitizeInput(...numbers) {
  for (const num of numbers) {
    if (typeof num !== "number") {
      throw new Error("Accept only numbers");
    }
    if (num < 0) {
      throw new Error("Is a negative number");
    }
  }

  return [...numbers];
}

// Do not edit below this line
module.exports = sumAll;
