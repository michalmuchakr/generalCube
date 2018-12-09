import React, { Component } from 'react';
import PortfolioCard from './portfolio/portfolio_card';

import themeUnitPath from 'assets/theme-unit-1-1.PNG';
import themeUnitPath2 from 'assets/theme-unit-2.PNG';
import themeUnitPath3 from 'assets/theme-unit-3.PNG';
import styleWebshop from 'assets/style-webshop.PNG';
import theBlok from 'assets/theblok.PNG';
import ddc from 'assets/ddc.png';
import astom from 'assets/astom.PNG';
import raraavis from 'assets/raraavis.png';
import tournamenManager2 from 'assets/tournamen_manager_v2.PNG';
import boilerplate from 'assets/boilerplate.png';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioCards: [
        {
          pill: 'pill-7',
          git: true,
          live: false,
          imgPath: tournamenManager2,
          link: 'https://github.com/michalmuchakr/tournament_manager',
          desc: 'MERN (Mongo, Express, React & Redux, NodeJS) stack singlepage application. Prepared in case of managment of tablesoccer tournamet manager, that could be easly used in other kind of tournaments.',
          title: 'Tournament manager',
          features: [
            'Mongoose library included',
            'CRUD players management',
            'Add tournament functionality',
            'Ligue or tornament groups with final stage',
            'Add players to tournament',
            'Advanced algorithm calculates add and edit results',
            'Automaticly generate teams, timetable, score table',
            'Managment of tournament matches',
            'Automatic update of scrore table',
            'Generate semi-final and finals based on results',
            'Win team summary'
          ]
        },
        {
          pill: 'pill-1',
          git: false,
          live: true,
          imgPath: themeUnitPath,
          link: 'http://theme12.nopcommerce.pl/',
          title: 'Arsenios webshop theme',
          desc: 'Modern webshop template developed as Front End developer at Unit Soft Company',
          features: [
            'Shopping cart design',
            'Product preview',
            'Categories subpages',
            'Filters plugin'
          ],
          inColaboration: {
            link: 'https://www.unit-soft.pl/',
            companyName: 'Unit Soft'
          }
        },
        {
          pill: 'pill-2',
          imgPath: themeUnitPath2,
          git: false,
          live: true,
          link: 'http://theme11.nopcommerce.pl/',
          title: 'Runners webshop theme',
          desc: 'Minimalisctc webshop template developed as Front End developer at Unit Soft Company',
          features: [
            'Responsive and cross browser layout',
            'Modern homepage',
            'Shopping cart design',
            'Product preview page',
            'Categories and subcategories subpages',
            'REST API ajax based filters plugin'
          ],
          inColaboration: {
            link: 'https://www.unit-soft.pl/',
            companyName: 'Unit Soft'
          },
        },
        {
          pill: 'pill-3',
          imgPath: themeUnitPath3,
          git: false,
          live: true,
          link: 'http://theme10.nopcommerce.pl/',
          title: 'Default webshop theme',
          desc: 'Bootstrap 4 based default webshop template, developed as Front End developer at Unit Soft Company',
          features: [
            'NopCommerce integration',
            'Shopping cart design',
            'Product preview',
            'Categories subpages',
          ],
          inColaboration: {
            link: 'https://www.unit-soft.pl/',
            companyName: 'Unit Soft'
          }
        },
        {
          pill: 'pill-4',
          imgPath: theBlok,
          git: false,
          live: true,
          link: 'http://theblok.com.pl/',
          desc: 'Website for company involved in architectural industry for more than 25 years, presents projects design by theBlok company.',
          title: 'TheBlok',
          features: [
            'Responsive crossbrowser webpage',
            'Unique responsive design',
            'CMS Wordpres implementation'
          ]
        },
        {
          pill: 'pill-5',
          imgPath: ddc,
          git: false,
          live: true,
          link: 'http://domenydlaciebie.pl/',
          title: 'Domeny dla Ciebie',
          inColaboration: {
            link: 'http://catdesign.pl/',
            companyName: 'CATDESIGN IT SP. Z O.O'
          }
        },
        {
          pill: 'pill-6',
          imgPath: styleWebshop,
          git: false,
          live: true,
          link: 'http://generalcube.com/webshoptheme/',
          title: 'Style Webshop',
          desc: 'Homepage layout for webshop',
          features: [
            'Responsive design',
            'Modern, bootstrap based layout'
          ]
        },
        {
          pill: 'pill-8',
          imgPath: astom,
          git: false,
          live: true,
          title: 'Astom Tomasz Mucha',
          link: 'http://astom.com.pl/',
          features: [
            'sth',
            'sth2'
          ]
        },
        {
          pill: 'pill-9',
          imgPath: raraavis,
          git: false,
          live: true,
          title: 'RaraAvis',
          link: 'http://raraavis.com.pl/',
          features: [
            'sth',
            'sth2'
          ]
        },
        {
          pill: 'pill-10',
          imgPath: boilerplate,
          git: true,
          live: false,
          title: 'React Boilerplate',
          link: 'https://github.com/michalmuchakr/preconfigurated-react',
          desc: 'Babel & React & Webpack ready to use boilerplate, that could help start up a new project.',
          features: [
            'React JS + React Router',
            'Hot reload development server.',
            'Style preprocessor included.',
            'Absolute import paths.'
          ]
        }
      ]
    }
  }

  render() {
    let { portfolioCards } = this.state; 
    return (
      <div id='portfolio' className='portfolio col-xl-9 mx-auto'>
        <div className='col-12 px-0'>
          <h2 className='general-sub-title'>
            Portfolio
          </h2>
        </div>
        <div className='col-12'>
          <div className='row'>
            <div className='portfolio-nav col-md-4 px-0'>
              <div className='nav flex-column nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical' data-aos='fade-right'>
                {portfolioCards.map( (item, idx)=> {
                  return(
                    <a className={ `portfolio-nav-link nav-link btn btn-outline-secondary rounded-0  ${ idx===0 ? 'active' : '' }` }
                        data-toggle='tab'
                        key={ idx }
                        href={ `#${ item.pill }` }
                        aria-controls={ item.pill }
                        role='tab' >
                      { item.title }</a>
                  )}  
                )}
              </div>
            </div>
            <div className='portfolio-screen col-md-8'>
              <div className='tab-content' id='v-pills-tabContent' data-aos='fade-left'>
                {portfolioCards.map( (item, idx)=> {
                  return <PortfolioCard key={ idx } item={item} idx={ idx } />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

