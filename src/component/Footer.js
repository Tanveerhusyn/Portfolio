import React from "react"
import logo1 from "./pic/f_logo.png"
import DP from './pic/DP.jpg'
import { Avatar } from "@mui/material"

const Footer = () => {
  return (
    <>
      <footer>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <div >
            <Avatar style={{width:'70px',height:'70px'}} src={DP} alt='' />
          </div>
          <p>©Tanveer Hussain.</p>

        </div>
      </footer>
    </>
  )
}

export default Footer
