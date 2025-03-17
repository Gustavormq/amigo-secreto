//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obtém o valor do campo de input
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim();
    
    // Validação da entrada
    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);
    
    // Atualiza a lista visível na página
    atualizarLista();
    
    // Limpa o campo de input
    inputNome.value = '';
}

// Função para atualizar a lista de amigos na página
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome como um item da lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para realizar o sorteio
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Verifica se há nomes suficientes na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}