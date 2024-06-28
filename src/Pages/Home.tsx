import {Link} from "react-router-dom"
import "./../App.css"
const Home = () => {
  return (
   <>
        <div className="intro-container both-center">
            <div className="intro">
                <h2>You got the travel plans,
                    we  <br /> got the travel vans.</h2>
                <p>Add adventure to your life by joining the #vanlife movement.<br />  Rent the perfect van to make your perfect road trip.</p>
                <button id="find">Find your van</button>
            </div>
        </div>
        <div className="end both-center">
            <footer>
                <p>Ⓒ 2022 #VANLIFE</p>
            </footer>
        </div>
    </>
  )
}

export default Home