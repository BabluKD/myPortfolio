import React from 'react'
import './App.css';
//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/mycarousel.component"
import TitleMessage from "./components/title-message/title-message.component";
//import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";


//pages
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <>
        {/* <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={"./assets/img/parallex/background.webp"}
          bgImageAlt="parallax bg"
          strength={-200}
        > */}
          <div>
            <Container className="container-box rounded">
              <Fade bottom duration={800}>
                <About />
              </Fade>
            </Container>
          </div>
        {/* </Parallax> */}
      </>
      <Slide bottom duration={800}>
        <Skills />
      </Slide>

      {/* Experience or Internships */}
      <Fade bottom duration={800}>
        <Experience />
      </Fade>

    </div>
  );
}

export default App;
