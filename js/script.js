let pessoas = [];
let premios = [];

function remover(){
    document.getElementById("alerta").innerHTML = "";
}

function adicionarPessoa(){
    let pessoa = document.getElementById("nomePessoa");
    pessoas.push(pessoa.value);
    document.getElementById("alerta").innerHTML = `${pessoa.value} Adicionado`;    
    pessoa.value = "";    

    setTimeout(remover,1500);
}

function adicionarPremio(){
    let premio = document.getElementById("nomePremio");
    premios.push(premio.value);
    document.getElementById("alerta").innerHTML = `${premio.value} Adicionado`; 
    premio.value = "";

    setTimeout(remover,1500);
}

function sortear(){  
    
    if(pessoas.length == 0 || premios.length == 0){
        alert("Insira os Nomes e os Prêmios antes de clicar em Sortear!");
    }else{
    
    let numeroPessoas = pessoas.length;
    let numeroSorteado = Math.floor(Math.random() * numeroPessoas);
    document.getElementById("numero").innerHTML = `Número sorteado: ${numeroSorteado +1}`;
    document.getElementById("nome").innerHTML = `Nome: ${pessoas[numeroSorteado]}`;

    let numeroPremios = premios.length;
    let numeroSorteado2 = Math.floor(Math.random() * numeroPremios);   
    
    document.getElementById("final").innerHTML = [`Parabéns ${pessoas[numeroSorteado]} ! Prêmio: ${premios[numeroSorteado2]}`];
    }
}