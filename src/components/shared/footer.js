import React from 'react';
import Contact from './contact';

import scrollToAnchor from 'controllers/scroll_to_anchor';

function Footer() {
  return (
    <footer className='footer'>
      <div className="col-9 mx-auto my-5">
        <div className="row">
          <div className="col-md-6">
            <h4>
              Sitemap
            </h4>
            <ul className="list-group list-group-flush footer-column">
              <li className="list-group-item footer-item"
                data-anchor='#about'
                onClick={ (e) => scrollToAnchor.init(e) } >
                About
              </li>
              <li className="list-group-item footer-item" 
                data-anchor='#about'
                onClick={ (e) => scrollToAnchor.init(e) }>
                Technologies
              </li>
              <li className="list-group-item footer-item" 
                data-anchor='#portfolio'
                onClick={ (e) => scrollToAnchor.init(e) }>
                Portfolio
              </li>
              <li className="list-group-item footer-item">
                Blog
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <Contact />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
