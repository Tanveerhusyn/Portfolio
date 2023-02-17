import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
import Grid from '@mui/material/Grid';

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container_new'>
          <div className='heading text-center '>
            <h4>Have a Look at my Portfolio</h4>
            <h1>My Portfolio</h1>
          </div>
          <Grid container spacing={2}>
       
     
        {Portfolio_data.map((value, index) => {
              return (
                <Grid item xs={12} md={4}>
                               <Card key={index} githubUrl={value.githubUrl} image={value.image} url={value.url} category={value.category} totalLike={value.totalLike} title={value.title} />

              </Grid>
              )
            })}
        
      </Grid>
      
        </div>
      </section>
    </>
  )
}

export default Portfolio
