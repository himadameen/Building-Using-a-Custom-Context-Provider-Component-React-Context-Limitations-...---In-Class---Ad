import React from 'react'
import { useLocation } from "react-router-dom";
const About = () => {

  const location = useLocation();

  return (
      <>
        <div>You are on the about page</div>
        <a data-test-id="location-display">{location.pathname}</a>
    </>
  )
}

export default About