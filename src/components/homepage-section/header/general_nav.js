import React, { Component } from 'react';
import bindAll from 'lodash/bindAll';
import about from 'assets/about.png';
import tech from 'assets/tech.png';
import portfolio from 'assets/portfolio.png';
import blog from 'assets/blog.png';

import scrollToAnchor from 'controllers/scroll_to_anchor';

export default class GeneralNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    bindAll(this, [
      'handleRwdOpen'
    ])
  }

  handleRwdOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    let { isOpen } = this.state;
    return (
      <div className={`headTitle${ this.props.isNavSticky ? ' sticky' : '' } ${ isOpen ? ' opened' : '' }`} >
        <div className='hamburger' aria-hidden='true' onClick={ this.handleRwdOpen }>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='headTitle-content'>
          <h2 className='general-title'>
            General Cube
          </h2>
          <p>
            Modern applications and websites.
          </p>
        </div>
        <div className='headTitle__action-right'>
        <div className='section-nav'>
          <button type='button' className='btn btn-outline-secondary general-nav-element'
            data-aos='fade-down'
            data-aos-duration='500'
            data-anchor='#about'
            onClick={(e) => scrollToAnchor.init(e)} >
            <img src={about} alt='about'/>
            <span>About</span>
          </button>
          <button type='button' className='btn btn-outline-secondary general-nav-element'
            data-aos='fade-down'
            data-aos-duration='500'
            data-aos-delay={ 750 }
            data-anchor='#portfolio'
            onClick={(e) => scrollToAnchor.init(e)} >
            <img src={portfolio} alt='portfolio'/>
            <span>Portfolio</span>
          </button>
          <button type='button' className='btn btn-outline-secondary general-nav-element'
            data-aos='fade-down'
            data-aos-duration='500'
            data-aos-delay={ 500 }
            data-anchor='#tech'
            onClick={(e) => scrollToAnchor.init(e)} >
            <img src={tech} alt='tech'/>
            <span>Technologies</span>
          </button>
          <button type='button' className='btn btn-outline-secondary general-nav-element'
            data-aos='fade-down'
            data-aos-duration='500'
            data-aos-delay={ 1000 } >
            <img src={blog} alt='blog'/>
            <span>Blog</span>
          </button>
        </div>
      </div>
    </div>
    )
  }
}
