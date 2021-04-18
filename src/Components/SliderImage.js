import React, { useState } from 'react'
import { SliderImageData } from './SliderImageData'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import '../Styles/SliderImage.scss'

function SliderImage({Sliders}) {
    const [current, setCurrent] = useState(0)
    const length = Sliders.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(Sliders) || Sliders.length <= 0) {
        return null
    }

    return (
        <div className="slider_images">
            <div className="left_arrow" onClick={prevSlide}>
                <FaArrowLeft />
            </div>
            <div className="right_arrow" onClick={nextSlide}>
                <FaArrowRight onClick={nextSlide} />
            </div>
            {SliderImageData.map((slider, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slider.image} alt="vélo_courses" class="image"/>)}
                    </div>
                )
            })}
        </div>
    )
}

export default SliderImage
