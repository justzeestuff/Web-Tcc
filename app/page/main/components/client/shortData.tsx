"use client"
import { useState } from 'react'

const ShortData = ({ style = "" }) => {
    const [data, setdata] = useState({
        point: 0,
        label: 'მონაცემი'
    })

    return (
        <section className={style} >
            <p>{data.point}</p>
            <p>{data.label}</p>
        </section>
    )
}

export default ShortData