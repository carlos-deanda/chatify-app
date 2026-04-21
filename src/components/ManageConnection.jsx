import React from 'react';
import {socket} from '../socket.js'

const ManageConnection = () => {
  const handleConnection = (con) => {
    console.log({con});
    switch (con) {
      case 'on':
        socket.connect();
        break;
      case 'off':
        socket.disconnect();
        break;
      default:
        break;
    }
  };

  return (
    <div>
        <button onClick={() => handleConnection('on')} className="cursor-pointer">Connect</button>
        <button onClick={() => handleConnection('off')} className="cursor-pointer"> Disconnect</button>
    </div>
  );
};

export default ManageConnection;
