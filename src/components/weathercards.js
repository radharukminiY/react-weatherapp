import React,{Component} from 'react';
import  Card from './card';
import Data from '../data/weather-info';
//import CardDetails from './carddetails';
//import {render} from '@testing-library/react';



class WeatherCards extends Component{
  state={
    hideMoreDetails:true
  }
  render(){
    return(
      <div>
      <div className="weather-cards">
      {Data.map(weather => {
        return(
          <Card key={weather.id} weather={weather} hide={this.state.hideMoreDetails} />
        )
      })}
      </div>
    </div>
  )
  }
}
export default WeatherCards;
