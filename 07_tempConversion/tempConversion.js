// x = (x - 32) 5/9
const ftoc = function (fTemp) {
  const celsius = (fTemp - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10;
};
// x = x(1.8)+32
const ctof = function (cTemp) {
  const fahr = cTemp * 1.8 + 32;
  return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
