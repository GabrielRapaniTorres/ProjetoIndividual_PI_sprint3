const database = require("../database/config");

function salvarResposta(idUsuario, idPergunta, respostaEscolhida, correta) {
    const instrucaoSql = `
        INSERT INTO resposta_quiz (id_usuario, id_pergunta, resposta_escolhida, correta, data_hora)
        VALUES (${idUsuario}, ${idPergunta}, ${respostaEscolhida}, ${correta ? 1 : 0}, NOW());
    `;
    return database.executar(instrucaoSql);
}

function obterEstatisticas(idPergunta) {
    const instrucaoSql = `
        SELECT 
            resposta_escolhida,
            COUNT(*) AS quantidade,
            SUM(correta) AS acertos
        FROM resposta_quiz
        WHERE fk_pergunta = ${idPergunta}
        GROUP BY resposta_escolhida
        ORDER BY resposta_escolhida;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResposta,
    obterEstatisticas
};
