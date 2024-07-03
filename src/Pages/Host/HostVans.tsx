import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { VansType } from "../../types.js"
import "./../../../server.js"
const HostVans = () => {
    const [hostVansData ,setHostVansData] = useState< VansType[]| null>(null); 
    useEffect(() =>{
            const fetchHostVans = async () =>{
                try{
                    const response = await fetch("/api/host/vans")
                    const data = await response.json();
                    setHostVansData(data.vans)
                }catch(error){;
                    console.error("error found",error)
                }
            }
            fetchHostVans()
        }
        ,[]);
        if(!hostVansData){
            return <div>No vans data found</div>
        }
  return (
    <div className="listed-vans">
            <div className="head">
                <p>Your Listed Vans</p>
            </div>
            {hostVansData.map((van) => (
                <Link to={van.id} key={van.id}>
                <div className="van-box verti-center">
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="van-explain">
                        <p>{van.name}</p>
                        <p>{van.price}/day</p>
                    </div>
                    <p>Edit</p>
                </div>
            </Link>
            ) )}
        </div>
  )
}
export default HostVans