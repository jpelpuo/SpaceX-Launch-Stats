const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.static('public'));

app.get('*', (request, response) => {
    response.sendFile(__dirname, 'public', 'index.html')
})

module.exports = app;