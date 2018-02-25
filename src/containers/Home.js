import React from 'react'
import { withSiteData } from 'react-static'
import 'font-awesome/css/font-awesome.min.css'
import photo from '../images/photo.jpg'
import Portfolio from './Portfolio';

export default withSiteData(() => (
  <div>
    <section id="home">
      <div className="title"><h1>Taylor Griffith</h1> <br /> <h5>Web Developer</h5></div>
      <div className="social-media">
        <ul>
          <li><a href="https://www.linkedin.com/in/tsgriffith/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href="https://github.com/tsgriff" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" ></i></a></li>
        </ul>
      </div>
      <div className="resume-contain">
        <a href="https://drive.google.com/open?id=15S5OXblfV4w5EI76i5zATBBmdjsot-v0" target="_blank" rel="noopener noreferrer"><button id="resume">Résumé</button></a>
      </div>
    </section>

    <section id="about-me">
      <div className="photo-contain"><img className="personal-photo" src={photo} alt="" /></div>
      <div className="about-contain-one"><div className="about-text"><h3>I am a full-stack web developer specializing in JavaScript, React/Redux, and Node and I'm passionate about building web applications, learning new technologies, and following the evolution of the web development technical landscape.
          </h3></div>
        <div className="about-contain-two"><div className="about-text">
          <h3>
            My interest in software development began when I was a research assistant in a neuroscience lab at the University of California, Santa Barbara where I employed various software applications (such as MATLAB) to process data. Ever since, I have enjoyed the intellectual and creative rewards that come as a result of developing and applying software.
            </h3>
        </div></div>
        <div className="about-contain-two"><div className="about-text"><h3>Outside of web development, I enjoy mountain biking, surfing, reading, writing, and playing guitar and piano.
          </h3>
        </div>
        </div>
      </div>
    </section>

    <Portfolio />

    <section id="contact">
      <div className="contact-contain">
        <h1 className="contact-title">Let's Chat</h1>
        <i id="phone" className="fa fa-mobile" aria-hidden="true"></i>
        <h6>(805) 698-0927</h6>
        <i id="email" className="fa fa-envelope" aria-hidden="true"></i>
        <h6>taylorsgriffith@icloud.com</h6>
      </div>
    </section>
  </div>
))
