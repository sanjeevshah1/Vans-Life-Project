import {Link, Outlet} from "react-router-dom"
const HostLayout = () => {
  return (
    <>
     <div className="host-nav-bar">
        <Link to="dashboard">Dashboard</Link>
        <Link to="income">Income</Link>
        <Link to="vans">Vans</Link>
        <Link to="reviews">Reviews</Link>
    </div>
    <Outlet/>
   </>
  )
}

export default HostLayout