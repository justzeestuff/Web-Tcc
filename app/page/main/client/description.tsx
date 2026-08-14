"use client"
import { useState } from 'react'

const Description = ({style} : {style : string}) => {
    const [description, setDescription] = useState("მოკლე დახასიათება მატჩის...")

  return (
    <p className={style} > {description} </p>
  )
}

export default Description