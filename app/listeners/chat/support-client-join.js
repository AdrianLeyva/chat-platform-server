/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
const config = require('../../configuration/global-configuration');

module.exports = function (io, socket, socketHandler) {
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
};
