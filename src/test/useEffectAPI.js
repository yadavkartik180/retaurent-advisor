import React from 'react'
import { useEffect } from "react";
const UseEffectAPI = () => {
    const API ="https://hn.algolia.com/api/v1/search?query=html"
   const fetchAPI =async (url)=>{
    try {
      const res = await fetch(url);
      const data =await res.json();
      console.log(data)
    } catch (error) {
      console.log(error);
    }
   
   };
   useEffect(()=>{
    fetchAPI(API);
    return (
      <>
      </>
    )
  })
  return (
    <div>
      
    </div>
  )
  }

export default UseEffectAPI;

