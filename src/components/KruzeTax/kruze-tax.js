import React, { Component } from 'react';
import login from './photos/login.png';
import signup from './photos/signup-beginning.png';
import startQuestionnaire from './photos/start-questionnaire.png';
import dashboard from './photos/dashboard.png';
import questionnaireCompleted from './photos/questionnaire-completed.png';
import owners from './photos/owners.png';
import validation from './photos/validation.png';
import modal from './photos/modal.png';
import conversion from './photos/conversion.png';

class KruzeTax extends Component {
  render() {
    return (
      <li>
        <h3>Kruze Startup Tax Returns</h3>
        <h6>Javascript (ES6), ReactJS, Redux, HTML, CSS</h6>
        <img className="responsive-image" src={dashboard} alt="" />
        <div className="portfolio-links-contain">
          <h6 className="portfolio-links"><a href="http://kruzetax.com" target="_blank" rel="noopener noreferrer">FULL SITE</a></h6>
          {/* <h6 className="portfolio-links"><a href="" target="_blank" rel="noopener noreferrer">VIDEO TOUR</a></h6>}*/}
        </div>
      </li>
    )
  }
}

export default KruzeTax;
