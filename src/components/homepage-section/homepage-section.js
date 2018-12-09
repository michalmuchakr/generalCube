import React, { Component } from 'react';
import bindAll from 'lodash/bindAll';
import Header from 'components/homepage-section/header';
import About from './about';
import Portfolio from './portfolio';
import Tech from './tech';
import Loader from 'components/homepage-section/loader.js';

export default class HomepageSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenLoader: false
    }
    bindAll(this,
        'toggleLoader'
      );
  }

  componentDidMount() {
    this.toggleLoader()
  }

  toggleLoader() {
    this.setState({
      hiddenLoader: true
    })
  }

  render() {
    let { hiddenLoader } = this.state;
    return (
      <section className='homepage-section'>
        <Loader hiddenLoader={ hiddenLoader }/>
        <Header moveView={this.props.moveView} isNavSticky={ this.props.isNavSticky } />
        <About />
        <Portfolio />
        <Tech />
      </section>
    )
  }
}
