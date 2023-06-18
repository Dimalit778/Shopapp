import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './map.css';

function MyComponent({ setCoordinates, setBounds, coordinates }) {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCqShQ93RWqJUH1hJj0rFCNxy_XobmWa0M">
      <GoogleMap
        mapContainerClassName="map_container "
        center={coordinates}
        zoom={10}
        options={{
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onChange={(e) => {
          console.log('doooo');
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        <Marker position={coordinates} />
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
