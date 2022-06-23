num.onchange = function(){
    if(isNaN(num.value)){
        cubo.innerHTML = 'Informe um número válido!!!';
    }else{
        var numero = parseFloat(num.value);
        var c = Math.pow(numero, 3)
        cubo.innerHTML = c;
    }
}