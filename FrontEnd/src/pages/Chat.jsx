import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageForm from '../components/MessageForm'
import './chat.css'

function Chat() {
  return <div className='chat-container'>
    <Sidebar className="chat-sidebar"/>
    <MessageForm className="chat-message-form"/>
  </div>
}

export default Chat