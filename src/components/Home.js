import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
const Home = () => {

  const location = useLocation();
  console.log(location);
  return (
    <>
    <div>You are home</div>
    <a data-testid="location-display">{location.pathname}</a>
    
    </>
  )
}

export default Home