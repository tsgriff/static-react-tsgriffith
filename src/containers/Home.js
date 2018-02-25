import React from 'react'
import { withSiteData } from 'react-static'
// import Carousel from 'react-image-carousel';
// import 'react-image-carousel/lib/css/main.min.css'

import 'font-awesome/css/font-awesome.min.css'

//
import photo from '../images/photo.jpg'

import trek from '../images/trek.png';
import TrekCart from '../images/trek-cart.png';
import TrekHome from '../images/trek-home.png';
import trailify from '../images/trailify.png';
import trailify2 from '../images/trailify2.png';
import trailify3 from '../images/trailify3.png';
import trailify4 from '../images/trailify4.png';
import trailify5 from '../images/trailify5.png';
import trailify6 from '../images/trailify6.png';

// let trailifyImages = [
//   trailify,
//   trailify2,
//   trailify3,
//   trailify4,
//   trailify5,
//   trailify6
// ]

// let trekImages = [
//   TrekHome,
//   trek,
//   TrekCart
// ];

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

    <section id="portfolio">
      <div className="portfolio-title"><h2>Portfolio</h2></div>
      <div className="portfolio-contain">
        <ul>
        {/* <KruzeTax />
              <KruzeConsulting />
              <Recipes /> */}
        {/* <Stocks /> */}
         <li> 
                <h3>Trailify</h3>
                <h6>Javascript (ES6), ReactJS, Redux, HTML, CSS, NodeJS, PostgreSQL</h6>
                 <div className="carousel-main"> 

                {/* <Carousel images={trailifyImages}
                  thumb={true}
                  loop={true}
                /> */}

                </div>
                <div className="trailify-responsive">
                  <img src={trailify} alt="" />
                </div>
                <div className="portfolio-links-contain">
                  <h6 className="portfolio-links"><a href="https://github.com/Trailify/Trailify" target="_blank" rel="noopener noreferrer">GITHUB</a></h6>
                  <h6 className="portfolio-links"><a href="http://trailify.co" target="_blank" rel="noopener noreferrer">FULL SITE</a></h6>
                  <h6 className="portfolio-links"><a href="https://youtu.be/SYxFKqwF4Rc" target="_blank" rel="noopener noreferrer">VIDEO TOUR</a></h6>
                </div>
              </li>
              <li>
                <h3>Trek Mountain Bikes | eCommerce</h3>
                <h6>Javascript (ES6), AngularJS, HTML, CSS, NodeJS, PostgreSQL, Sass, Gulp</h6>
                {/* <div className="carousel-main">
                  <Carousel images={trekImages}
                    thumb={true}
                    loop={true}
                  />
                </div> */}
                <div className="trek-responsive">
                  <img src={trek} alt="" />
                </div>
                <div className="portfolio-links-contain">
                  <h6 className="portfolio-links"><a href="https://github.com/tsgriff/trek-mtb-clone" target="_blank" rel="noopener noreferrer">GITHUB</a></h6>
                  <h6 className="portfolio-links"><a href="http://trek.tsgriffith.com/" target="_blank" rel="noopener noreferrer">FULL SITE</a></h6>
                  <h6 className="portfolio-links"><a href="https://youtu.be/YHzb7-7hrCA" target="_blank" rel="noopener noreferrer">VIDEO TOUR</a></h6>
                </div>
              </li>
            </ul>
      </div>
    </section>

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
