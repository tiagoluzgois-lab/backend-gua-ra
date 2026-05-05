//Lista ordenada de valores

const frutas = ["Maçã", "Banana", "Uva", "Manga"];
console.log(frutas[3]);

frutas[0] = "Abacaxi";
console.log(frutas)

frutas[2] = "Laranja";
console.log(frutas);

frutas[3] = "Abacate";
console.log(frutas);
console.log(frutas.length)
frutas.push("Uva");

const removido = frutas.pop();
console.log(frutas);
console.log(removido);
frutas.shift();
console.log(frutas);

console.log(frutas.indexOf("Laranja"));
console.log(frutas.indexOf("Pêra"));