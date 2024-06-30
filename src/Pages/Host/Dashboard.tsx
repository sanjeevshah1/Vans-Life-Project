import Star from "./../../assets/star.png"
import van from "./../../assets/van.png"
const Dashboard = () => {
 return(
    <div className="dashboard-container">
        <div className="welcome flex verti-center">
          <div className="welcome-first flex column">
            <h2>Welcome!</h2>
            <p>Income last <span id="days">30 days</span></p>
            <p id="rate">$2,260</p>
          </div>
          <div className="welcome-second">
            <p>Details</p>
          </div>
        </div>
        <div className="review flex verti-center">
            <p>Review score</p>
            <img src={Star} alt="star-logo" id="star"/>
            <p><b>5.0</b>/5</p>
            <p>Details</p>
        </div>
        <div className="listed-vans">
            <div className="head">
                <p>Your Listed Vans</p>
                <p>View all</p>
            </div>
            <div className="van-box">
                <img src={van} alt="van" />
                <div className="van-explain">
                    <p>Modest Explorer</p>
                    <p>$60/day</p>
                </div>
                <p>Edit</p>
            </div>
            <div className="van-box">
                <img src={van} alt="van" />
                <div className="van-explain">
                    <p>Modest Explorer</p>
                    <p>$60/day</p>
                </div>
                <p>Edit</p>
            </div>
            <div className="van-box">
                <img src={van} alt="van" />
                <div className="van-explain">
                    <p>Modest Explorer</p>
                    <p>$60/day</p>
                </div>
                <p>Edit</p>
            </div>
        </div>
    </div>
 )
}

export default Dashboard