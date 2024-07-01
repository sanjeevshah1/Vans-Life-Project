import {NavLink, Outlet} from "react-router-dom"
const HostLayout = () => {
  return (
    <>
     <div className="host-nav-bar flex">
        <NavLink
         to="/host"
         end
        className={({ isActive }) => (isActive ? "current-link" : "")}
        >Dashboard</NavLink>

        <NavLink
         to="income"
         className={({ isActive }) => (isActive ? "current-link" : "")}
         >Income</NavLink>
          
        <NavLink
         to="vans"
         className={({ isActive }) => (isActive ? "current-link" : "")}
         >Vans</NavLink>
         
        <NavLink
         to="reviews"
         className={({ isActive }) => (isActive ? "current-link" : "")}
         >Reviews</NavLink>

    </div>
    <Outlet/>
   </>
  )
}

export default HostLayout