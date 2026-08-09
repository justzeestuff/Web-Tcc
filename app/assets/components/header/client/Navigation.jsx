'use client'
import Link from 'next/link'

const Navigation = () => {
    const navigation = [
        {href: 'main' ,label: 'მთავარი'},
        {href: 'table' ,label: 'ცხრილი'},
        {href: 'calendar' ,label: 'კალენდარი'},
        {href: 'news' ,label: 'სიახლეები'},
        {href: 'contact' ,label: 'კონტაქტი'},
    ]
  return (
    navigation.map((nav,i)=>(
        <li key={i} >
            <Link href={ "page/" + nav.href }>
                {nav.label}
            </Link>
        </li>
    ))
  )
}

export default Navigation