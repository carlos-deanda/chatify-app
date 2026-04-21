import { useState } from 'react'
import { socket } from '../socket'

const MyForm = () => {
    const [message, setMessage] = useState('');

    const handleOnChange = (e) => {
        setMessage(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault()
        if (message.trim()) { // Validación mínima para no enviar vacíos
            socket.emit('chat message', message)
            setMessage('') // Limpiamos el input tras enviar
        }
    }
  
    return (
        <form 
            onSubmit={handleClick} 
            className="flex items-center gap-2 bg-[#1e293b] p-2 rounded-xl border border-slate-700 shadow-lg"
        >
            {/* Input de texto con estilo minimalista */}
            <input
                type='text'
                name="message"
                placeholder="Escribe un mensaje..."
                value={message}
                onChange={handleOnChange}
                className="flex-1 bg-transparent border-none text-slate-200 placeholder-slate-500 focus:ring-0 focus:outline-none px-4 py-2 text-sm"
            />

            {/* Botón circular con efecto de hover y presión */}
            <button 
                onClick={handleClick}
                className="bg-indigo-600 hover:bg-indigo-500 active:scale-90 text-white p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center shadow-md shadow-indigo-500/20"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
            </button>
        </form>
    )
}

export default MyForm