const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const PORT = 8080;

server.on('listening', () => {
  const address = server.address();
  console.log(`Servidor UDP escuchando en ${address.address}:${address.port}`);
});

server.on('message', (message, remote) => {
  console.log(`Mensaje recibido de ${remote.address}:${remote.port}: ${message}`);
});

server.bind(PORT);
