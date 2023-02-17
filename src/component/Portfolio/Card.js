import { GitHub,YouTube } from "@mui/icons-material";
import { Link } from "@mui/material";
import React, { useState } from "react"
import ReactPlayer from 'react-player/youtube'

const Card = (props) => {
  const [modal, setModal] = useState(false)
  const urll= 'https://www.youtube.com/watch?v=UrHHrQiUtEg';
  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          {/* <img src={props.image} alt='' onClick={toggleModal} /> */
          
          <ReactPlayer
              className="video-player"
              playing
              height="250px"
              width="100%"
              pip
              controls="false"
              muted
              loop
              url={props.url}
            />
          
          }
        </div>
        <div className='category d_flex'>
          <span >{props.category}</span>
         
         
        </div>
        <div className='title'>
          <h2 >{props.title}</h2>
          <a href='#popup' >
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
        <div className='rate'>
            <a href={props.githubUrl} rel="noopener noreferrer" target="_blank" className='btn_shadow '>
              <GitHub style={{marginRight:'20px'}}/> Github
            </a>
           
            <a href={props.url} target="_blank" className='btn_shadow '>
              <YouTube style={{marginRight:'20px',color:'red'}}/> Youtube
            </a>
           
          </div>

      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              {/* <img src={props.image} alt='' /> */}
              <ReactPlayer
              className="video-player"
              playing
              height="450px"
              width="450px"
              pip
              controls="false"
              muted
              url={props.url}
            />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='far fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i class='fas fa-chevron-right'></i>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
