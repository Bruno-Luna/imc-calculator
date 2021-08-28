function calcularIMC(){

        var peso = parseInt(document.getElementById('peso').value);
        var altura = parseFloat(document.getElementById('altura').value);
         
        var imc = peso / (altura * 2);

       if (imc <= 20){
        numImc.innerText = imc.toFixed()
        res.innerText = 'Abaixo do Peso'
        res.style.color += '#b7094c'
       } else if( imc > 20 && imc <= 25){
        numImc.innerText = imc.toFixed()
        res.innerText = 'Peso Ideal'
        res.style.color += '#b7094c'
       }else if( imc > 25 && imc <= 30){
        numImc.innerText = imc.toFixed()
        res.innerText = 'Sobrepeso'
        res.style.color += '#b7094c'
       }else if( imc > 30 && imc <= 35){
        numImc.innerText = imc.toFixed()
        res.innerText = 'Obesidade Moderada'
        res.style.color += '#b7094c'
       }else if( imc > 35 && imc <= 40){
        numImc.innerText = imc.toFixed()
        res.innerText = 'Obesidade Severa'
        res.style.color += '#b7094c'
       }else if( imc > 40 && imc <= 50){
        numImc.innerText = imc.toFixed()
        res.innerText = 'Obesidade Mórbida'
        res.style.color += '#b7094c'
       }else if ( imc > 50){
        numImc.innerText = imc.toFixed()
        res.innerText = 'Super Obesidade'
        res.style.color += '#b7094c'
       }else{
           alert('Por favor, preencha todos os dados.')
       }
}