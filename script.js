function calcularIMC(){

        var formulario = document.getElementById('formulario');
        var resultado = document.getElementById('res')
        var kilos = parseInt(formulario.kilos.value);
        // parseInt - metodo que transforma a string em um valor numérico
        var metros = +formulario.metros.value;
        //  o operador + vai forçar a conversão (somente em valor positivo)
        var centimetros = +formulario.centimetros.value;
   
        
        // alert (typeof(kilos)); exibe o tipo
        var altura = (metros * 100 + centimetros)/100;
        var imc = kilos / (altura * altura);

        formulario.imc.value = imc.toFixed(2)
        /*o método toFixed(2) apresenta o número 
	   de casas decimais desejadas para o valor, nesse caso duas casas*/

       if (imc <= 20){
        resultado.innerText = 'Abaixo do Peso'
        resultado.style.color += 'red'
       } else if( imc > 20 && imc <= 25){
        resultado.innerText = 'Peso Ideal'
        resultado.style.color += 'red'
       }else if( imc > 25 && imc <= 30){
        resultado.innerText = 'Sobrepeso'
        resultado.style.color += 'red'
       }else if( imc > 30 && imc <= 35){
        resultado.innerText = 'Obesidade Moderada'
        resultado.style.color += 'red'
       }else if( imc > 35 && imc <= 40){
        resultado.innerText = 'Obesidade Severa'
        resultado.style.color += 'red'
       }else if( imc > 40 && imc <= 50){
        resultado.innerText = 'Obesidade Mórbida'
        resultado.style.color += 'red'
       }else if ( imc > 50){
        resultado.innerText = 'Super Obesidade'
        resultado.style.color += 'red'
       }else{
           alert('Preencha todos os dados')
       }
}