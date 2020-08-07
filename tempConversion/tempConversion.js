const ftoc = function(fahrenheitTemp) {
  celsius = (((fahrenheitTemp - 32) * 5) / 9);
  if (celsius % 1 !== 0) {
    return Math.round(celsius  * 10) / 10;
  }
  return celsius;
}

const ctof = function(celsiusTemp) {
  fahrenheit =  ((celsiusTemp * 9) / 5 + 32);
  if (fahrenheit % 1 !== 0) {
    return Math.round(fahrenheit  * 10) / 10;
  }
  return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
