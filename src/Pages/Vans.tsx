import { useEffect, useState } from "react";
import "./../App.css";
import "../../server.js";
import {VansType} from "../types.ts"
import {Link, useSearchParams} from "react-router-dom"

const Vans: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [vans, setVans] = useState<VansType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  type Error = {
    message: string;
    name: string;
    stack?: string;
  };
  
  const handleClick = (key:string, name: (string | null)) =>{
    setSearchParams((prevParams) =>{
      if(name === null) prevParams.delete(key)
        else{
            prevParams.set(key, name);
          }
      return prevParams
    })
  } 
  
  // const handleClick = (event:React.MouseEvent<HTMLButtonElement>) =>{
  //   const {value} = event.currentTarget;
  //   setSearchParams({type: value.toLowerCase()});
  // } 

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Received non-JSON response");
        }
        const data = await response.json();
        setVans(data.vans);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchVans();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const filteredVans = typeFilter ? vans.filter((van) =>{
    return van.type === typeFilter;
  }) : vans;
  return (
    <div className="vans-container">
      <h2>Explore our van options</h2>
      <div className="filters flex">
        <div className="buttons flex">
          <button onClick={() => handleClick("type","simple")} style={typeFilter === "simple" ? {backgroundColor: "#E17654", color: "white" } : {}} >Simple</button>
          <button onClick={() => handleClick("type","luxury")} style={typeFilter === "luxury" ? {backgroundColor: "#161616", color: "white" } : {}}>Luxury</button>
          <button onClick={() => handleClick("type","rugged")} style={typeFilter === "rugged" ? {backgroundColor: "#115E59", color: "white" } : {}}>Rugged</button>
          {/* <button onClick={handleClick} value="simple">Simple</button>
          <button onClick={handleClick} value="luxury">Luxury</button>
          <button onClick={handleClick} value="rugged">Rugged</button> */}
        </div>
        {typeFilter && <button id="clear" onClick={() => handleClick("type",null)}>Clear list</button>}
      </div>
      <div className="actual-van-container verti-center">
        {filteredVans.map((van) => {
          let backgroundColor:string = "";
          if (van.type === "simple") {
            backgroundColor = "#E17654";
          } else if (van.type === "rugged") {
            backgroundColor = "#115E59";
          } else {
            backgroundColor = "#161616";
          }
          return (
            <div className="van" key={van.id}>
              <Link to={van.id} state={{search: searchParams.toString(), type: typeFilter}}>
                <img src={van.imageUrl} alt={van.name} />
                <div className="item-money flex">
                  <p>{van.name}</p>
                  <p>${van.price}/day</p>
                </div>
                <button style={{backgroundColor}}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vans;