import React, { Component } from 'react';
import AboutCard from './about/about_card';

import AppDevelopment from 'assets/app-development-1.jpg';

export default class About extends Component {
  render() {
    return (
      <div id='about' className="about-page col-xl-8 mx-auto my-5">
        <h2 className='general-sub-title'>
          Get known more about General Cube
        </h2>
        
        <AboutCard />

        <div className="about-img-holder col-md-6 pl-0" data-aos="fade-zoom-in">
          <img className="d-block w-100" src={ AppDevelopment } alt="First slide" />
        </div>
      </div>
    )
  }
}
