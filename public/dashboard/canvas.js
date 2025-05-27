const ctx = document.getElementById('grafico1');
const idPergunta = perguntaAtualIndex + 1;

let valores = [];

// Crie o gráfico e guarde na variável chart
let chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['erros', 'acertos'],
        datasets: [{
            label: ['respostas do quiz'],
            data: [0, 0],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        // Pie chart normalmente não usa scales, pode remover se quiser
    }
});

async function atualizarGrafico(idPergunta) {
    try {
        const resposta = await fetch(`/quiz/estatisticas/${idPergunta}`);
        const dados = await resposta.json();

        let acertos = 0;
        let erros = 0;
        dados.forEach(item => {
            if (item.correta === 1) acertos = item.quantidade;
            else erros = item.quantidade;
        });

        // Atualize o gráfico existente
        chart.data.datasets[0].data = [erros, acertos];
        chart.update();
    } catch (error) {
        console.error("Erro ao buscar estatísticas:", error);
    }
}

// Adicione esta linha no final do arquivo para atualizar o gráfico ao carregar a página
atualizarGrafico(idPergunta);