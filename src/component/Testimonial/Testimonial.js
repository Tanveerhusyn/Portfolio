import React, { useState, useEffect } from "react"
import "./Testimonial.css"
import Slide from "./Slide"
import TestimonialApi from "./TestimonialApi"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReviewCard from "./ReviewCard"
import review1 from '../pic/review1.jpg'
import review2 from '../pic/review2.jpg'
import review3 from '../pic/review3.jpg'
import review4 from '../pic/review4.jpg'
import review5 from '../pic/review5.jpg'
import Slider from 'react-slick'
const Testimonial = () => {
  const data = [
    review1,review2,review3,review4,review5
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
   
  };
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
      <section className='Testimonial' id='clients'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>WHAT CLIENTS SAY</h4>
            <h1>Testimonial</h1>
          </div>
          <div style={{marginLeft:'40px'}}>
            {/*{TestimonialApi.map((val, index) => {
              return <Slide key={index} image={val.image} design={val.design} name={val.name} offcer={val.offcer} post={val.post} date={val.date} desc={val.desc} />
            })}*/}
           
          <Slider {...settings}>
        
          <ReviewCard key={index} image={review1} title=""/>
          <ReviewCard key={index} image={review2} title=""/>
          <ReviewCard key={index} image={review3} title=""/>
          <ReviewCard key={index} image={review4} title=""/>
          <ReviewCard key={index} image={review5} title=""/>
           
        </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
