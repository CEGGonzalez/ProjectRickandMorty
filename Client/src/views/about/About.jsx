// import React from "react";
import "./about.css";
import logo from "../../assets/myImagen.jpeg";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/gorjeo.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import rimage from "../../assets/morty.gif";


const About = () => {
  return (
    <>
    <div className="background-about">
      <div className="parent-container">
        <div className="container">
          <div className="titulo">
            <h1>Welcome 🖐</h1>
            <h2>Soy Carlos González</h2>
            <p>Este es mi proyecto integrador de Rick and Morty</p>
            <p>Gracias por su visita, espero sea de su agrado, esta hecha con mucha dedicacion</p>
            <img
              src={logo}
              alt=""
              width="200px"
              style={{ borderRadius: '70%', marginTop: '35px', marginBottom: '10px' }}
            />
          </div>
    <img className="rimage" src={rimage} alt="" width="40px"/>
        </div>
        <ul className="icons">
          <a href="https://www.instagram.com/" target="blank">
            <img src={instagram} alt="" width="40px"/>
          </a>
          <a href="https://www.twitter.com/" target="blank">
            <img src={twitter} alt="" width="40px"/>
          </a>
          <a href="https://github.com/CEGGonzalez/ProjectRickandMorty" target="blank">
            <img src={github} alt="" width="40px"/>
          </a>
          <a href="https://www.linkedin.com/in/carlosenriquegonzalezgonzalez/" target="blank">
            <img src={linkedin} alt="" width="40px"/>
          </a>
        </ul>
      </div>
    </div>
    </>
  );
};

export default About;