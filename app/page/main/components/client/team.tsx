"use client"
import { useState } from 'react'

const Team = ({style} : {style : string}) => {
  const [team, setTeam] = useState({
    name: "გუნდის სახელი",
    icon: ""
  })
  return (
    <section className={style}  >
      <img src={team.icon} alt="" />
      <p>{team.name}</p>
    </section>
  )
}

export default Team