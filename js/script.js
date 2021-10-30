let pessoas = [];
let premios = [];


/*let quantidadePessoas = Number(prompt("Informe a quantidade de pessoas"));
let quantidadePremios = Number(prompt("Informe a quantidade de prêmios"));

for(let i = 0; i < quantidadePessoas; i++) {
    pessoas.push(prompt(`Informe o nome da Pessoa ${i+1}`));
}

for(let i = 0; i < quantidadePremios; i++) {
    premios.push(prompt(`Informe o nome do Premio ${i+1}`));
}*/

function adicionarPessoa(){
    let pessoa = document.getElementById("nomePessoa");
    pessoas.push(pessoa.value);
}

function adicionarPremio(){
    let premio = document.getElementById("nomePremio");
    premios.push(premio.value);
}

function sortear(){
    
    let numeroPessoas = pessoas.length;
    let numeroSorteado = Math.floor(Math.random() * numeroPessoas);
    document.getElementById("numero").innerHTML = numeroSorteado +1;
    document.getElementById("nome").innerHTML = pessoas[numeroSorteado];

    let numeroPremios = premios.length;
    let numeroSorteado2 = Math.floor(Math.random() * numeroPremios);
    document.getElementById("final").innerHTML = [`Parabéns ${pessoas[numeroSorteado]}! Você ganhou: ${premios[numeroSorteado2]}`];
}