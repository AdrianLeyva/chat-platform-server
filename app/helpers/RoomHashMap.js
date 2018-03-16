/**
 * Created by adrianaldairleyvasanchez on 3/15/18.
 */
'use strict';

function RoomHashMap() {
    this.map = [];
}

RoomHashMap.prototype.addRoomName = function (roomName) {
    this.map.push(roomName);
};

RoomHashMap.prototype.getRoomNames = function () {
  return this.map;
};

module.exports = RoomHashMap;