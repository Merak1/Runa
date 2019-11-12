import React, { Component } from 'react';



class Section extends Component {
  state = {

  }
  componentDidMount() {
  }


  render() {
    return (
      <div className="Section">
        <div className="Section-title">
          <h2>Op1</h2>

          <div style={{
            'background-color': '#e78ae3',

          }}>
            {this.props.sections.map((section, index) =>
              <p key={index} > {section}  </p>
            )}
          </div>
        </div>
      </div >
    );
  }
}

export default Section;