import React from 'react';

const LocationFilter = (props) => {
    return (
        <section className = "location-filter-cmp flex">
            <form>
                <input
                    type = "text"
                    onChange = { props.onFilter }
                    placeholder = "Tel Aviv"
                />
                <button onClick = {props.searchLocation}>Search</button>
            </form>
        </section>
    )
}

export default LocationFilter;