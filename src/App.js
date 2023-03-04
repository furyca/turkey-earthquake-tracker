import { useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Map from "./components/Map";

function App() {
  const [quakeList, setQuakeList] = useState([])
  const [loading, setLoading] = useState(false)

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

  return (
    <div>
      <Header />
      { !loading ? <Map quakeList={quakeList} /> : <Loader />} 
    </div>
  );
}

export default App;