import React, { Component } from 'react';
import Section from './Section';



class Home extends Component {
  state = {
    sections: [
      'section1 : 1',
      'section2 : 2',
      'section3 : 3',
      'section4 : 4'
    ]
  }
  componentDidMount() {
  }


  render() {
    return (
      <div className="Home">
        <div className="Header">
          <h3>Harvard Museum View</h3>
        </div>
        <div className="Sections">
          <Section sections={this.state.sections} />
        </div>
      </div>
    );
  }
}

export default Home;