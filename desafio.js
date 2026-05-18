const produto = "Roupas";
let preco = 380.00;
let estoque = 25;
const categoria = "acessório";
const marca = "Archange";

console.log(`O produto é: ${produto}.`);
console.log(`A ${produto} custa R$ ${preco.toFixed(2)}.`);
console.log(`O estoque ainda possui ${estoque} camisetas.`);
console.log(`A categoria de ${produto} é ${categoria}.`);
console.log(`Marca: ${marca}.`);

const numero1 = 20;
const numero2 = 4;
const resultadoSubtração = numero1 - numero2;
const resultadoMultiplicação = numero1 * numero2;

console.log(`O resultado da subtração é ${resultadoSubtração}, e o resultado da multiplicão é ${resultadoMultiplicação}.`)

const Desconto = 12;
const precoComDesconto = preco * (1 - Desconto / 100);

console.log(`Preço com 12% de desconto: R$ ${precoComDesconto.toFixed(2)}.)