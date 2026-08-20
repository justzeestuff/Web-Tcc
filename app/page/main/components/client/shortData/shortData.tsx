"use client"
import { useState } from 'react'
import style from './style.module.css'

const ShortData = () => {
    const [data, setdata] = useState({
        point: 0,
        label: 'მონაცემი'
    })

    return (
        <section className={style.shortStatistics} >
            <p>{data.point}</p>
            <p>{data.label}</p>
        </section>
    )
}

export default ShortData