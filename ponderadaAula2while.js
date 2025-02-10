var nome = "Cristiano";

const notas = [9.5, 10, 8.5];

let soma = 0;

let i = 0;

while (i < notas.length) {
  soma += notas[i];
  i++;
}

const media = (soma / notas.length).toFixed(2);

console.log("A média das notas do dicente é:", media);

if (media >= 7.0) {
  console.log(
    "Parabéns,",
    nome + 
    ", você foi aprovado com média " + media + "!"
  );
} else {
  console.log(
    "Infelizmente,",
    nome,
    "você não foi aprovado. Sua média foi" + media + "."
  );
}
