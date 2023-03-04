const LocationInfoBox = ( { info } ) => {
  return (        
    <div className="location-info-box">
        <h5>{info.quake.title}</h5>
        <ul>
            <li><strong>Tarih: </strong> <strong>{info.quake.date}</strong> </li>
            <li><strong>Büyüklük: </strong> {info.quake.mag}</li>
            <li><strong>Derinlik: </strong> {info.quake.depth} km</li>
            <li><strong>Konum: </strong> {info.quake.geojson.coordinates[0].toFixed(2)} - {info.quake.geojson.coordinates[1].toFixed(2)}</li>
            <li><strong>En Yakın Şehir Merkezi: </strong> {info.quake.location_properties.closestCity.name}</li>
            <li><strong>Merkez Üssü: </strong> {info.quake.location_properties.epiCenter.name}</li>
        </ul>
    </div>
  )
}

export default LocationInfoBox