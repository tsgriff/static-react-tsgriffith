import React, { Component } from 'react';
import recipes2 from './photos/recipes2.png';
import recipes3 from './photos/recipes3.png';
import recipes4 from './photos/recipes4.png';
import recipes5 from './photos/recipes5.png';
import recipes6 from './photos/recipes6.png';
import recipes7 from './photos/recipes7.png';
import recipes8 from './photos/recipes8.png';


class Recipes extends Component {
  render() {
    return (
      <li>
        <h3>Recipe Finder</h3>
        <h6>Javascript (ES6), ReactJS, Redux, HTML, CSS, NodeJS, Express, Massive, postgreSQL</h6>
          <img className="responsive-image" src={recipes2} alt="" />
        <div className="portfolio-links-contain">
          <h6 className="portfolio-links"><a href="https://github.com/tsgriff/recipe-finder" target="_blank" rel="noopener noreferrer">GITHUB</a></h6>
          <h6 className="portfolio-links"><a href="http://recipes.tsgriffith.com" target="_blank" rel="noopener noreferrer">FULL SITE</a></h6>
          {/* <h6 className="portfolio-links"><a href="" target="_blank" rel="noopener noreferrer">VIDEO TOUR</a></h6>}*/}
        </div>
      </li>
    )
  }
}

export default Recipes;
