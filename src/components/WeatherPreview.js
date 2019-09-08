//REACT
import React from 'react';
import { connect } from 'react-redux';

const WeatherPreview = (props) => {
    
    const { currWeather } = props
    const {isFahrenheit} = props

    return (
        <section className = "weather-preview-cmp">
            <h2 className = "weather-date">
                {currWeather.day.name} {currWeather.date}
            </h2>
            <h3 className = "weather-temp">
                {(isFahrenheit) ? 
                `${currWeather.maxTemp.fTemp} - ${currWeather.minTemp.fTemp} `
                : `${currWeather.maxTemp.cTemp} - ${currWeather.minTemp.cTemp}`
                }
            </h3>
            <img className = "weather-icon" 
                src = {currWeather.day.icon} alt = ""
            />
            <h3 className = "weather-icon-parse">
                {currWeather.day.iconPhrase}
            </h3>
        </section>

    )
}

const mapStateToProps = ({WeatherReducer}) => {
    const { isFahrenheit } = WeatherReducer;
    return {
        isFahrenheit
    }
}
  
export default connect(mapStateToProps)(WeatherPreview)