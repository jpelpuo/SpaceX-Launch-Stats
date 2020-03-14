const express = require('express');
const app = require('./app')


if(process.env.NODE_ENV !== 'production'){
    const ENV = require('dotenv').config();
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})