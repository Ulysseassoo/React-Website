import React from 'react'
import Background from '../Assets/background.jpg'
import Navbar from '../Components/Navbar'
import Links from '../Components/SocialLinks'
import Events from '../Components/Events'
import Matches from '../Components/Matches'
import SliderImage from '../Components/SliderImage'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import '../Styles/Index.scss'
import { SliderImageData } from '../Components/SliderImageData'
import { SliderInfos } from '../Components/SliderInfos'

function index() {
    return (
        <div className="Container">
            <Navbar />
            <section className="background" id="home">
                <div className="overlay"></div>
                <p>La vie est comme faire du vélo. <br></br><span>Pour garder votre équilibre, vous devez continuer à avancer.</span></p>
                <img className="first" src={Background} alt="vélo background"/>
                <img className="second" src={Background} alt="vélo background"/>
                <Links />
            </section>
            <section>
                <Events />
            </section>
            <section className="matches" id="matches">
                <Matches SliderInfos={SliderInfos} />
            </section>
            <section className="highlights" id="highlights">
                <SliderImage Sliders={SliderImageData} />
            </section>
            <section className="newsletter" id="newsletter">
                <Newsletter />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default index
