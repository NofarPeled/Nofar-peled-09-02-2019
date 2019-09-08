//REACT
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//COMPONET
import LocationPreview from './LocationPreview'

const LocationList = (props) => {
    const locationsList = props.favoriteLocations.map(location => {
        return (
            <li key = { location.id }>
                <Link to = {`/${location.location.city}`}>
                    <LocationPreview 
                        location = { location }
                    />
                </Link>
            </li>
        )
    })

    return (
        <section className = "favorite-location-list-cmp">
            <ul className = "clean-list flex">
                { locationsList }
            </ul>
        </section>
    )
} 

const mapStateToProps = ({LocationReducer}) => {
    const { favoriteLocations } = LocationReducer;
  
    return {
      favoriteLocations
    }
}
  
export default connect(mapStateToProps)(LocationList)