import React from 'react'
import img from "../assests/chat-img.jpg"
import './home.css'

function Home() {
    return <div className='home-wrapper'>
        <div className='home-intro-text'>
            <h1>Share the world with your friends</h1>
            <p>Chat with the world</p>
            <a href='/signup'><button className='button'>Get Started</button></a>
        </div>

        <img className='home-img' src={img} alt="chat-img" />
    </div>
}

export default Home