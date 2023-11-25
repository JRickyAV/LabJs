
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const PORT = 8080;

server.on('listening', () => {
  const address = server.address();
  console.log(`Servidor UDP escuchando en ${address.address}:${address.port}`);
});

server.on('message', (message, remote) => {
  console.log(`Mensaje recibido de ${remote.address}:${remote.port}: ${message}`);

  // Enviar un mensaje de respuesta al cliente
  const responseMessage = '¡Mensaje recibido con éxito!';
  server.send(responseMessage, remote.port, remote.address, (err) => {
    if (err) {
      console.error(`Error al enviar la respuesta al cliente: ${err}`);
    } else {
      console.log(`Respuesta enviada al cliente: ${responseMessage}`);
    }
  });
});

server.bind(PORT);