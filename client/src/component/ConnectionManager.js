import React from 'react';
import { socket } from '../socket';

export function ConnectionManager() {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }
  function sendMessage()
  {
    socket.emit('chat message', "I am saad");
  }
  
  return (
    <>

    </>
  );
}