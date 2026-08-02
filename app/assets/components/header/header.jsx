import React from 'react'
import style from '../header/style.module.css'

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerWrap}>
        <div className={style.title}>
          <a href="" />
          <section>
            <p>Tbilisi Cup</p>
            <p>Tbilisi Challange cup stats</p>
          </section>
        </div>
        <nav className={style.nav}>
          <ul>
            <li><a href="#table">Table</a></li>
            <li><a href="#scorers">Scorers</a></li>
            <li><a href="#fixtures">Fixtures</a></li>
            <li><a href="#compare">Compare</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header