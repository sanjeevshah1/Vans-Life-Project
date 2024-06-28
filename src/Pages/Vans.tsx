import "./../App.css"
import van from "./../assets/van.png"
const Vans = () => {
  return (
   <div className="vans-container">
      <h2>Explore our van options</h2>
      <div className="filters flex">
            <div className="buttons flex">
              <button>Simple</button>
              <button>Luxury</button>
              <button>Rugged</button>
            </div>
            <button id="clear">Clear list</button>
          </div>
      <div className="actual-van-container">
        <div className="van">
          <img src={van} alt="" />
          <div className="item-money">
            <p>Modest Explorer</p>
            <p>$60/day</p>
          </div>
          <button>Simple</button>
        </div>
        <div className="van">
          <img src={van} alt="" />
          <div className="item-money">
            <p>Modest Explorer</p>
            <p>$60/day</p>
          </div>
          <button>Rugged</button>
        </div>
        <div className="van">
          <img src={van} alt="" />
          <div className="item-money">
            <p>Modest Explorer</p>
            <p>$60/day</p>
          </div>
          <button>Simple</button>
        </div>
        <div className="van">
          <img src={van} alt="" />
          <div className="item-money">
            <p>Modest Explorer</p>
            <p>$60/day</p>
          </div>
          <button>Luxury</button>
        </div>
        <div className="van">
          <img src={van} alt="" />
          <div className="item-money">
            <p>Modest Explorer</p>
            <p>$60/day</p>
          </div>
          <button>Simple</button>
        </div>
        <div className="van">
          <img src={van} alt="" />
          <div className="item-money">
            <p>Modest Explorer</p>
            <p>$60/day</p>
          </div>
          <button>Luxury</button>
        </div>
      </div>
   </div>
  )
}

export default Vans