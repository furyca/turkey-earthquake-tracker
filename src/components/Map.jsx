import GoogleMapReact from 'google-map-react';
import { memo } from 'react';
import LocationIcon from './LocationIcon';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const center = {
  lat: 38.75,
  lng: 36
};
const Map = ( {quakeList} ) => {
  console.log(quakeList);
  const markers = quakeList.map(quake => {
    return <LocationIcon lat={quake.geojson.coordinates[1]} lng={quake.geojson.coordinates[0]} />
  })

  return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey}}
                center={center}
                zoom={6}
            >
              {markers}
            </GoogleMapReact>
        </div>
      
  )
}

export default memo(Map)
