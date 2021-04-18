import React from 'react'
import Bike from '../Assets/bike.png'
import '../Styles/Matches.scss'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
    
function Matches() {
    // let navigateRight = (e) => {
    //         e.style.transform = "translate3d(" + (900 - 380) + "px, 0px, 0px)"
    // }
    return (
        <div className="bike_logo">
            <img src={Bike} alt="logo vélo" />
            <div className="slider_games">
                <h1>UPCOMING MATCHES</h1>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="arrow_left">
                    <FaArrowLeft />
                </div>
                <div className="arrow_right">
                    <FaArrowRight />
                </div>
                <div className="slides_container">
                    <div className="slides">
                        <div className="slide">
                            <h2>29 April, 2020</h2>
                            <div className="content">
                                <p>1st Round</p>
                                <span>Spain vs France</span>
                                <p>Hour : 15h30</p>
                            </div>
                            <button>Buy Ticket</button>
                        </div>
                        <div className="slide">
                            <h2>29 April, 2020</h2>
                            <div className="content">
                                <p>1st Round</p>
                                <span>Spain</span>
                                <p>Hour : 15h30</p>
                            </div>
                            <button>Buy Ticket</button>
                        </div>
                        <div className="slide">
                            <h2>29 April, 2020</h2>
                            <div className="content">
                                <p>1st Round</p>
                                <span>Spain</span>
                                <p>Hour : 15h30</p>
                            </div>
                            <button>Buy Ticket</button>
                        </div>
                        <div className="slide">
                            <h2>29 April, 2020</h2>
                            <div className="content">
                                <p>1st Round</p>
                                <span>Spain</span>
                                <p>Hour : 15h30</p>
                            </div>
                            <button>Buy Ticket</button>
                        </div>
                        <div className="slide">
                            <h2>29 April, 2020</h2>
                            <div className="content">
                                <p>1st Round</p>
                                <span>Spain</span>
                                <p>Hour : 15h30</p>
                            </div>
                            <button>Buy Ticket</button>
                        </div>
                        <div className="slide">
                            <h2>29 April, 2020</h2>
                            <div className="content">
                                <p>1st Round</p>
                                <span>Spain</span>
                                <p>Hour : 15h30</p>
                            </div>
                            <button>Buy Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Matches
