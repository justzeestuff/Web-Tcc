'use client'
import React, { useEffect, useState, useRef } from 'react'
import style from '../cursor/style.module.css'

const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({x: 0 , y: 0});

  useEffect(()=>{
    const width = (cursor.current?.getBoundingClientRect().width ?? 0) / 2;
    const height = (cursor.current?.getBoundingClientRect().height ?? 0) / 2;

    const movementHandler = (e: MouseEvent) => setPos({x: e.clientX - width, y: e.clientY - height})
  
    window.addEventListener('mousemove', movementHandler)

    return () => window.removeEventListener('mousemove', movementHandler)
  },[])

  return <div className={style.cursor} 
              ref={cursor}
              style={{left: `${pos.x}px`, top: `${pos.y}px`}} />
}

export default Cursor