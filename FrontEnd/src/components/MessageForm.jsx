import React from 'react'
import "./messageForm.css"

function MessageForm(props) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={props.className} onSubmit={handleSubmit}>
      <div className='display-messages'>
            
      </div>
      <div className='message'>
        <input className='message-input' type="text" placeholder='Message' />
        <button className='message-send'>Send</button>
      </div>
    </form>
  )
}

export default MessageForm