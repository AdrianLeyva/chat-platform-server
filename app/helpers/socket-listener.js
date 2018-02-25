/**
 * Created by adrianaldairleyvasanchez on 2/22/18.
 */
'use strict';
const config = require('../configuration/global-configuration');
const socketHandler = require('../helpers/socket-handler');

module.exports = {
  activateListeners: function (io, socket, hashMap) {
      //Disconnect user
      socket.on('disconnection', function () {
          hashMap.deleteUserName(socket.id);
      });

      //TODO: Implement logic code...
      socket.on('create-room', function (roomName) {
          socket.broadcast.to(config.SUPPORT_CLIENT.SOCKET_ID).emit('join-to-room', roomName);
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
          socketHandler.getClientsOfRoom(io, data.room, function (clients) {
              io.to(data.room).emit('get-online-users', clients);
              console.log("total clients in room: %d", clients.length);
          });
      });

      //SUPPORT client has joined
      socket.on('support-client-join', function (token) {
          if(token == config.SUPPORT_CLIENT.ID){
              io.emit('success-validation', token);
              //------- DON'T REMOVE ------------------TODO: Fix logic implementation
              //JOIN SUPPORT CLIENT INTO EVERY ROOM OF CHAT PLATFORM
              var rooms = socketHandler.getAllRooms(socket);
              for(var room in rooms){
                  socket.join(room);
              }
              //-------------------------------------------
          }
      });

      //REQUEST TO JOIN NEW CREATED ROOM --SUPPORT--
      socket.on('join-to-room', function (roomName) {
          socket.join(roomName);
      });
  }
};