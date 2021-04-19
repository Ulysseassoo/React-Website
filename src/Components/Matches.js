import {React} from 'react'
import Carousel from 'react-elastic-carousel'
import Bike from '../Assets/bike.png'
import '../Styles/Matches.scss'
    
function Matches({SliderInfos}) {
    const breakPoints = [
        { width: 370, itemsToShow: 1 },
    ];

    return (
        <div className="bike_logo">
            <img src={Bike} alt="logo vélo" />
            <div className="slider_games">
                <h1>UPCOMING MATCHES</h1>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="slides_container">
                    <Carousel breakPoints={breakPoints} className="slides">
                        {SliderInfos.map((slider, index) => {
                            return(
                                <div className="slide" key={index}>
                                    <h2>{slider.infos.date}</h2>
                                    <div className="content">
                                        <p>{slider.infos.round}</p>
                                        <span>{slider.infos.versus}</span>
                                        <p>Hour : {slider.infos.hour}</p>
                                    </div>
                                    <button>Buy Ticket</button>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Matches
