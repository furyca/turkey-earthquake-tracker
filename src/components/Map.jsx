import GoogleMapReact from 'google-map-react';
import { memo, useState } from 'react';
import uuid from 'react-uuid';
import LocationIcon from './LocationIcon';
import LocationInfoBox from './LocationInfoBox';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

/*
	"title": "YENIKOY ACIKLARI-TEKIRDAG (MARMARA DENIZI)", -> kandilli deprem başlığı
	"date": "2023.02.13 06:33:53", -> kandilli deprem zaman damgası
	"mag": 3, -> Deprem büyüklüğü
	"depth": 14.8, -> Depremin kaç km yerin derinliğinde olduğu
	"geojson": { -> GeoJson Datası
		"type": "Point",
		"coordinates": [27.4988, 40.77]
	},
	"location_properties": {
		"closestCity": { 
			"name": "Tekirdağ" -> En yakın il sınırı
		},
		"epiCenter": {
			"name": "?" -> Depremin epicenterı
		},
	},
	"rev": null, -> Kandilli revize bilgisi
	"date_stamp": "2023-02-13",
	"date_day": "2023-02-13",
	"date_hour": "06:33:53",
	"timestamp": "1676266433",
	"location_tz": "Europe/Istanbul"

*/

const center = {
  lat: 38.75,
  lng: 36
};
const Map = ( {quakeList} ) => {
  const [locationInfo, setLocationInfo] = useState(null)


  const markers = quakeList.map(quake => {
    return <LocationIcon 
      key={uuid()}
      lat={quake.geojson.coordinates[1]}
      lng={quake.geojson.coordinates[0]}
      onClick={() => setLocationInfo({quake})}
      />
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
            { locationInfo && <LocationInfoBox info={locationInfo} />} 
            
        </div>
      
  )
}

export default memo(Map)
