import React from 'react'
import { useLocation } from 'react-router-dom'

const LocationDisplay = () => {

    
    const location = useLocation();

  return (

    <a data-testid="location-display">{location.pathname}</a>

  )
}

export default LocationDisplay;