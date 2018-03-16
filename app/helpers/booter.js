/**
 * Created by adrianaldairleyvasanchez on 3/4/18.
 */
'use strict';
/*
 * This modules initialize all event listeners of socket
 * connection with the client.
 */
module.exports = function (io, socket, hashMap, roomHashMap, socketHandler, app) {
    /*
     * LISTENERS
     */
    require('../listeners/chat/chat-message')(io, socket, hashMap);
    require('../listeners/chat/get-online-users')(io, socket, socketHandler, hashMap);
    require('../listeners/chat/support-client-join')(io, socket, socketHandler);

    require('../listeners/connection/disconnection')(io, socket, hashMap);

    require('../listeners/rooms/create-room')(io, socket, roomHashMap);
    require('../listeners/rooms/join-room')(io, socket, hashMap);
    require('../listeners/rooms/leave-room')(io, socket, hashMap);
    require('../listeners/rooms/get-all-rooms')(io, socket, socketHandler, hashMap, roomHashMap);
    require('../listeners/rooms/join-to-room')(socket);



    /*
     * ENDPOINTS
     */
    require('../routes/root')(app);

};