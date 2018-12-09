import React from 'react';
import TechImgPath from 'assets/tech.svg';

import webpackIco from 'assets/webpack.png';

function Tech() {
  let tech = [
    {
      ico: webpackIco,
      title: 'HTML 5',
      cardTxt: 'Preprocessors such a JSX, HAML, Handlebars, JQuery templates.'
    },
    {
      ico: webpackIco,
      title: 'Javascript',
      cardTxt: 'Vanila JS ECMAScript version 6 and 5, Coffee Script, JQuery.'
    },
    {
      ico: webpackIco,
      title: 'CSS',
      cardTxt: 'Preprocessors such a SASS, SCSS, LESS.'
    },
    {
      ico: webpackIco,
      title: 'Ajax',
      cardTxt: 'Asynchronous requests to connect Application with REST API.'
    },
    {
      ico: webpackIco,
      title: 'React & Redux',
      cardTxt: 'Powerfull javascript libary and global state managment.'
    },
    {
      ico: webpackIco,
      title: 'Backbone',
      cardTxt: 'Javascript libary to build sigle page applications.'
    },
    {
      ico: webpackIco,
      title: 'Webpack',
      cardTxt: 'Module boundler for Javascript helps organize modern applications.'
    },
    {
      ico: webpackIco,
      title: 'Node JS',
      cardTxt: 'Cross-platform environment Javascript that executes code outside of browser.'
    },
    {
      ico: webpackIco,
      title: 'Express Js',
      cardTxt: 'Standard server framework for NodeJS hepls build JavaScript based API server.'
    },
    {
      ico: webpackIco,
      title: 'Mongo DB',
      cardTxt: 'Document oriented, NoSQL database uses JSON-like documents and schemas.'
    },
    {
      ico: webpackIco,
      title: 'Github',
      cardTxt: 'Version-control system, that organize team cooperation on shared codebase.'
    },
    {
      ico: webpackIco,
      title: 'Photoshop',
      cardTxt: 'Raster graphic editor developed by Adobe, comon tool for cuting psd files.'
    }
  ]

  return (
    <div id='tech' className='tech col-xl-8 mx-auto'>
      <h2 className='general-sub-title'>
        Technologies used in projects
      </h2>
      
      <div className='col-12'>
        <div className='row d-flex justify-content-between align-items-center'>
          <div className='tech__left col-md-4 pl-0' data-aos="fade-right">
            {tech.slice(0,3).map( (item, index) => {
                return (
                  <div className='tech__card card w-100' key={ index }>
                    <div className='card-body'>
                      <h5 className='card-title tech__card-title'>
                        { item.title }
                      </h5>
                      <p className='card-text'>{ item.cardTxt }</p>
                    </div>
                  </div>
                )
              })
            }

          </div>

          <div className='tech__center-img col-md-3'>
            <img className='d-block w-100' data-aos="zoom-in" src={ TechImgPath } alt='Third slide' />
          </div>

          <div className='tech__right col-md-4 pr-0' data-aos="fade-left">

            {tech.slice(3,6).map( (item, index) => {
                return (
                  <div className='tech__card card w-100' key={ index }>
                    <div className='card-body'>
                      <h5 className='card-title tech__card-title'>
                        { item.title }
                      </h5>
                      <p className='card-text'>{ item.cardTxt }</p>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <div className='col-12 px-0 mt-5'>
            <div className='row'>
              {tech.slice(6).map( (item, index) => {
                return (
                  <div className='col-md-4' key={ index } data-aos="zoom-in">
                    <div className='tech__card card w-100' >
                      <div className='card-body'>
                        <h5 className='card-title tech__card-title'>
                          { item.title }
                        </h5>
                        <p className='card-text'>{ item.cardTxt }</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech;
