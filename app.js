var ambiente_processo = 'desenvolvimento'; // ou 'producao'
var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

require("dotenv").config({ path: caminho_env });

const express = require("express");
const cors = require("cors");
const path = require("path");

const PORTA_APP = process.env.APP_PORT || 3000;
const HOST_APP = process.env.APP_HOST || 'localhost';

const app = express();

// Importar rotas
var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var empresasRouter = require("./src/routes/empresas");
const quizRouter = require('./src/routes/quiz');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Usar todas as rotas, cada uma com seu prefixo
app.use('/', indexRouter);            // rota raiz
app.use('/usuarios', usuarioRouter);
app.use('/avisos', avisosRouter);
app.use('/medidas', medidasRouter);
app.use('/aquarios', aquariosRouter);
app.use('/empresas', empresasRouter);
app.use('/quiz', quizRouter);

// Iniciar servidor
app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
                                                                                                      
    Servidor rodando em: http://${HOST_APP}:${PORTA_APP} \n
    Ambiente: .:${ambiente_processo}:.
    `);
});
