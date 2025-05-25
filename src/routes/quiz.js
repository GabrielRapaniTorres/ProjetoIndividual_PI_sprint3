const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Rota para salvar resposta do quiz
router.post('/responder', quizController.salvarResposta);

// Rota para obter estatísticas da pergunta (opcional)
router.get('/estatisticas/:idPergunta', quizController.obterEstatisticas);

module.exports = router;
