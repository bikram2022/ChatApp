import React from 'react'
import Room from './Room';

function Sidebar(props) {
    const rooms = ['room one', 'room two', 'room three'];
    return <div className={props.className}>
        <h2>Available rooms</h2>

        {rooms.map((room, idx) => (
            <Room key={idx} name={room} />
        ))}
        <h2>Members</h2>

    </div>
}

export default Sidebar