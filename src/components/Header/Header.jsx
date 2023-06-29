import style from './Header.module.scss'

const Header = ( { handleMaxChange, handleMinChange } ) => {
  const handleMinLimit = (e) => {
    handleMinChange(+e.target.value)

    if (document.getElementById('max-magnitude').value < +e.target.value) {
      document.getElementById('max-magnitude').value = +e.target.value
    }
  }

  const handleMaxLimit = (e) => {
    handleMaxChange(+e.target.value)

    if (document.getElementById('min-magnitude').value > +e.target.value) {
      document.getElementById('min-magnitude').value = +e.target.value
    }
  }
  
  return (
    <header>
      <h2>Türkiye Deprem Haritası</h2>
      <div className={style.minContainer}>
        <label htmlFor="min-magnitude">Asgari Büyüklük</label>
        <select id="min-magnitude" name="min-magnitude" onChange={handleMinLimit} defaultValue='0'>
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
      </div>
      <div className={style.maxContainer}>
        <label htmlFor="max-magnitude">Azami Büyüklük</label>
        <select id="max-magnitude" name="max-magnitude" onChange={handleMaxLimit} defaultValue='10'>
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
          <option value="10">---</option>
        </select>
      </div>
    </header>
  )
}

export default Header