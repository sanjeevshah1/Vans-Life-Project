import {Link, NavLink, Outlet, useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { VansType } from "../../types"
// import { useState } from "react"
import "./../../../server.js"
const HostVanDetails = () => {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState<VansType | null>(null)
    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans[0]))
    }, [])
    if(!currentVan) {
        return <div>No van Detail found</div>
    }
  return (
    <div className="host-van-detail-container">
        <button>
        <Link to="host/vans">
          ⬅️ <span id="back">Back to all vans</span>
        </Link>
      </button>
      <div className="host-detail">
        <div className="first-row">
            <img src={currentVan.imageUrl} alt="van" />
            <div className="temp">
                <button style={{ backgroundColor : "#E17654"}}>Simple</button>
                <h2>{currentVan.name}</h2>
                <p id="price">{currentVan?.price}/day</p>
            </div>
        </div>
        <nav className="host-van-detail-nav">
            <NavLink to="/vans/1" className={({isActive}) => isActive? "current-link" : ""}>
                Details
            </NavLink>
            <NavLink to="pricing" className={({isActive}) => isActive? "current-link" : ""}>
                Pricing
            </NavLink>
            <NavLink to="photo" className={({isActive}) => isActive? "current-link" : ""}>
                Photo
            </NavLink>
        </nav>
        <Outlet/>
      </div>
    </div>
  )
}

export default HostVanDetails