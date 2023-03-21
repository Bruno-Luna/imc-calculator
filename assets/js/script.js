
const botaoCalcular = document.querySelector('button')
const form = document.querySelector('form')

botaoCalcular.addEventListener(`click`, event => {
        event.preventDefault()
        verificarImc(form.kilos.value, form.altura.value)        
})

const verificarImc = (peso, altura) => {
        if(!peso || !altura){
            return alert('Por favor, preencha todos os dados.')
        }

        const imc = peso / (altura * altura);

       if (imc <= 18.5){
        res.innerText = 'Abaixo do Peso'
       } else if(imc > 18.5 && imc <= 24.9){
        res.innerText = 'Peso Normal'
       }else if(imc >= 25 && imc <= 29.9){
        res.innerText = 'Sobrepeso'
       }else if(imc >= 30 && imc <= 34.9){
        res.innerText = 'Obesidade Grau I'
       }else if(imc >= 35 && imc <= 39.9){
        res.innerText = 'Obesidade Grau II'
       }else if(imc >= 40){
        res.innerText = 'Obesidade Mórbida'
       }
       numImc.innerText = imc.toFixed(1)
       res.style.color += '#b7094c'
}