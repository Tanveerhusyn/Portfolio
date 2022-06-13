import React from "react";
import "./Home.css";
import main from "../pic/main.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import { Typewriter } from "react-simple-typewriter";
import { Chip } from "@mui/material";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Hello World</h3>
            <h1>
              Hi, I’m <span>Tanveer Hussain</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Professional Coder.", " MERN Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I'm working as a freelance MERN stack developer for the last 1.5
              years. My main tech stack is ReactJS, ExpressJS, NodeJS and
              Mongodb but adapting to a new technology is not that big of a deal
              for me.{" "}
            </p>

            <div style={{marginTop:'40%'}} className="hero_btn dp">
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
               
             
              <h4 >My Tech Stack</h4>
              <div className="col_1">
                <button className="btn_shadow btn-img">
                  <img
                    style={{ marginRight: "20px" }}
                    alt="svgImg"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIKdmlld0JveD0iMCAwIDQ4IDQ4IgpzdHlsZT0iIGZpbGw6I3VuZGVmaW5lZDsiPjxwYXRoIGZpbGw9IiM4MGRlZWEiIGQ9Ik0yNCwzNEMxMS4xLDM0LDEsMjkuNiwxLDI0YzAtNS42LDEwLjEtMTAsMjMtMTBjMTIuOSwwLDIzLDQuNCwyMywxMEM0NywyOS42LDM2LjksMzQsMjQsMzR6IE0yNCwxNgljLTEyLjYsMC0yMSw0LjEtMjEsOGMwLDMuOSw4LjQsOCwyMSw4czIxLTQuMSwyMS04QzQ1LDIwLjEsMzYuNiwxNiwyNCwxNnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMTUuMSw0NC42Yy0xLDAtMS44LTAuMi0yLjYtMC43QzcuNiw0MS4xLDguOSwzMC4yLDE1LjMsMTlsMCwwYzMtNS4yLDYuNy05LjYsMTAuMy0xMi40YzMuOS0zLDcuNC0zLjksOS44LTIuNQljMi41LDEuNCwzLjQsNC45LDIuOCw5LjhjLTAuNiw0LjYtMi42LDEwLTUuNiwxNS4yYy0zLDUuMi02LjcsOS42LTEwLjMsMTIuNEMxOS43LDQzLjUsMTcuMiw0NC42LDE1LjEsNDQuNnogTTMyLjksNS40CWMtMS42LDAtMy43LDAuOS02LDIuN2MtMy40LDIuNy02LjksNi45LTkuOCwxMS45bDAsMGMtNi4zLDEwLjktNi45LDIwLjMtMy42LDIyLjJjMS43LDEsNC41LDAuMSw3LjYtMi4zYzMuNC0yLjcsNi45LTYuOSw5LjgtMTEuOQljMi45LTUsNC44LTEwLjEsNS40LTE0LjRjMC41LTQtMC4xLTYuOC0xLjgtNy44QzM0LDUuNiwzMy41LDUuNCwzMi45LDUuNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMzMsNDQuNmMtNSwwLTEyLjItNi4xLTE3LjYtMTUuNkM4LjksMTcuOCw3LjYsNi45LDEyLjUsNC4xbDAsMEMxNy40LDEuMywyNi4yLDcuOCwzMi43LDE5CWMzLDUuMiw1LDEwLjYsNS42LDE1LjJjMC43LDQuOS0wLjMsOC4zLTIuOCw5LjhDMzQuNyw0NC40LDMzLjksNDQuNiwzMyw0NC42eiBNMTMuNSw1LjhjLTMuMywxLjktMi43LDExLjMsMy42LDIyLjIJYzYuMywxMC45LDE0LjEsMTYuMSwxNy40LDE0LjJjMS43LTEsMi4zLTMuOCwxLjgtNy44Yy0wLjYtNC4zLTIuNS05LjQtNS40LTE0LjRDMjQuNiw5LjEsMTYuOCwzLjksMTMuNSw1LjhMMTMuNSw1Ljh6Ij48L3BhdGg+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iNCIgZmlsbD0iIzgwZGVlYSI+PC9jaXJjbGU+PC9zdmc+"
                  />
                  ReactJS
                </button>
             
                <button className="btn_shadow btn-img">
                  <img
                    style={{ marginRight: "20px" }}
                    alt="svgImg"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIKdmlld0JveD0iMCAwIDQ4IDQ4IgpzdHlsZT0iIGZpbGw6I3VuZGVmaW5lZDsiPjxwYXRoIGZpbGw9IiM1ZDQwMzciIGQ9Ik00MiwxNy4zQzQyLDM3LjgsMjQsNDQsMjQsNDRTNiwzNy44LDYsMTcuM2MwLTIuNSwwLjItNC42LDAuNC02LjNjMC4zLTIuNSwyLTQuNSw0LjQtNS4xIEMxMy45LDUsMTguOCw0LDI0LDRzMTAuMSwxLDEzLjMsMS45YzIuNCwwLjYsNC4xLDIuNyw0LjQsNS4xQzQxLjgsMTIuNyw0MiwxNC45LDQyLDE3LjN6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTI0LDdjNC45LDAsOS41LDEsMTIuNSwxLjhjMS4yLDAuMywyLDEuMywyLjIsMi42YzAuMiwxLjksMC4zLDMuOSwwLjMsNS45YzAsMTUuNi0xMS41LDIxLjktMTUsMjMuNCBjLTMuNS0xLjYtMTUtNy45LTE1LTIzLjRjMC0yLDAuMS00LDAuMy01LjljMC4xLTEuMywxLTIuMywyLjItMi42QzE0LjUsOCwxOS4xLDcsMjQsNyBNMjQsNGMtNS4yLDAtMTAuMSwxLTEzLjMsMS45IEM4LjQsNi41LDYuNiw4LjYsNi40LDExQzYuMiwxMi43LDYsMTQuOSw2LDE3LjNDNiwzNy44LDI0LDQ0LDI0LDQ0czE4LTYuMiwxOC0yNi43YzAtMi41LTAuMi00LjYtMC40LTYuM2MtMC4zLTIuNS0yLTQuNS00LjQtNS4xIEMzNC4xLDUsMjkuMiw0LDI0LDRMMjQsNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZGNlZGM4IiBkPSJNMjMgMjhIMjVWMzZIMjN6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTI0LDEwYzAsMC02LDUtNiwxM2MwLDUuMiwzLjMsOC41LDUsMTBsMS0zbDEsM2MxLjctMS41LDUtNC44LDUtMTBDMzAsMTUsMjQsMTAsMjQsMTB6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgxYzc4NCIgZD0iTTI0LDEwYzAsMC02LDUtNiwxM2MwLDUuMiwzLjMsOC41LDUsMTBsMS0zVjEweiI+PC9wYXRoPjwvc3ZnPg=="
                  />
                  Mongodb
                </button>
               
                <button className="btn_shadow btn-img">
                <img 
                style={{marginRight:'20px'}}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIKdmlld0JveD0iMCAwIDQ4IDQ4IgpzdHlsZT0iIGZpbGw6I3VuZGVmaW5lZDsiPjxwYXRoIGZpbGw9IiMzODhlM2MiIGQ9Ik0xNy4yMDQgMTkuMTIybC00LjkwNyAyLjcxNUMxMi4xMTMgMjEuOTM4IDEyIDIyLjEyNiAxMiAyMi4zMjl2NS40MzNjMCAuMjAzLjExMy4zOS4yOTcuNDkybDQuOTA4IDIuNzE3Yy4xODMuMTAxLjQxLjEwMS41OTMgMGw0LjkwNy0yLjcxN0MyMi44ODcgMjguMTUyIDIzIDI3Ljk2NSAyMyAyNy43NjJ2LTUuNDMzYzAtLjIwMy0uMTEzLS4zOS0uMjk3LS40OTJsLTQuOTA2LTIuNzE1Yy0uMDkyLS4wNTEtLjE5NS0uMDc2LS4yOTctLjA3Ni0uMTAzIDAtLjIwNS4wMjUtLjI5Ny4wNzZNNDIuNDUxIDI0LjAxM2wtLjgxOC40NTJjLS4wMzEuMDE3LS4wNDkuMDQ4LS4wNDkuMDgydi45MDZjMCAuMDM0LjAxOS4wNjUuMDQ5LjA4MmwuODE4LjQ1M2MuMDMxLjAxNy4wNjguMDE3LjA5OSAwbC44MTgtLjQ1M2MuMDMtLjAxNy4wNDktLjA0OC4wNDktLjA4MnYtLjkwNmMwLS4wMzQtLjAxOS0uMDY1LS4wNS0uMDgybC0uODE4LS40NTJDNDIuNTM0IDI0LjAwNCA0Mi41MTcgMjQgNDIuNSAyNFM0Mi40NjYgMjQuMDA0IDQyLjQ1MSAyNC4wMTMiPjwvcGF0aD48cGF0aCBmaWxsPSIjMzc0NzRmIiBkPSJNMzUuNzUxLDEzLjM2NGwtMi4zODktMS4zMzNjLTAuMDc1LTAuMDQyLTAuMTY3LTAuMDQxLTAuMjQxLDAuMDAzIGMtMC4wNzQsMC4wNDQtMC4xMiwwLjEyMy0wLjEyLDAuMjA5TDMzLDIwLjI5NWwtMi4yMDMtMS4yMTlDMzAuNzA1LDE5LjAyNSwzMC42MDIsMTksMzAuNSwxOWMtMC4xMDIsMC0wLjIwNSwwLjAyNS0wLjI5NywwLjA3NiBoMC4wMDFsLTQuOTA3LDIuNzE1QzI1LjExMywyMS44OTIsMjUsMjIuMDgsMjUsMjIuMjgydjUuNDMzYzAsMC4yMDMsMC4xMTMsMC4zOSwwLjI5NywwLjQ5Mmw0LjkwOCwyLjcxNyBjMC4xODMsMC4xMDEsMC40MSwwLjEwMSwwLjU5MywwbDQuOTA3LTIuNzE3QzM1Ljg4NywyOC4xMDYsMzYsMjcuOTE4LDM2LDI3LjcxNVYxMy43ODhDMzYsMTMuNjEyLDM1LjkwNCwxMy40NSwzNS43NTEsMTMuMzY0eiBNMzIuODY2LDI2LjQ1OGwtMi4yMywxLjIzNWMtMC4wODMsMC4wNDYtMC4xODYsMC4wNDYtMC4yNjksMGwtMi4yMzEtMS4yMzVDMjguMDUxLDI2LjQxMiwyOCwyNi4zMjYsMjgsMjYuMjM0di0yLjQ3IGMwLTAuMDkyLDAuMDUxLTAuMTc3LDAuMTM1LTAuMjI0bDIuMjMxLTEuMjM0aC0wLjAwMWMwLjA0Mi0wLjAyMywwLjA4OC0wLjAzNCwwLjEzNS0wLjAzNGMwLjA0NywwLDAuMDkzLDAuMDEyLDAuMTM1LDAuMDM0IGwyLjIzLDEuMjM0QzMyLjk0OSwyMy41ODcsMzMsMjMuNjczLDMzLDIzLjc2NXYyLjQ3QzMzLDI2LjMyNiwzMi45NDksMjYuNDEyLDMyLjg2NiwyNi40NTh6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzJlN2QzMiIgZD0iTTE3LjIwNCwxOS4xMjJMMTIsMjcuNzYyYzAsMC4yMDMsMC4xMTMsMC4zOSwwLjI5NywwLjQ5Mmw0LjkwOCwyLjcxNyBjMC4xODMsMC4xMDEsMC40MSwwLjEwMSwwLjU5MywwTDIzLDIyLjMyOWMwLTAuMjAzLTAuMTEzLTAuMzktMC4yOTctMC40OTJsLTQuOTA2LTIuNzE1Yy0wLjA5Mi0wLjA1MS0wLjE5NS0wLjA3Ni0wLjI5Ny0wLjA3NiBjLTAuMTAzLDAtMC4yMDUsMC4wMjUtMC4yOTcsMC4wNzYiPjwvcGF0aD48cGF0aCBmaWxsPSIjNGNhZjUwIiBkPSJNMTcuMjA0LDE5LjEyMmwtNC45MDcsMi43MTVDMTIuMTEzLDIxLjkzOCwxMiwyMi4xMjYsMTIsMjIuMzI5bDUuMjA0LDguNjQyIGMwLjE4MywwLjEwMSwwLjQxLDAuMTAxLDAuNTkzLDBsNC45MDctMi43MTdDMjIuODg3LDI4LjE1MiwyMywyNy45NjUsMjMsMjcuNzYybC01LjIwMy04LjY0Yy0wLjA5Mi0wLjA1MS0wLjE5NS0wLjA3Ni0wLjI5Ny0wLjA3NiBjLTAuMTAzLDAtMC4yMDUsMC4wMjUtMC4yOTcsMC4wNzYiPjwvcGF0aD48cGF0aCBmaWxsPSIjMzc0NzRmIiBkPSJNNDcuNzAzIDIxLjc5MWwtNC45MDYtMi43MTVDNDIuNzA1IDE5LjAyNSA0Mi42MDIgMTkgNDIuNSAxOWMtLjEwMiAwLS4yMDUuMDI1LS4yOTcuMDc2aC4wMDFsLTQuOTA3IDIuNzE1QzM3LjExNCAyMS44OTIgMzcgMjIuMDg0IDM3IDIyLjI5NHY1LjQxMWMwIC4yMDkuMTE0LjQwMi4yOTcuNTAzbDQuOTA4IDIuNzE3Yy4xODQuMTAyLjQwOS4xMDIuNTkzIDBsMi4yNjMtMS4yNTNjLjIwNy0uMTE1LjIwNi0uNDEyLS4wMDItLjUyNmwtNC45MjQtMi42ODdDNDAuMDUyIDI2LjQxMiA0MCAyNi4zMjUgNDAgMjYuMjMxdi0yLjQ2NmMwLS4wOTIuMDUtLjE3Ny4xMy0uMjIxbDIuMjM1LTEuMjM2aC0uMDAxYy4wNDItLjAyMy4wODgtLjAzNC4xMzUtLjAzNC4wNDcgMCAuMDkzLjAxMi4xMzUuMDM0bDIuMjM1IDEuMjM3Yy4wOC4wNDQuMTMuMTI5LjEzLjIyMXYyLjAxMmMwIC4wODYuMDQ2LjE2Ni4xMjEuMjA5LjA3NS4wNDIuMTY3LjA0Mi4yNDItLjAwMWwyLjM5OC0xLjM5M2MuMTQ4LS4wODYuMjQtLjI0NS4yNC0uNDE3di0xLjg4QzQ4IDIyLjA4NSA0Ny44ODYgMjEuODkyIDQ3LjcwMyAyMS43OTF6TTEwLjcwMyAyMS43OTFsLTQuOTA2LTIuNzE1QzUuNzA1IDE5LjAyNSA1LjYwMiAxOSA1LjUgMTljLS4xMDIgMC0uMjA1LjAyNS0uMjk3LjA3NmguMDAxbC00LjkwNyAyLjcxNUMuMTE0IDIxLjg5MiAwIDIyLjA4NCAwIDIyLjI5NHY3LjQ2NWMwIC4wODYuMDQ2LjE2Ni4xMjEuMjA5LjA3NS4wNDIuMTY3LjA0Mi4yNDItLjAwMWwyLjM5OC0xLjM5M0MyLjkwOSAyOC40ODggMyAyOC4zMjkgMyAyOC4xNTd2LTQuMzkzYzAtLjA5Mi4wNS0uMTc3LjEzLS4yMjFsMi4yMzUtMS4yMzZINS4zNjVjLjA0Mi0uMDIzLjA4OC0uMDM0LjEzNS0uMDM0LjA0NyAwIC4wOTMuMDEyLjEzNS4wMzRsMi4yMzUgMS4yMzdDNy45NSAyMy41ODggOCAyMy42NzMgOCAyMy43NjV2NC4zOTNjMCAuMTcyLjA5MS4zMzEuMjQuNDE3bDIuMzk4IDEuMzkzYy4wNzUuMDQzLjE2Ny4wNDMuMjQyLjAwMUMxMC45NTQgMjkuOTI1IDExIDI5Ljg0NSAxMSAyOS43NTl2LTcuNDY0QzExIDIyLjA4NSAxMC44ODYgMjEuODkyIDEwLjcwMyAyMS43OTF6Ij48L3BhdGg+PC9zdmc+"
                alt="svgImg"  /> NodeJS     </button>
                <button className="btn_shadow btn-img">
                <img 
                style={{marginRight:'20px'}}
                alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiN1bmRlZmluZWQ7Ij48cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPjwvc3ZnPg=="/>
                  JavaScript
                </button>
                <button className="btn_shadow btn-img">
                <img 
                style={{marginRight:'20px'}}
                alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiN1bmRlZmluZWQ7Ij48cGF0aCBmaWxsPSIjZmY4ZjAwIiBkPSJNOCwzN0wyMy4yMzQsOC40MzZjMC4zMjEtMC42MDIsMS4xODktMC41OTEsMS40OTQsMC4wMkwzMCwxOUw4LDM3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmEwMDAiIGQ9Ik04LDM2Ljk5Mmw1LjU0Ni0zNC4xOTljMC4xNDUtMC44OTUsMS4zNDctMS4wODksMS43NjctMC4yODVMMjYsMjIuOTkyTDgsMzYuOTkyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZjZmMDAiIGQ9Ik04LjAwOCAzNi45ODZMOC4yMDggMzYuODI5IDI1LjczNyAyMi40ODggMjAuNzkzIDEzLjAxMnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZjNDAwIiBkPSJNOCwzN2wyNi42NjYtMjUuNzEzYzAuNTU5LTAuNTM5LDEuNDkyLTAuMjIxLDEuNjA2LDAuNTQ3TDQwLDM3bC0xNSw4Ljc0MyBjLTAuNjA5LDAuMzQyLTEuMzUyLDAuMzQyLTEuOTYxLDBMOCwzN3oiPjwvcGF0aD48L3N2Zz4="/>
                Firebase
                </button>
             
              
             
              </div>
              
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img
                src={main}
                style={{ height: "700px", width: "auto" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
