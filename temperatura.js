//conversor de temperaturas
const cidade = "curitiba";
let tempCelsius = 18.5;

const tempFahrenheit = tempCelsius * (9/5) + 32;
const tempKelvin = tempCelsius + 273.15;

console.log(`A temperatura de ${cidade} está ${tempCelsius} Cº`);
console.log(`Fahrenheit: ${tempFahrenheit.toFixed(1)} Fº`);
console.log(`Kelvin: ${tempKelvin.toFixed(1)} Kº`);