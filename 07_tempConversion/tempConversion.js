const convertToCelsius = function(temperature) {
const calculatedTemp = (temperature-32) * (5/9);
return Math.round(calculatedTemp * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  const calculatedTemp = (temperature * (9/5) + 32);
  return Math.round(calculatedTemp * 10) / 10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
