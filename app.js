alert('Bem vindo ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() *numeroMaximo + 1 )
console.log (numeroSecreto);
let chute ;
let tentativas = 1;

// enquantochute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha un número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto 
if (chute == numeroSecreto) {
   break;
} else {
   if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`);
   } else {
    alert(`O número secreto é maior que ${chute}`);
   }
   // tentativas = tentativas +1;
   tentativas ++;
}
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
