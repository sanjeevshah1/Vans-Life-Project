import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { VansType } from "../types.js";
import "./../../server.js";

const VanDetail = () => {
  const { id } = useParams<{id: string}>();
  const [vanDetail, setVanDetail] = useState<VansType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        
        const response = await fetch("/api/vans");
        if (!response.ok) {
          throw new Error("Network problem");
        }
        const data = await response.json();
        if (!id) {
            throw new Error("Invalid van ID");
          }
        const vanId:number = parseInt(id);
        setVanDetail(data.vans[vanId - 1]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) {
    return <div>Loading.......</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!vanDetail) {
    return <div>No van details available.</div>;
  }

  return (
    <div className="detail-container">
      <button>
        <Link to="/vans">
          ⬅️ <span id="back">Back to all vans</span>
        </Link>
      </button>
      <div className="container">
        <img src={vanDetail.imageUrl} alt={vanDetail.name} />
        <div className="detail">
          <button style={{ backgroundColor: "#E17654" }}>{vanDetail.type}</button>
          <h2>{vanDetail.name}</h2>
          <p id="price">${vanDetail.price}/day</p>
          <p id="description">{vanDetail.description}</p>
          <button id="rent">Rent this van</button>
        </div>
      </div>
    </div>
  );
};

export default VanDetail;