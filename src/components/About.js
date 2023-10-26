import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>Here we go getting better at React.js</p>
    <img src={image} alt="I made this"></img>
  </div>);
}

export default About;
