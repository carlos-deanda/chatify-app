
import './App.css'
import {socket} from '../socket'
import {useEffect} from 'react'
import ManageConnection from './components/ManageConnection'
import MyForm from './components/MyForm'
import Channels from './components/Channels'
import Chats from './components/Chats'
import Users from './components/Users'

function App() {
  useEffect(() => {
    const onConnect = () => {
      console.log("Conectado");
    };
    socket.on('connect', onConnect);
    return () => {
      socket.off('disconnect');
      socket.off('connect', onConnect);
    };

  },[]);


  return (
    <>
      <h1>Chatify</h1>
      <ManageConnection/>
      <div className="flex items-center justify-between mt-20">
        <div className="w-[150px] h-[240px]">
          <Channels/>
        </div>
        <div className="">
          <Chats/>
          <MyForm/>
        </div>
        <div className="">
          <Users/>
        </div>
      </div>
    </>
  )
}

export default App
