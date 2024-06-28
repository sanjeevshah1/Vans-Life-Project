import {Link} from "react-router-dom"
import bck from "./../assets/about_background.png"
import "./../App.css"
const About = () => {
  return (
    <>
        <img src={bck} className="about-background" alt="" />
        <div className="about-container">
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)

                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels</p>
            <div className="msg">
                <p>Your destination is waiting. <br />
                Your van is ready.</p>
                <button id="explore">Explore our vans</button>
            </div>
        </div>
     </>
  )
}

export default About