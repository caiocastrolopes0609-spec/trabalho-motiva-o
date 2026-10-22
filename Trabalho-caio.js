
const tarefas = document.querySelectorAll(".tarefa");
const contador = document.querySelector("#contador-tarefas");

const botaoMotivacao = document.querySelector("#botao-motivacao");
const mensagem = document.querySelector("#mensagem-motivacional");

// Atualizar o contador
function atualizarContador() {
    let concluidas = 0;

    tarefas.forEach(function(tarefa) {
        if (tarefa.classList.contains("tarefa-concluida")) {
            concluidas++;
        }
    });

    contador.textContent = concluidas + " de 4 tarefas concluídas";
}

// Avançar as tarefas
tarefas.forEach(function(tarefa) {
    const indicador = tarefa.querySelector(".indicador-estado");
    const botao = tarefa.querySelector(".botao-avancar");

    botao.addEventListener("click", function() {

        if (tarefa.classList.contains("tarefa-pendente")) {
            tarefa.classList.remove("tarefa-pendente");
            tarefa.classList.add("tarefa-andamento");

            indicador.classList.remove("estado-pendente");
            indicador.classList.add("estado-andamento");

            indicador.textContent = "Em andamento";
            botao.textContent = "Concluir tarefa";

        } else if (tarefa.classList.contains("tarefa-andamento")) {
            tarefa.classList.remove("tarefa-andamento");
            tarefa.classList.add("tarefa-concluida");

            indicador.classList.remove("estado-andamento");
            indicador.classList.add("estado-concluida");

            indicador.textContent = "Concluída";
            botao.textContent = "Recomeçar tarefa";

        } else {
            tarefa.classList.remove("tarefa-concluida");
            tarefa.classList.add("tarefa-pendente");

            indicador.classList.remove("estado-concluida");
            indicador.classList.add("estado-pendente");

            indicador.textContent = "Pendente";
            botao.textContent = "Iniciar tarefa";
        }

        atualizarContador();
    });
});

// Mensagens motivacionais
botaoMotivacao.addEventListener("click", function() {
    const frases = [
        "Nunca desista dos seus objetivos!",
        "Continue estudando e aprendendo!",
        "Eu aprendi que desistir não é uma opção continue!",
        "Você consegue!"
    ];

    const numero = Math.floor(Math.random() * frases.length);

    mensagem.textContent = frases[numero];
});

// Contar as tarefas ao abrir a página
atualizarContador();

