import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box_new btn_shadow'>
        <img src={props.image} alt='' style={{height:'80px',width:'auto'}} />
        <h2>{props.title}</h2>
        
        <a href='/'>
          <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </>
  )
}

export default Card
