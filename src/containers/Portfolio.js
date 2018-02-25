
import React, { Component } from 'react';
import '../app.css';
import { Link } from 'react-router-dom';
import KruzeConsulting from '../components/KruzeConsulting/kruze-consulting'
import KruzeTax from '../components/KruzeTax/kruze-tax'
import Recipes from '../components/Recipes/recipes'


import trek from '../images/trek.png';
import TrekCart from '../images/trek-cart.png';
import TrekHome from '../images/trek-home.png';
import trailify from '../images/trailify.png';
import trailify2 from '../images/trailify2.png';
import trailify3 from '../images/trailify3.png';
import trailify4 from '../images/trailify4.png';
import trailify5 from '../images/trailify5.png';
import trailify6 from '../images/trailify6.png';

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="portfolio-title"><h2>Portfolio</h2></div>
                <div className="portfolio-contain">
                    <ul>
                        <li className="react-static">
                            <h3>React-Static</h3>
                            <h6>Open-Source Contributor</h6>
                            <h6>React, Node, JSX</h6>
                            <div className="portfolio-written">
                                <p>I provided the first official example configuration of a static-site using React-Static and Netlify CMS as the git-based content management system. It provides users with code and technical documentation to get started quickly and efficiently.</p>
                                <p className="react-static-link">
                                    <a href="https://github.com/nozzle/react-static/tree/master/examples/netlifycms" target="_blank" rel="noopener noreferrer">See the project on GitHub</a>
                                </p>
                            </div>
                        </li>
                        <KruzeTax />
                        <KruzeConsulting />
                        <Recipes />
                        {/* <Stocks /> */}
                        <li>
                            <h3>Trailify</h3>
                            <h6>Javascript (ES6), ReactJS, Redux, HTML, CSS, NodeJS, PostgreSQL</h6>
                            <img className="responsive-image" src={trailify} alt="" />
                            <div className="portfolio-links-contain">
                                <h6 className="portfolio-links"><a href="https://github.com/Trailify/Trailify" target="_blank" rel="noopener noreferrer">GITHUB</a></h6>
                                <h6 className="portfolio-links"><a href="http://trailify.co" target="_blank" rel="noopener noreferrer">FULL SITE</a></h6>
                                <h6 className="portfolio-links"><a href="https://youtu.be/SYxFKqwF4Rc" target="_blank" rel="noopener noreferrer">VIDEO TOUR</a></h6>
                            </div>
                        </li>
                        <li>
                            <h3>Trek Mountain Bikes | eCommerce</h3>
                            <h6>Javascript (ES6), AngularJS, HTML, CSS, NodeJS, PostgreSQL, Sass, Gulp</h6>

                            <img className="responsive-image" src={trek} alt="" />

                            <div className="portfolio-links-contain">
                                <h6 className="portfolio-links"><a href="https://github.com/tsgriff/trek-mtb-clone" target="_blank" rel="noopener noreferrer">GITHUB</a></h6>
                                <h6 className="portfolio-links"><a href="http://trek.tsgriffith.com/" target="_blank" rel="noopener noreferrer">FULL SITE</a></h6>
                                <h6 className="portfolio-links"><a href="https://youtu.be/YHzb7-7hrCA" target="_blank" rel="noopener noreferrer">VIDEO TOUR</a></h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Portfolio;
