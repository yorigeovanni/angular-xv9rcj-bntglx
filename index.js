import React, { Component } from 'react';
import { render } from 'react-dom';

import Component1 from './src/pagedraw/component_1'

let content_samples = [
  {
    title: "some content",
    desc: "more content that's even longer and stuff"
  },
  {
    title: "This one has a really long title that goes on for multiple lines!!", 
    desc: "more content that's even longer and stuff"
  },
  {
    title: "some content",
    desc: "more content that's even longer and stuffmore content that's even longer and stuff more content that's even longer and stuff more content that's even longer and stuff more content that's even longer and stuff"
  },
];

function getRandomContent() {
  return content_samples[Math.floor(Math.random() * content_samples.length)];
} 

class App extends Component {
  constructor() {
    super();
    this.state = {
      lst: [getRandomContent(), getRandomContent(), getRandomContent()]
    };
  }

  render() {
    return (
      <Component1 
        onClear={()=> this.setState({lst: []})}
        onAdd={()=> this.setState({lst: this.state.lst.concat([getRandomContent()])})}
        list={this.state.lst} />
    );
  }
}

render(<App />, document.getElementById('root'));
