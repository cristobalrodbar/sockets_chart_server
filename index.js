const express = require('express');
const path = require('path');
require('dotenv').config();


//app express
const app = require('express')();

//node server
const httpServer = require("http").createServer(app);
module.exports.io = require('socket.io')(httpServer);
require('./sockets/sockets.js');

//path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

httpServer.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('servidor corriendo en puerto', process.env.PORT);
});