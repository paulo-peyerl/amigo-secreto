let listaDoNomeDosAmigos = [];
function adicionar(){
    let nomesDosAmigos = document.getElementById('nome-amigo').value;
    if(nomesDosAmigos === '' ){
        alert('O campo não pode estar vazio.');
        return;
    }
    listaDoNomeDosAmigos.push(nomesDosAmigos);
    document.getElementById('nome-amigo').value = '';
}