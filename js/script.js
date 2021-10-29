let pessoas = ["Carlos","Maria","José","Carla","Antônio","Joana","Pamela"];

function sortear(){
    
    let numeroPessoas = pessoas.length;
    let numeroSorteado = Math.floor(Math.random() * numeroPessoas);
    document.getElementById("numero").innerHTML = numeroSorteado +1;
    document.getElementById("nome").innerHTML = pessoas[numeroSorteado];
}