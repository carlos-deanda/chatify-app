import React from 'react'
import {socket} from '../../socket'
import  {useEffect} from 'react'
import {useState} from 'react'


function Chats() {

  const [messages, setMessage] = useState([]);
  useEffect(() => {
    socket.on('chat message', (msg, serverOffset)=>{
      console.log("Mensaje desde Server: ", msg);
      socket.auth.serverOffset = serverOffset;
      setMessage((prev) => [...prev, msg])
    });
      return () => {
        socket.off('chat message')
      }
  }, [])


  return (
    <>
      <div>Chats</div>
      {messages?.map((m) => (
        <p>{m}</p>
      ))}
    </>
  );
};

export default Chats