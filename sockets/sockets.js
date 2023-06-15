const { io } = require('../index');
const InputValue = require('../models/input_value');
const InputValues = require('../models/input_values');

const inputValues = new InputValues();
console.log('init server');
inputValues.addInputValue(new InputValue('Belanova'));
inputValues.addInputValue(new InputValue('Nirvana'));
inputValues.addInputValue(new InputValue('Los Acoste'));
inputValues.addInputValue(new InputValue('Mi Banda el Mexicano'));


console.log(inputValues);

//mensajes de sockets
io.on('connection', client => {
    console.log('cliente conectado');

    client.emit('active-values', inputValues.getInputValues());

    client.on('disconnect', () => {
        console.log('cliente desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);
        io.emit('mensaje', { admin: 'Nuevo mensaje' });
    });

    client.on('vote-input', (payload) => {
        console.log(payload);
        inputValues.voteInputValue(payload.id);
        io.emit('active-values', inputValues.getInputValues());

    });

    /* client.on('emitir-mensaje', (payload) => {
        //console.log(payload);
        //io.emit('nuevo-mensaje', payload);// emite a todos
        client.broadcast.emit('nuevo-mensaje', payload);
    }); */
});