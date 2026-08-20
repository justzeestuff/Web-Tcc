// import React from 'react'
import style from '../description/style.module.css'

const AboutNav = ({title="", text=""}) => {
  return (
    <section className={style.aboutNavigation} >
      <p>{title}</p>
      <p>{text}</p>
    </section>
  )
}

export default AboutNav