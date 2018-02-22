/**
 * Created by adrianaldairleyvasanchez on 2/22/18.
 */
'use strict';

module.exports = function (app, io, roomsArray) {
    require('../routes/create-room')(app, io, roomsArray);
};