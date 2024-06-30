import van from "./../../assets/van.png"
const HostVans = () => {
  return (
    <div className="listed-vans">
            <div className="head">
                <p>Your Listed Vans</p>
                <p>View all</p>
            </div>
            <div className="van-box verti-center">
                <img src={van} alt="van" />
                <div className="van-explain">
                    <p>Modest Explorer</p>
                    <p>$60/day</p>
                </div>
                <p>Edit</p>
            </div>
            <div className="van-box verti-center">
                <img src={van} alt="van" />
                <div className="van-explain">
                    <p>Modest Explorer</p>
                    <p>$60/day</p>
                </div>
                <p>Edit</p>
            </div>
            <div className="van-box verti-center">
                <img src={van} alt="van" />
                <div className="van-explain">
                    <p>Modest Explorer</p>
                    <p>$60/day</p>
                </div>
                <p>Edit</p>
            </div>
        </div>
  )
}

export default HostVans