let ageText = prompt ('Digite sua idade');
let age = Number (ageText);

while (age < 18) {
    ageText = prompt ('O site só pode ser acessado por maiores de idade, digite sua idade novamente');
    age = Number (ageText);
}

document.write ('SEJA BEM VINDE!');

let optionText;
let option;
do {
    optionText = prompt ('Escolha uma opção: \n\n1 - Caviar\n2 - Almondega\n3 - Feijoada com figados\n')
    option = Number (optionText);
} while (option < 1 || option > 3) 

document.write('<br><br>');

switch (option) {
    case 1: 
    document.write ('escolheu caviar, mas levou pão com ovo');
    break;

    case 2: 
    document.write ('escolheu almondega, mas levou frango');
    break;

    case 3: 
    document.write ('escolheu feijoada com figado, mas levou arroz com brocolis');
    break;
}

const boletim = [];
const qtdMaterias = 3;
const qntProvas = 3;

for (let i = 0; i < qtdMaterias; i++) {
    boletim[i] = [];
    for (let j = 0; j < qntProvas; j++){
        const nota = prompt('Digite a nota da $[j + 1]ª prova da ${i + 1}ª matéria');
        boletim[i][j] = Number(nota);
    }
}

for (let i = 0; i < qtdMaterias; i++){
    document.write(`<br>${i + 1}ª Matéria: `)
    for (let j = 0; j < qntProvas; j++){
    document.write(`${boletim[i][j]}`);
    }
}