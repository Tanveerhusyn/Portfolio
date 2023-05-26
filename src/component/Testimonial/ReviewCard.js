import React from "react"
import './review.css'
const ReviewCard = (props) => {
  return (
    <>
      <div className='card_new_review btn_shadow' style={{margin:'20px',background:'white'}}>
        <img src={props.image} alt=''   />
 
      </div>
    </>
  )
}

export default ReviewCard
