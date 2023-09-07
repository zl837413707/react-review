import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function APP() {

  const [item, setItem] = useState([])

  useEffect(() => {
    axios.get('test.json').then((res) => {
      setItem([...res.data.data.films])

    })
  }, [])
  return (
    <div>
      <ul>
        {
          item.map((item) => {
            return <li key={item.filmId}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
}
