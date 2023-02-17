import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"
import Grid from '@mui/material/Grid';

const Features = () => {
  return (
    <>
      <section className='features' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>Services</h4>
            <h1>I offer</h1>
          </div>
          <Grid container spacing={2}>
       
     
       {data.map((val, index) => {
             return (
               <Grid item xs={12} md={3}>
                             <Card key={index} image={val.image} title={val.title} desc={val.desc} />

             </Grid>
             )
           })}
       
     </Grid>
      
        </div>
      </section>
    </>
  )
}

export default Features
