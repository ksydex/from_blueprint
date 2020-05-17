import styles from './index.module.css'

export default function (props) {
  const WeatherList = () => (
    <ul>
      {
        props.weather.map(e => (
          <li className={styles.list}
              key={e.date}>
            <p className={styles.someText}>Температура - {e.temperatureC}</p>
          </li>
        ))
      }
    </ul>
  )

  return (
    <div>
      {props.weather.length === 0 ?
        <p>Loading...</p>
        : <WeatherList/>
      }
    </div>
  )
}