import React from 'react'
import Link from 'next/link'

import style from './style.module.css'

const page = () => {
  return (
    <main className={style.main} >
      <div className={style.shortData} >
        <article className={style.aboutPage} >  
          <section>
            <p>ახალგაზრდული საფეხბურთო ტურნირი • თბილისი</p>
            <div>
              <h1>Tbilisi</h1>
              <h1>Challenge</h1>
              <h1>Cup</h1>
            </div>
            <p>
              კეთილი იყოს თქვენი მობრძანება Tbilisi Challenge Cup-ის ოფიციალურ ვებსაიტზე. აქ შეგიძლიათ იხილოთ ტურნირის ცხრილები, მატჩების განრიგი, სიახლეები და საკონტაქტო ინფორმაცია.
            </p>
          </section>
          <nav>
            <ul>
              <li>
                <Link href={"page/main"} >ცხრილების ნახვა</Link>
              </li>
              <li>
                <Link href={"page/main"} >მატჩების კალენდარი</Link>
              </li>
            </ul>
          </nav>
        </article>
        <article className={style.data}>
          <div>
            <p>გამორჩეული მატჩი</p>
            <p>2009 წლიანები</p>
          </div>
          
        </article>
      </div>
    </main> 
  )
}

export default page