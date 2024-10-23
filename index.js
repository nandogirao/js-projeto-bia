let numeroGerado = parseInt(Math.random() * 100);
let tentativas = [];

numero.onchange = () => {
    if(tentativas.length < 10){
        if (tentativas.length > 0) {
            for(let i = 0; i < tentativas.length; i++) {
                if (tentativas[i] == Number(numero.value)) {
                    alert("esse numero ja foi digitado");
                    numero.value = '';
                    return;
                }
            }
        }
        tentativas.push(Number(numero.value));
        numero.value = '';
        palpites.innerHTML = tentativas.join('-');
    } else{
        alert('Acabou as tentativas');
    }
}

// while(tentativas <= 10){
//     console.log(tentativas);
//     //verifica se é um numero válido
//     if(!/[0-9]/.test(Number(numero.value))){
//         alert("Escreva um número válido!");
//         numero.value = '';
//     } else {
//     tentativas++;
//     }
// }