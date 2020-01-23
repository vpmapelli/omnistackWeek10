const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes.js')

const { setupWebsocket } = require('./websocket.js')


const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://...', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000' }))
// Aplicar JSON para todas as rotas. Caso contrário, resposta é undefined
app.use(express.json());
app.use(routes);

server.listen(3333);

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros:
// Query Params: req.query (filtros, ordenação, paginação, ...)
// Route Params: req.params (identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro)

// MongoDB (não relacional)

