"use client"
import { useState } from 'react'

const Points = ({style = ""}) => {
    const [points, setPoints] = useState({
        leftTeam: 0,
        rightTeam: 0
    })

  return (
    <p className={style} >
        {points.leftTeam} : {points.rightTeam}
    </p>
  )
}

export default Points