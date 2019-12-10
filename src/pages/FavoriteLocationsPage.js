import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadFavoriteLocations } from '../store/actions/LocationsAction';
import LocationsList from '../components/LocationsList';

class FavoriteLocationsPage extends Component {

    async componentDidMount(){
        this.getFavoriteLocations();
    }

    getFavoriteLocations = async() => {
        const { dispatch } = this.props;
        dispatch(loadFavoriteLocations());
    }

    render() {
        const {favoriteLocations} = this.props;
        return (
            <section className = "favorite-locations-page">
                <div className = "favorite-locations-header flex">
                    <img src = {require('../assets/weather-page-wallpaper.jpg')} className = "favorite-locations-img" alt = ""/>
                    <h2 className = "favorite-location-header">{!favoriteLocations.length ? 'You haven\'t added locations to Favorite' :'Favorite Locatios' }</h2>
                </div>
                <Link to = "/">
                    <div className = "add-location-preview"> 
                        <h1 className = "preview-title">Add New Location +</h1>
                    </div>
                </Link>
                { favoriteLocations.length ? 
                    <LocationsList favoriteLocations = { favoriteLocations } /> 
                    : ""
                }
            </section>
        )
    }
}

const mapStateToProps = ({LocationReducer}) => {
    const { favoriteLocations } = LocationReducer;
  
    return {
      favoriteLocations
    }
}
  
export default connect(mapStateToProps)(FavoriteLocationsPage);