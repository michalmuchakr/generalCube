import React from 'react';

import location from 'assets/location.png';
import administrator from 'assets/administrator.png';
import mail from 'assets/mail.png';
import call_incomming from 'assets/call_incomming.png';

function Contact() {
  return (
    <div id='contact' className="contact">
      <div className='headTitle-content'>
        <h2 className='general-title'>
          General Cube
        </h2>
        <p>
          Modern applications and websites.
        </p>
      </div>
      <div className="contact-card__tab">
        <div className="contact-card__tab__img-wrap">
          <img src={ location } alt="location" />
        </div>
        <div className="contact-card__tab__descript">
          <h3 className='contact-card__tab__title'>
            Poland
          </h3>
          <h4 className='contact-card__tab__sub-title'>
            Małopolska, Kraków
          </h4>
        </div>
      </div>
      
      <div className="contact-card__tab">
        <div className="contact-card__tab__img-wrap">
          <img src={ administrator } alt="administrator"/>
        </div>
        <div className="contact-card__tab__descript">
          <h3 className='contact-card__tab__title'>
            Michał Mucha
          </h3>
          <h4 className='contact-card__tab__sub-title'>
            UI Developer
          </h4>
        </div>
      </div>
        
      <div className="contact-card__tab">
        <div className="contact-card__tab__img-wrap">
          <img src={ mail } alt="mail"/>
        </div>
        <h3 className='contact-card__tab__title'>
          michal.mucha.kr@gmail.com
        </h3>
      </div>

      <div className="contact-card__tab">
        <div className="contact-card__tab__img-wrap">
          <img src={ call_incomming } alt="phone"/>
        </div>
        <h3 className='contact-card__tab__title'>
          +48 784 085 059
        </h3>
      </div>
    </div>
  )
}

export default Contact;
