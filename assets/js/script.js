
const botaoCalcular = document.querySelector('button')
const form = document.querySelector('form')


botaoCalcular.addEventListener(`click`, event => {
        event.preventDefault()
        verificarImc(form.kilos.value, form.altura.value)        
})


const verificarImc = (peso, altura) => {

        const imc = peso / (altura * 2);

       if (imc <= 18.5){
        numImc.innerText = imc.toFixed(1)
        res.innerText = 'Abaixo do Peso'
        res.style.color += '#b7094c'
       } else if( imc > 18.5 && imc <= 24.9){
        numImc.innerText = imc.toFixed(1)
        res.innerText = 'Peso Normal'
        res.style.color += '#b7094c'
       }else if( imc >= 25 && imc <= 29.9){
        numImc.innerText = imc.toFixed(1)
        res.innerText = 'Sobrepeso'
        res.style.color += '#b7094c'
       }else if( imc >= 30 && imc <= 34.9){
        numImc.innerText = imc.toFixed(1)
        res.innerText = 'Obesidade Grau I'
        res.style.color += '#b7094c'
       }else if( imc >= 35 && imc <= 39.9){
        numImc.innerText = imc.toFixed(1)
        res.innerText = 'Obesidade Grau II'
        res.style.color += '#b7094c'
       }else if( imc >= 40){
        numImc.innerText = imc.toFixed(1)
        res.innerText = 'Obesidade Mórbida'
        res.style.color += '#b7094c'
       }else{
           alert('Por favor, preencha todos os dados.')
       }
}