import React from "react"
import './card.css'
const Card = (props) => {
  return (
    <>
      <div className='box_new btn_shadow' style={{margin:'20px'}}>
        <img src={props.image} alt='' style={{height:'80px',width:'auto'}} />
        <h2>{props.title}</h2>
        
        
      </div>
    </>
  )
}

export default Card
