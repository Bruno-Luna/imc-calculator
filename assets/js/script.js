
const botaoCalcular = document.querySelector('button')
const form = document.querySelector('form')

botaoCalcular.addEventListener(`click`, event => {
        event.preventDefault()
        verificarImc(form.kilos.value, form.altura.value)        
})

const verificarImc = (peso, altura) => {
        if (!peso || !altura) return alert('Por favor, preencha todos os dados.');
      
        const imc = peso / altura ** 2;
        const [limiar1, limiar2, limiar3, limiar4, limiar5] = [18.5, 24.9, 29.9, 34.9, 39.9];
      
        const mensagens = [
          'Abaixo do Peso',
          'Peso Normal',
          'Sobrepeso',
          'Obesidade Grau I',
          'Obesidade Grau II',
          'Obesidade Mórbida'
        ];
      
        const classificacao = 
            imc <= limiar1 ? 0
          : imc <= limiar2 ? 1
          : imc <= limiar3 ? 2
          : imc <= limiar4 ? 3
          : imc <= limiar5 ? 4
          : 5;
      
        res.innerText = mensagens[classificacao];
        numImc.innerText = imc.toFixed(1);
        res.style.color = '#b7094c';
      };