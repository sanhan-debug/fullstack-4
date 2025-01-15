import React from 'react'
import style from '../Hero/style.module.css'


function Hero() {
  return (
    <>
   <div className={style.container}>
   <div className={style.text}>
   <h1 className={style.h1}>Shop With Us</h1>
    <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
    <a href="" className={style.button1}>SHOP NOW</a>
    <button className={style.button2} >CLUB MEMBERS</button>
   </div>
   </div>
    </>
  )
}

export default Hero