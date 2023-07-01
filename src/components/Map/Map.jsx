import GoogleMapReact from 'google-map-react';
import { memo, useState } from 'react';
import uuid from 'react-uuid';
import LocationIcon from '../LocationIcon/LocationIcon';
import LocationInfoBox from '../LocationInfoBox/LocationInfoBox';
import style from './Map.module.scss'

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const center = {
  lat: 38.75,
  lng: 36
};

const mapOptions = {
  disableDefaultUI: true
};

const Map = ( {quakeList, minMagnitude, maxMagnitude} ) => {
  const [locationInfo, setLocationInfo] = useState(null)
  

  const markers = quakeList.map(quake => {
    return quake.mag >= minMagnitude && quake.mag <= maxMagnitude && 
    <LocationIcon 
      key={uuid()}
      lat={quake.geojson.coordinates[1]}
      lng={quake.geojson.coordinates[0]}
      onClick={() => setLocationInfo({quake})}
    />
  })

  return (
        <div className={style.map}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey}}
                center={center}
                zoom={6}
                options={mapOptions}
            >
              {markers}
            </GoogleMapReact>
            { locationInfo && <LocationInfoBox info={locationInfo} />} 
            
        </div>
      
  )
}

export default memo(Map)
