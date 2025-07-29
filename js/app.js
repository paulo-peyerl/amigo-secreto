let arrayDoNomeDosAmigos = [];
function adicionar(){
    let nomesDosAmigos = document.getElementById('nome-amigo').value;
    if(nomesDosAmigos === '' ){
        alert('O campo não pode estar vazio.');
        return;
    }
    arrayDoNomeDosAmigos.push(nomesDosAmigos);
    document.getElementById('nome-amigo').value = '';
}