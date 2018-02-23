/**
 * Created by adrianaldairleyvasanchez on 2/22/18.
 */
'use strict';

module.exports = {
  activateListeners: function (io, socket) {
      //Join in a chosen room
      socket.on('join-room', function (room, nickname) {
          socket.join(room);
          io.to(room).emit('join-room', nickname);
          console.log(nickname + ' has joined into ' + room + ' room');
      });

      //Broadcast a message
      socket.on('chat-message', function (room, message) {
          console.log(JSON.stringify(message));
          io.to(room).emit('chat-message', message);
      });

      //Leave the current room
      socket.on('leave-room', function (room, nickname) {
          io.to(room).emit('leave-room', nickname);
          socket.leave(room, function (err) {
              if(err)
                  console.log(err);
              else
                  console.log(nickname + ' has leaved ' + room + ' room');
          });
      });
  }
};