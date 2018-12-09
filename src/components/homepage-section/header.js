import React, { Component } from 'react';
import bindAll from 'lodash/bindAll';

import SocialBtns from '../shared/social_btns';
import GeneralNav from './header/general_nav';

import scrollToAnchor from 'controllers/scroll_to_anchor';

import fbPath from 'assets/fb.svg';
import gitPath from 'assets/git.svg';
import inPath from 'assets/in.svg';
import bgImage from 'assets/home_img.jpg';
import mailPath from 'assets/mail.svg';

export default class ProffesionalExperienceHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialBtns: [
        {
          path: 'https://www.linkedin.com/in/micha%C5%82-mucha-85b796b4/',
          ico: inPath
        },
        {
          type: 'mail',
          path: 'michal.mucha.kr@gmail.com',
          ico: mailPath
        },
        {
          path: 'https://www.facebook.com/micha.tomasz.mucha',
          ico: fbPath
        },
        {
          path: 'https://github.com/michalmuchakr',
          ico: gitPath
        }
      ],
      isNavSticky: false,
    };
    bindAll(this, [
      'scrollSpy'
    ]);
  }
  
  componentDidMount() {
    this.scrollSpy()
  }
  
  scrollSpy() {
    window.onscroll = () => {
      let { isNavSticky } = this.state,
        scrolled = window.scrollY;

      if ( !isNavSticky && scrolled > 100 ) {
        this.setState({
          isNavSticky: true
        });
      } else if (isNavSticky && scrolled <= 100 ) {
        this.setState({
          isNavSticky: false
        });
      }
    };
  }

  render() {
    const { socialBtns,
            isNavSticky } = this.state;

    const { moveView } = this.props;
    
    return (
      <header className='header' style={{backgroundImage: `url(${bgImage})`}}>
      
        <GeneralNav isNavSticky={ isNavSticky } moveView={ moveView } />

        <div className='col-12'>
          <div className='row'>
            <div className='headTitle__introduction col-xl-4 col-lg-6 ml-auto'
              data-aos='fade-left'>
              <h2 className='headTitle__introduction-title'>
                Welcome to General Cube!
              </h2>
              <p className='headTitle__introduction-paragraph'>
                Let me introduce myself, my name is Michał and I'm a UI developer from Poland,
                specialized in javascript and it's a pleasure to greet you at my personal website.
                Here you could find some information's about my professional experience,
                take a look at extract from my portfolio, read blog posts related to Front End Universe.
              </p>
              <p className='headTitle__introduction-paragraph'>
                Feel free to contact me via email or social media.
              </p>
              <SocialBtns socialBtns={socialBtns}/>
              <p className='headTitle__introduction-sub-paragraph'>
                May the UI dev be with you.
              </p>
              <button type='button' className='headTitle__introduction__explore-more btn btn-outline-dark mb-5'
                data-anchor='#about'
                data-aos-delay={ 2000 }
                data-aos='zoom-in'
                onClick={(e) => scrollToAnchor.init(e)}>
                Explore more</button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
