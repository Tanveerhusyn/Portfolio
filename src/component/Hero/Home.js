import React from "react";
import "./Home.css";
import main from "../pic/DP2.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import { Typewriter } from "react-simple-typewriter";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";

const Home = () => {
  //#ff014f

  return (
    <>
      <section className="hero" id="home">
        <div className="avatar_img">
          <Avatar
            style={{
              height: "200px",
              width: "200px",
              padding: "10px",
              boxShadow: "4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff",
            }}
            src={main}
          />
        </div>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sx={{ pt: 0 }} md={6} lg={8}>
            <div className="left top">
              <h3>Hello World</h3>
              <h1>
                Hi, I’m <span>Tanveer Hussain</span>
              </h1>
              <h2>
                {"<"}
                <span style={{fontSize:'30px'}}>
                  <Typewriter
                    words={["A MERN Developer."]}
                    loop
                    cursor
                    cursorStyle="/"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                {">"}
              </h2>

              <p style={{ width: "80%" }}>
                As a freelance MERN stack developer with 1.5 years of
                experience, my primary focus is on ReactJS, ExpressJS, NodeJS,
                and MongoDB. I am comfortable with adapting to new technologies
                and enjoy exploring the latest industry trends. With a strong
                foundation in MERN, I'm confident in my ability to take on new
                projects and expand my skill set as needed.{" "}
              </p>

              <div style={{ marginTop: "40%" }} className="hero_btn dp">
                {/* <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <div className="right">
              <div className="right_img">
                <img
                  src={main}
                  className="dp_img"
                  style={{ height: "400px", width: "auto" }}
                  alt=""
                />
              </div>
            </div>
          </Grid>
        </Grid>
    
        <div className="wave-container"></div>

      </section>
    </>
  );
};

export default Home;
