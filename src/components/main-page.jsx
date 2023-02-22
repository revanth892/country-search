import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import Header from "./header";
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
        <Header />
        </>
    )
}
export default Mainpage;