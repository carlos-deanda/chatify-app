import React from 'react';
import { socket } from '../socket.js'

const ManageConnection = () => {
  const handleConnection = (con) => {
    console.log({ con });
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
    <div className="flex items-center gap-3 bg-slate-800/50 p-1.5 rounded-full border border-slate-700">
        {/* Botón Conectar */}
        <button 
          onClick={() => handleConnection('on')} 
          className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 
                     bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Connect
        </button>

        {/* Botón Desconectar */}
        <button 
          onClick={() => handleConnection('off')} 
          className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 
                     bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          Disconnect
        </button>
    </div>
  );
};

export default ManageConnection;