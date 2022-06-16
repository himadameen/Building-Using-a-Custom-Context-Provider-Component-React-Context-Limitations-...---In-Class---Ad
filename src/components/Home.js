import React from 'react'
import { useLocation } from "react-router-dom";

const Home = () => {

  const location = useLocation();
 
  return (
    <>
    <div>You are home</div>
    <a>{location.pathname}</a>
    
    </>
  )
}

export default Home