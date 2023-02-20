import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
const url="https://restcountries.com/v2/all";

const Mainpage=()=>
{
    const[data,setData]=useState([]);
    const[err,setError]=useState("");
    const fetchdata= ()=>{
        axios.get(url)
          .then(res=>setData(res.data))
          .catch(error=>setError(error.message))
    };
    useEffect(()=>{fetchdata();},[]);
    console.log(data);
    return(
        <>
        <p>this is mainpage</p>
        </>
    )
}
export default Mainpage;