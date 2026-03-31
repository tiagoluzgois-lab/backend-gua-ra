//OPERADOR E &&
let maiorIdade = false;
let possuiDocumento = true;

if(maiorIdade && possuiDocumento) {
    console.log('pode entrar na festa!')
} else {
    console.log('Não pode entrar na festa.')
};

//OPERADOR OU ||
let cartaoCredito = false;
let dinheiro = false;

if (cartaoCredito || dinheiro) {
    console.log('Pode fazer a compra.')
} else {
    console.log('Não pode fazer a compra.')
};

//OPERADOR NOT !
let estaChovendo = true;

if (!estaChovendo) {
    console.log('Pode sair sem guarda-chuva.')
} else {
    console.log('Leve o gurda-chuva.')
};