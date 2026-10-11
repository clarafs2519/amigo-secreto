
let listaamigos = [];

function adicionar (){
    let nome = document.getElementById("nome-amigo");
        if (nome.value == ""){
        alert("Informe o nome do amigo");
        return;

        }

        if (listaamigos.includes(nome.value)){
            alert("Nome já adicionado");
            return;
        }


    let lista = document.getElementById("lista-amigos");
    listaamigos.push(nome.value);

    if (lista.textContent == ""){
        lista.textContent = nome.value;
    }else{
        lista.textContent = lista.textContent + ", " + nome.value;
    }
    nome.value = "";

}

function sortear(){
    if(listaamigos.length < 4){
        alert("Adicione pelo menos 4 amigos");
        return;
    }

    embaralhar(listaamigos);
    let sorteio = document.getElementById("lista-sorteio");
for (let i = 0; i < listaamigos.length; i++) {
    if (i == listaamigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + listaamigos[i] +' --> ' +listaamigos[0] + '<br/>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + listaamigos[i] +' --> ' + listaamigos[i + 1] + '<br/>';
    }
}
}

function embaralhar(listaamigos) {
    
    for (let indice = listaamigos.length; indice; indice--) {
        
        const indiceAleatorio = Math.floor(Math.random() * indice);
  
        [listaamigos[indice -1], listaamigos[indiceAleatorio]] = [listaamigos[indiceAleatorio], listaamigos[indice-1]];
    }
    
}


function reiniciar(){
    listaamigos = [];
    document.getElementById("lista-amigos").innerHTML='';
    document.getElementById("lista-sorteio").innerHTML='';
}