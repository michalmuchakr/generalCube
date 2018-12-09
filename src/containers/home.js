import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomepageSection from 'components/homepage-section/homepage-section.js';

export default class Home extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }

  render() {
    return (
      <div className='home-page'>
        <HomepageSection />
      </div>
    )
  }
}
