import { Icon } from '@iconify/react'
import style from './LocationIcon.module.scss'


const LocationIcon = ( {lat, lng, onClick} ) => {
  return (
    <div onClick={onClick} className={style.locationIcon} >
        <Icon icon="ri:earthquake-fill" className={style.locationIcon} />
    </div>
  )
}

export default LocationIcon