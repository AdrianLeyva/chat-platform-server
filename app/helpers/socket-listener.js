/**
 * Created by adrianaldairleyvasanchez on 2/22/18.
 */
'use strict';

module.exports = {
  activateListeners: function (io, socket, hashMap) {
      //Disconnect user
      socket.on('disconnection', function () {
          hashMap.deleteUserName(socket.id);
      });

      //Join in a chosen room
      socket.on('join-room', function (data) {
          socket.join(data.room);
          hashMap.addUserName(data.nickname, socket.id);
          io.to(data.room).emit('join-room', hashMap.getUserName(socket.id));
          console.log(hashMap.getUserName(socket.id) + ' has joined into ' + data.room + ' room');
      });

      //Broadcast a message
      socket.on('chat-message', function (data) {
          data.nickname = hashMap.getUserName(socket.id);
          io.to(data.room).emit('chat-message', data);
          console.log(JSON.stringify(data));
      });

      //Leave the current room
      socket.on('leave-room', function (data) {
          io.to(data.room).emit('leave-room', hashMap.getUserName(socket.id));
          socket.leave(data.room, function (err) {
              if(err)
                  console.log(err);
              else
                  console.log(hashMap.getUserName(socket.id) + ' has leaved ' + data.room + ' room');
          });
      });

      //Return online users
      socket.on('get-online-users', function (data) {
          io.sockets.adapter.clients([data.room], function(err, clients){
              io.to(data.room).emit('get-online-users', clients);
              console.log("total clients in room1: %d", clients.length);
          });
      });
  }
};