let amigos = [];

function adicionarAmigo() {
  let recebeAmigo = document.querySelector("input").value;
  if (recebeAmigo) {
    amigos.push(recebeAmigo);
    atualizarListAmigos();
    document.querySelector("input").value = "";
  } else {
    alert("Por favor, insira um nome");
  }
}

function atualizarListAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    listaAmigos.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia! Adicione amigos antes de sortear.");
    return;
  }
  let nomeAleatorio = Math.floor(Math.random() * amigos.length);

  let nomeDoSorteado = amigos[nomeAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo sorteado: ${nomeDoSorteado}`;
}
