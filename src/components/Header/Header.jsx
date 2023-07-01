import { useRef } from 'react'
import style from './Header.module.scss'

const Header = ( { handleMaxChange, handleMinChange, minLimit, maxLimit } ) => {
  const maxMagnitudeRef = useRef()
  const minMagnitudeRef = useRef()
  
  const handleMinLimit = (e) => {
    handleMinChange(+e.target.value)

    if (+e.target.value > maxMagnitudeRef.current.value) {
      maxMagnitudeRef.current.value = +e.target.value
    }
  }

  const handleMaxLimit = (e) => {
    handleMaxChange(+e.target.value)

    if (+e.target.value < minMagnitudeRef.current.value) {
      minMagnitudeRef.current.value = +e.target.value
    }
  }
  
  return (
    <header>
      <h2>Türkiye Deprem Haritası</h2>
      <div className={style.minContainer}>
        <label>Asgari Büyüklük
          <select onChange={handleMinLimit} defaultValue={minLimit} ref={minMagnitudeRef}>
            <option value="0">---</option>
            <option value="1">1.0</option>
            <option value="2">2.0</option>
            <option value="2.5">2.5</option>
            <option value="3">3.0</option>
            <option value="3.5">3.5</option>
            <option value="4">4.0</option>
            <option value="4.5">4.5</option>
            <option value="5">5.0</option>
            <option value="5.5">5.5</option>
            <option value="6">6.0</option>
            <option value="6.5">6.5</option>
            <option value="7">7.0</option>
            <option value="7.5">7.5</option>
            <option value="8">8.0</option>
            <option value="8.5">8.5</option>
            <option value="9">9.0</option>
            <option value="9.5">9.5</option>
          </select>
        </label>
      </div>
      <div className={style.maxContainer}>
        <label>Azami Büyüklük
          <select onChange={handleMaxLimit} defaultValue={maxLimit} ref={maxMagnitudeRef}>
            <option value="1">1.0</option>
            <option value="2">2.0</option>
            <option value="2.5">2.5</option>
            <option value="3">3.0</option>
            <option value="3.5">3.5</option>
            <option value="4">4.0</option>
            <option value="4.5">4.5</option>
            <option value="5">5.0</option>
            <option value="5.5">5.5</option>
            <option value="6">6.0</option>
            <option value="6.5">6.5</option>
            <option value="7">7.0</option>
            <option value="7.5">7.5</option>
            <option value="8">8.0</option>
            <option value="8.5">8.5</option>
            <option value="9">9.0</option>
            <option value="10">10</option>
          </select>
        </label>
      </div>
    </header>
  )
}

export default Header