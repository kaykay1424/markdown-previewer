// Modules
import React, { Component } from 'react';
import marked from 'marked';

// Components
import Previewer from './components/Previewer';
import TextEditor from './components/TextEditor.js';

// Assets
import './index.scss';

class App extends Component {
  state = {
        markdown: "# This is a heading \n\n## This a sub-heading\n\nHere is some **bold** text and _italic_ text\n\n This text is ~~crossed out~~\n\n[This is a link]( https://goo.gl/Umyytc)\n\nHere is some inline code: `<div></div>`\n\nHere is a code block:\n```\nfunction anotherExample(firstLine, lastLine) { \n if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n   }\n}\n``` \n\n > Here is a block quote \n\n Here is an unordered list: \n\n - Bullet point \n  - Another bullet point\n    - Another bullet point\n\nHere is an ordered list:\n\n 1. List item #1\n 1. List item #2\n 1. List item #3\n\nHere is a table: \n\n Header 1 | Header 2 \n ----- | ----- \n Cell 1 | Cell 2 \n\nHere is an image:\n\n![React Logo w/ Text]("+process.env.PUBLIC_URL+"/favicon.ico)"
  }
  
  createMarkedText = () => {
    let rawMarkup = marked(this.state.markdown, {sanitize: true});
    return { __html: rawMarkup };
  }

  handleChange = (event) => {
    this.setState({
        markdown: event.target.value
    })
  }

  render() {
    return (
      <div className="main-container">
        <TextEditor markdown={this.state.markdown} handleChange={this.handleChange} />
        <Previewer createMarkedText={this.createMarkedText()} />
      </div>
    );
  }
}

export default App;
