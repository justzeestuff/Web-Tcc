// 'use client'
import Link from 'next/link'

import style from './style.module.css'

// cmponents
import Team from './client/team'
import Points from './client/points'
import Description from './client/description'
import ShortData from './client/shortData'

const Page = () => {
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
          <div className={style.bestMatch} >
            <section>
              <p>გამორჩეული მატჩი</p>
              <p>2009 წლიანები</p>
            </section>
            <div>
              <Team style={style.team} />
              <Points style={style.teamPoints} />
              <Team style={style.team} />   
            </div>
            <Description style='' />
          </div>
          <div className={style.secondaryData} >
            <div>
              <ShortData/>
              <ShortData/>
            </div>
            <div>
              <ShortData/>
              <ShortData/>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

export default Page