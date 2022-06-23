texto.onkeyup = function(){
    this.value = this.value.toUpperCase();
    quant.innerHTML = this.value.length;
}