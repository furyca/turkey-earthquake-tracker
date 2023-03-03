import { Icon } from '@iconify/react'

const LocationIcon = ( {lat, lng, onClick} ) => {
  return (
    <div onClick={onClick}>
        <Icon icon="ri:earthquake-fill" className='location-icon' />
    </div>
  )
}

export default LocationIcon