import React from 'react';

function Nav() {
  return (
    <nav>
      <ul>
        <li className="col-12 col-md-3 p-5 scollLink" data-scroll="#aboutSection">
          <span className="fa fa-sliders" aria-hidden="true"></span>
          <span>O nas</span>
        </li>
        <li className="col-12 col-md-3 p-5 scollLink" data-scroll="#howWeDoIt">
          <span className="fa fa-cogs" aria-hidden="true"></span>
          <span>Technologie</span>
        </li>
        <li className="col-12 col-md-3 p-5 scollLink" data-scroll="#projects">
          <span className="fa fa-paint-brush" aria-hidden="true"></span>
          <span>Portfolio</span>
        </li>
        <li className="col-12 col-md-3 p-5 scollLink" data-scroll="#contact">
          <span className="fa fa-paper-plane" aria-hidden="true"></span>
          <span>Kontakt</span>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
