const { io } = require('../index');

//mensajes de sockets
io.on('connection', client => {
    console.log('cliente conectado');
    client.on('disconnect', () => { 
        console.log('cliente desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);
        io.emit('mensaje', { admin: 'Nuevo mensaje' });
    });

    client.on('emitir-mensaje', (payload) => {
        //console.log(payload);
        //io.emit('nuevo-mensaje', payload);// emite a todos
        client.broadcast.emit('nuevo-mensaje', payload);
    });
});