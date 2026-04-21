import './App.css'
import { socket } from './socket'
import { useEffect } from 'react'
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
  }, []);

  return (
    <div className="h-screen w-full bg-[#0f172a] text-slate-200 flex flex-col overflow-hidden font-sans">
      {/* Header / Navbar */}
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-[#1e293b]/50 backdrop-blur-md shrink-0">
        <h1 className="text-2xl font-black tracking-tighter text-indigo-400">CHATIFY</h1>
        <ManageConnection />
      </header>

      {/* Main Content Area */}
      <main className="flex flex-1 overflow-hidden">
        
        {/* Sidebar Izquierda: Canales */}
        <aside className="w-64 border-r border-slate-800 bg-[#0f172a] hidden md:block overflow-y-auto p-4">
          <Channels />
        </aside>

        {/* Centro: El Chat */}
        <section className="flex-1 flex flex-col bg-[#0b0f1a] relative">
          <div className="flex-1 overflow-y-auto p-6 scroll-smooth custom-scrollbar">
            <Chats />
          </div>
          
          {/* El Formulario de entrada al fondo */}
          <div className="p-4 bg-[#0f172a] border-t border-slate-800">
            <MyForm />
          </div>
        </section>

        {/* Sidebar Derecha: Usuarios */}
        <aside className="w-64 border-l border-slate-800 bg-[#0f172a] hidden lg:block overflow-y-auto p-4">
          <Users />
        </aside>

      </main>
    </div>
  )
}

export default App