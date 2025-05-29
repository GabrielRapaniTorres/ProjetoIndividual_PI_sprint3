const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.post('/responder', quizController.salvarResposta);
router.get('/estatisticas/:idPergunta', quizController.obterEstatisticas);

module.exports = router;
