import React from 'react';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

import GoogleMapsWrapper from './GoogleMapsWrapper.js';
import CustomMarker from './CustomMarker';

import Config from '../../config/config';

export default class GoogleMapLocation extends React.Component {

    state = {
        markers: [],
        info: "",
        url: Config.backendUrl
    };

    _markerUrl(){
        return this.state.url + 'markers';
    }

    componentDidMount() {
        fetch(this._markerUrl())
            .then(res => res.json())
            .then(data => {
                this.setState({markers: data});
            });
    };

    render() {
        return (
            <GoogleMapsWrapper
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgysTNTAH4TE0tkElcyyyr9qRBTeu3_fQ&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{height: `100%`}}/>}
                defaultZoom={3}
                defaultCenter={{lat: 43.867825, lng: 18.790386}}>
                <MarkerClusterer
                    averageCenter
                    enableRetinaIcons
                    gridSize={60}>
                    {this.state.markers.map(marker => (
                        <CustomMarker
                            key={marker._id}
                            position={{lat: marker.location.coordinates[0], lng: marker.location.coordinates[1]}}
                            title={marker.location.type}
                        />
                    ))}
                </MarkerClusterer>
            </GoogleMapsWrapper>
        )
    }
}