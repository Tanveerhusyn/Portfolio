import React from "react"
import './card.css'
const Card = (props) => {
  return (
    <>
      <div className='card_new'>
        <img src={props.image} alt='' style={{height:'80px',width:'auto'}} />
        <h2>{props.title}</h2>
        
        
      </div>
    </>
  )
}

export default Card
