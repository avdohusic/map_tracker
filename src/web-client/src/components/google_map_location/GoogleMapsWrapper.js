import React from 'react';
import { GoogleMap,withGoogleMap,withScriptjs } from 'react-google-maps';

const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
    const {onMapMounted, ...otherProps} = props;
    return <GoogleMap {...otherProps} ref={c => {
        onMapMounted && onMapMounted(c)
    }}>{props.children}</GoogleMap>
}));

export default GoogleMapsWrapper