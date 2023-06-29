import style from './LocationInfoBox.module.scss'

const LocationInfoBox = ( { info } ) => {
  return (        
    <div className={style.locationInfoBox}>
        <h5>{info.quake.title}</h5>
        <ul>
            <li><b>Tarih: </b> <b>{info.quake.date}</b> </li>
            <li><b>Büyüklük: </b> {info.quake.mag}</li>
            <li><b>Derinlik: </b> {info.quake.depth} km</li>
            <li><b>Konum: </b> {info.quake.geojson.coordinates[0].toFixed(2)} - {info.quake.geojson.coordinates[1].toFixed(2)}</li>
            <li><b>En Yakın Şehir Merkezi: </b> {info.quake.location_properties.closestCity.name}</li>
            <li><b>Merkez Üssü: </b> {info.quake.location_properties.epiCenter.name}</li>
        </ul>
    </div>
  )
}

export default LocationInfoBox