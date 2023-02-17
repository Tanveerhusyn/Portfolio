import React from "react"
import "../Features/Features.css"
import data from "./StackData"
import Card from "./Card"
import Grid from '@mui/material/Grid';

const TechStack = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>My</h4>
            <h1>Tech Stack</h1>
          </div>
          <Grid className="btn_shadow_new" container spacing={2} rowGap={4}>
       
     
       {data.map((val, index) => {
             return (
               <Grid item xs={6} md={2}>
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

export default TechStack
