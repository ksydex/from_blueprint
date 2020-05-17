import View from './index.view'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default () => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const r = await axios.get('api/WeatherForecast')
      setWeather(r.data)
    }

    fetchData()
  }, [])

  return <View {...{ weather, setWeather }}/>
}