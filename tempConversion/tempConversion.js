const ftoc = function(fahTemp) {
  return roundToOne(((fahTemp - 32) * 5)/9);
}

const ctof = function(celTemp) {
  return roundToOne((celTemp * 9) / 5 + 32);
}

const roundToOne = function(number) {
  return Math.round(number * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
