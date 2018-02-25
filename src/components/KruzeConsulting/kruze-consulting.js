import React, { Component } from 'react';
import podcast from './photos/podcast.png';
import mainCalcFaq from './photos/mainsection.png';
import taxLP1 from './photos/taxlp1.png';
import taxLP2 from './photos/taxlp2.png';
import taxLP3 from './photos/taxlp3.png';

class KruzeConsulting extends Component {
  render() {
    return (
      <li>
        <h3>Kruze Consulting</h3>
        <h6>Javascript (ES6), jQuery, HTML, CSS</h6>
        <img className="responsive-image" src={podcast} alt="" />
        <div className="portfolio-links-contain">
          <h6 className="portfolio-links"><a href="http://kruzeconsulting.com" target="_blank" rel="noopener noreferrer">FULL SITE</a></h6>
          {/* <h6 className="portfolio-links"><a href="" target="_blank" rel="noopener noreferrer">VIDEO TOUR</a></h6>}*/}
        </div>
      </li>
    )
  }
}

export default KruzeConsulting;
