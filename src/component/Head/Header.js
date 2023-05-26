import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"
import { IconButton } from "@mui/material"
import { GitHub, LinkedIn } from "@mui/icons-material"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'  >
            {/* <img src={logo} alt='' /> */}
            <a href="http://github.com/Tanveerhusyn" style={{margin:'2px'}} target="_blank">
                      <IconButton>
                      <GitHub style={{width:'40px',height:'40px'}} />
                      </IconButton>
                      </a>
            <a href="https://www.linkedin.com/in/tanveerhusyn/" style={{margin:'2px'}} target="_blank">
                      <IconButton>
                      <LinkedIn style={{width:'40px',height:'40px'}} />
                      </IconButton>
                      </a>
            <a href="https://www.upwork.com/freelancers/~01bd4dafc47b34b510" style={{margin:'2px'}} target="_blank">
                      <IconButton>
                      <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png" style={{width:'38px',height:'38px',filter:'grayscale(100%'}} />
                      </IconButton>
                      </a>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              
              <li>
                <a href='#features'>services</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              <li>
                <a 
                href="https://drive.google.com/file/d/1Vt0_-vGoU5m703LkZJaLt70xiNxtNBBe/view?usp=sharing"
                download='resume'
                target='_blank'
                rel='noreferrer'>resume</a>
              </li>
             
              <li>
                <a href='#contact'>
                <button className='home-btn'>CONTACT</button>
                </a>
              </li>
               
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
