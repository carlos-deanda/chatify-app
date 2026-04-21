import React, { useEffect, useState, useRef } from 'react'
import { socket } from '../socket'

function Chats() {
  const [messages, setMessage] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on('chat message', (msg, serverOffset) => {
      console.log("Mensaje desde Server: ", msg);
      socket.auth.serverOffset = serverOffset;
      setMessage((prev) => [...prev, msg])
    });
    return () => {
      socket.off('chat message')
    }
  }, [])

  // Lógica de diseño: Auto-scroll al final
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
        Historial de Mensajes
      </div>
      
      {messages?.map((m, index) => (
        <div 
          key={index} 
          className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`
            max-w-[80%] p-3 rounded-2xl text-sm shadow-sm
            ${index % 2 === 0 
              ? 'bg-indigo-600 text-white rounded-tr-none' 
              : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'}
          `}>
            <p className="leading-relaxed">{m}</p>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Chats