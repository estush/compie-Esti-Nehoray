// socketHandler.js
const socketHandler = (io) => {
    io.on('connection', (socket) => {
      console.log('A user connected');
  
      socket.on('send-message', (message) => {
        console.log('Received message:', message);
        io.emit('receive-message', message);
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  };
  
  export default socketHandler; // ודא שיש ייצוא כ-default
  