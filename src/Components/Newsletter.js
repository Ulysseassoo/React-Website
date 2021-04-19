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
                <h2>Restez connecté !</h2>
                <p>Abonnez-vous à mon infolettre et ne manquez aucune mise à jour sur les nouveaux produits, promotions ou même événements de carrière.</p>
            </div>
            <form>
                <input type="text" placeholder="ENTER YOUR EMAIL ADDRESS" />
                <button type="submit">Suscribe to newsletter</button>
                <label>
                    <input type="checkbox" required></input>
                    J’ai lu et j’accepte la politique de confidentialité.
                </label>
            </form>
        </div>
    )
}

export default Newsletter
