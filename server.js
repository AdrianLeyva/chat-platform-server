/**
 * Created by adrianaldairleyvasanchez on 2/21/18.
 */
'use strict';
//Modules
const config = require('./app/configuration/global-configuration');
var ClientHashMap = require('./app/helpers/clientHashMap');
var hashMap = new ClientHashMap();
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || config.SERVER.PORT;


// Running the server.
http.listen(port, function(){
    console.log('listening on *:' + port);
    //Initialize socket connection.
    require('./app/listeners/connection/connection')(io, hashMap);
    //Initialize support client.
    require('./app/support-client/listeners/connection')();
});