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