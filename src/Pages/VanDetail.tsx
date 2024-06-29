import {Link} from "react-router-dom"
import van from "./../assets/van.png"
const VanDetail = () => {
  return (
    <div className="detail-container">
        <button><Link to="/vans">⬅️ <span id="back">Back to all vans</span></Link></button>
        <div className="container">
            <img src={van} alt="" />
            <div className="detail">
            <button style={{backgroundColor: "#E17654"}}>Simple</button>
            <h2>Modest Explorer</h2>
            <p id="price">$60/day</p>
            <p id="description">The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer.</p>
            <button id="rent">Rent this van</button>
            </div>
        </div>
    </div>
  )
}

export default VanDetail