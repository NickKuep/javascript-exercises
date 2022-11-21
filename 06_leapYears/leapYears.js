const leapYears = function (year) {
  if (year % 100 == 0) {
    if (year % 400 && 100 != 0) {
      return false;
    } else {
      return true;
    }
  } else if (year % 4 != 0) {
    return false;
  } else {
    return true;
  }
};
// Do not edit below this line
module.exports = leapYears;
