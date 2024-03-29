import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import main from '../pic/main.png'
import { Avatar, IconButton } from "@mui/material"
import { Email, Facebook, GitHub, Phone, Twitter, YouTube } from "@mui/icons-material"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' style={{marginBottom:'80px'}} id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  {/* <img src={contact1} alt='' /> */}
                </div>
                <div className='details'>
                  <h1>Tanveer Hussain</h1>
                  <p style={{display:'flex',alignItems:'center',margin:"10px"}}><Phone/>+923085135289</p>
                  <p style={{display:'flex',alignItems:'center',margin:"10px"}}><Email/> Tanveerhussain465@gmail.com</p> <br />
                  <span>FIND WITH ON</span>
                 <div className="main-cont">
                  <div className="single-cont">
                     <a href="http://github.com/Tanveerhusyn" target="_blank">
                      <IconButton>
                      <GitHub style={{width:'40px',height:'40px'}} />
                      </IconButton>
                      </a>
                      <a href="https://twitter.com/Tanveer465" target="_blank">

                      <IconButton>
                      <YouTube style={{width:'40px',height:'40px'}}/>
                      </IconButton>
                      </a>
                      <a href="https://twitter.com/Tanveer465" target="_blank">

                      <IconButton>
                      <Facebook style={{width:'40px',height:'40px'}}/>
                      </IconButton>
                      </a>
                      <a href="https://twitter.com/Tanveer465" target="_blank">

                      <IconButton>
                      <Twitter style={{width:'40px',height:'40px'}}/>
                      </IconButton>
                      </a>
                    
                  </div>
                 </div>
                </div>
              </div>
            </div>

            {/* <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
