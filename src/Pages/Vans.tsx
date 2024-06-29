import { useEffect, useState } from "react";
import "./../App.css";
import "../../server.js";
import {VansType} from "../types.ts"
const Vans = () => {

  const [vans, setVans] = useState<VansType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch("/api/vans");
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Received non-JSON response");
        }
        const data = await response.json();
        setVans(data.vans);
        console.log(data.vans);
      } catch (error) {
        setError(error);
        console.error(error);
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

  return (
    <div className="vans-container">
      <h2>Explore our van options</h2>
      <div className="filters flex">
        <div className="buttons flex">
          <button>Simple</button>
          <button>Luxury</button>
          <button>Rugged</button>
        </div>
        <button id="clear" onClick={()=>{
          setVans([]);
        }}>Clear list</button>
      </div>
      <div className="actual-van-container">
        {vans.map((van) => {
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
              <img src={van.imageUrl} alt={van.name} />
              <div className="item-money">
                <p>{van.name}</p>
                <p>${van.price}/day</p>
              </div>
              <button style={{backgroundColor}}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vans;
