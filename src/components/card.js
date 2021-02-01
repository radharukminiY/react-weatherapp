import React from 'react'

export default function Card(props){

  function handleClick(){
    alert(props.weather.moreDetails);
  }

  return(
    <div className= "card">
    <h3>{props.weather.weekDay}</h3>
     <h5>{props.weather.date} {props.weather.year}</h5>
     <img src={props.weather.url} alt="weather-image"/>
     <h6>{props.weather.temperature}</h6>
     <h5>{props.weather.tempInWords}</h5>
     <h4 onClick={handleClick} style={{cursor:"pointer" }}>More Details</h4>
     </div>
  )
}
