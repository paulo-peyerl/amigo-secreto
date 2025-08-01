let arrayDoNomeDosAmigos = [];
function adicionar(){
    let nomesDosAmigos = document.getElementById('nome-amigo').value;
    let listaDosAmigos = document.getElementById('lista-amigos');
    if(nomesDosAmigos === '' ){
        alert('O campo não pode estar vazio.');
        return;
    }

    arrayDoNomeDosAmigos.push(nomesDosAmigos);
    listaDosAmigos.innerHTML = arrayDoNomeDosAmigos.join(', ');
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    let listaSorteio = document.getElementById('lista-sorteio');
    if(arrayDoNomeDosAmigos.length === 1){
        alert('Adicione pelo menos dois nomes para sortear');
        return;
    }

    let sorteados = arrayDoNomeDosAmigos.slice();
    for(let i = sorteados.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
    }

    for(let i = 0; i < arrayDoNomeDosAmigos.length; i++){
        if(arrayDoNomeDosAmigos[i] === sorteados[i]){
            sortear();
            return;
        }
    }

    let resultado = '<ul>';
    for(let i = 0; i < arrayDoNomeDosAmigos.length; i++){
        resultado += `<li>${arrayDoNomeDosAmigos[i]} → ${sorteados[i]}</li>`;
    }
    resultado += '</ul>';
    listaSorteio.innerHTML = resultado;
}

function reiniciar() {
    arrayDoNomeDosAmigos = [];
    listaDosAmigos = document.getElementById('lista-amigos');
    listaDosAmigos.textContent = '';
    listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.textContent = '';
}