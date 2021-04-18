import React from 'react'
import LeftBg from '../Assets/leftpic.jpg'
import RightBg from '../Assets/rightpic.jpg'
import '../Styles/Events.scss'

function Events() {
    return (
        <div className="upcoming">
            <img src={LeftBg} alt="Course evenements" />
            <img src={RightBg} alt="Velo sur la route" />
        </div>
    )
}

export default Events
