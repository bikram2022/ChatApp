import React from 'react'

function Navigation() {
    return <div className="navbar">
        <a href='/'><h1 className="brandName">HeyChat</h1></a>
        <div className='nav-buttons'>
            <a href='/chat'><button className='nav-button'>Chat</button></a>
            <a href='/login'><button className='nav-button'>Login</button></a>
            <a href='/signup'><button className='nav-button'>SignUp</button></a>
        </div>
    </div>
}

export default Navigation