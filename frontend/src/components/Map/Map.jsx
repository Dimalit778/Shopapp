import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './map.css';

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCqShQ93RWqJUH1hJj0rFCNxy_XobmWa0M">
      <GoogleMap
        mapContainerClassName="map_container "
        center={center}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
