botao.onclick = function(){
    v1 = parseInt(valor1.value);
    v2 = parseInt(valor2.value);
    v3 = parseInt(valor3.value);

    maior = v1;
    if(v2 > maior ){
        maior = v2;
    }
    if(v3 > maior){
        maior = v3;
    }
    if(v2 > maior){
        maior = v2
    }
    mensagem.innerHTML = maior;
}