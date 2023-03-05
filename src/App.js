import { useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Map from "./components/Map";

function App() {
  const [quakeList, setQuakeList] = useState([])
  const [loading, setLoading] = useState(false)
  const [magLimits, setMagLimits] = useState({
    minLimit: 0,
    maxLimit: 10
  })

  useEffect (() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch('https://api.orhanaydogdu.com.tr/deprem/kandilli/live')
      const data = await res.json()

      setQuakeList(data.result)
      setLoading(false)
    }

    fetchData()
  }, [])

  const handleMinMag = (minMag) => {
    minMag > magLimits.maxLimit ? setMagLimits({minLimit: minMag, maxLimit: minMag}) : setMagLimits({...magLimits, minLimit: minMag})
  }
  const handleMaxMag = (maxMag) => {
    maxMag < magLimits.minLimit ? setMagLimits({maxLimit: maxMag, minLimit: maxMag}) : setMagLimits({...magLimits, maxLimit: maxMag})
  }

  return (
    <div>
      <Header handleMinChange={handleMinMag} handleMaxChange={handleMaxMag} />
      { loading ? <Loader /> : <Map quakeList={quakeList} minMagnitude={magLimits.minLimit} maxMagnitude={magLimits.maxLimit} />} 
    </div>
  );
}

export default App;