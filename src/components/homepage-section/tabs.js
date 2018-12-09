import React, { Component } from 'react';
import Tab from './accordion/tab';


export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: 'Meetup'
        },
        {
          title: 'Dev.js'
        }
      ]
    }
  }
  render() {
    const { events } = this.state;
    return (
      <div>
        <ul className='nav nav-tabs mt-5' id='myTab' role='tablist'>
          <li className='nav-item'>
            <a className='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab' aria-controls='home' aria-selected='true'>
              Front End Events
            </a>
          </li>
        </ul>
        <div className='tab-content' id='myTabContent'>
          <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
            <Tab id='tab-accordion-1' items={ events }/>
          </div>
        </div>
      </div>
    )
  }
}
