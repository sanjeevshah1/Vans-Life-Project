import { useEffect, useState } from "react";
import "./../../server.js"
import { VansType } from "../types.js";

type ErrorType = {
    message: string;
    name: string;
    stack?: string;
  };
export default function Fetch(url: string): [VansType[] | null, ErrorType | null, boolean] {
    const [data, setData] = useState<VansType[] | null>(null);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(()=>{
    const fetchData = async (url: string) => {
        try{
            setLoading(true);
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            const data:VansType[] = await response.json();
            setData(data);
        }catch(error){
            setError(error as ErrorType);
        }finally{
            setLoading(false);
        }
        fetchData(url);
    }
   },[url]);
   return [data,error,loading]
}
