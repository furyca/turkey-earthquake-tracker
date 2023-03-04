import { Icon } from '@iconify/react'

const LocationIcon = ( {lat, lng, onClick} ) => {
  return (
    <div onClick={onClick} className='location-icon' >
        <Icon icon="ri:earthquake-fill" className='location-icon' />
    </div>
  )
}

export default LocationIcon