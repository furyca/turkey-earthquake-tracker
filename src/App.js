import { useEffect, useState } from "react";
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
      //console.log(data.result[0].geojson.coordinates);
    }
    fetchData()
  }, [])

  return (
    <div>
      { !loading ? <Map quakeList={quakeList} /> : <h1>Loading</h1>}
    </div>
  );
}

export default App;
