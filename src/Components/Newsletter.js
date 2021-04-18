import React from 'react'
import '../Styles/Newsletter.scss'
import Dash from '../Assets/dash.png'
import DashReverse from '../Assets/dash reverse.png'

function Newsletter() {
    return (
        <div className="container">
            <div className="dash_image">
                <img src={Dash} alt="dash" />
            </div>
            <div className="dash_image_reverse">
                <img src={DashReverse} alt="dash" />
            </div>
            <div className="text">
                <h2>Stay Tuned</h2>
                <p>Subscribe my newsletter and don’t miss any update on new products, promotions or even career events.</p>
            </div>
            <form>
                <input type="text" placeholder="ENTER YOUR EMAIL ADDRESS" />
                <button type="submit">Suscribe to newsletter</button>
                <label>
                    <input type="checkbox" required></input>
                    I read and accept the privacy policy.
                </label>
            </form>
        </div>
    )
}

export default Newsletter
