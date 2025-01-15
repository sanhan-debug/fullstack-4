import React from 'react'
import style from '../Navbar/style.module.css'

function Navbar() {

  return (
    <div className={style.container}>
        <div className={style.logo}>
           <a href="/"><h1>Selling</h1></a>
        </div>
        <div className={style.links}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/addform">AddPage</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blogs</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Info</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar