function verificar (){
    // puxa a data atual
    var data = new Date()

    // pega o ano atual com 4 digitos
    var ano = data.getFullYear() 

    // Seleciona a id do ano
    var fano = document.getElementById('txtano')

    // Seleciona a id do resultado
    var res = document.getElementById('res')
    
    // Verifica se o ano está vazio ou se o ano é inválido.
    if(fano.value == 0 || fano.value > ano){ 
        alert('Verifique os dados e preencha novamente.')
    } else{

        // Seleciona o id dos radios (sexo)
        var fsex = document.getElementsByName('radsex') 

        // calcula: ano atual - ano digitado.
        var idade = ano - Number(fano.value) 
        var genero = ''

        // Criar a imagem dinamicamente
        var img = document.createElement('img') 

        // Verifica qual sexo é marcado.
        if (fsex[0].checked){  
            genero = 'Homem'

            // se idade for igual a 0 e menor que 10
            if (idade >=0 && idade < 10){
                img.src = 'img/foto-homem-bebe.png';
            
            // se idade for maior que 10 e menor que 18
            } else if(idade > 10 && idade < 18){
                img.src = 'img/foto-homem-jovem.png';

            // se idade for maior que 18 e menor que 50
            } else if(idade > 18 && idade < 50){
                img.src = 'img/foto-homem-adulto.png';

            // se idade for maior que 50 
            } else{
                img.src = 'img/foto-homem-idoso.png';
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.src = 'img/foto-mulher-bebe.png';
            } else if(idade > 10 && idade < 18){
                img.src = 'img/foto-mulher-jovem.png';
            } else if(idade > 18 && idade < 50){
                img.src = 'img/foto-mulher-adulta.png';
            } else{
                img.src = 'img/foto-mulher-idosa.png';
            }
        }
        // Mostra o resultado na tela.
        res.innerHTML = `<p>Você é ${genero} e tem ${idade}.</p>`

        // cria imagem na div resultado.
        res.appendChild(img)
    }
}