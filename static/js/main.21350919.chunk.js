(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t(1),s=t(3),r=t.n(s),d=t(4),c=t.n(d);var o=e=>Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"heading",children:"Previewer"}),Object(i.jsx)("div",{className:"content-box",children:Object(i.jsx)("div",{id:"preview",dangerouslySetInnerHTML:e.createMarkedText})})]});var l=({markdown:e,handleChange:n})=>Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h2",{className:"heading",children:"Text Editor "}),Object(i.jsx)("div",{className:"content-box",children:Object(i.jsx)("textarea",{id:"editor",onChange:n,value:e,children:"  "})})]});t(11);class h extends a.Component{constructor(...e){super(...e),this.state={markdown:"# This is a heading \n\n## This a sub-heading\n\nHere is some **bold** text and _italic_ text\n\n This text is ~~crossed out~~\n\n[This is a link]( https://goo.gl/Umyytc)\n\nHere is some inline code: `<div></div>`\n\nHere is a code block:\n```\nfunction anotherExample(firstLine, lastLine) { \n if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n   }\n}\n``` \n\n > Here is a block quote \n\n Here is an unordered list: \n\n - Bullet point \n  - Another bullet point\n    - Another bullet point\n\nHere is an ordered list:\n\n 1. List item #1\n 1. List item #2\n 1. List item #3\n\nHere is a table: \n\n Header 1 | Header 2 \n ----- | ----- \n Cell 1 | Cell 2 \n\nHere is an image:\n\n![React Logo w/ Text](/favicon.ico)"},this.createMarkedText=()=>({__html:c()(this.state.markdown,{sanitize:!0})}),this.handleChange=e=>{this.setState({markdown:e.target.value})}}render(){return Object(i.jsxs)("div",{className:"main-container",children:[Object(i.jsx)(l,{markdown:this.state.markdown,handleChange:this.handleChange}),Object(i.jsx)(o,{createMarkedText:this.createMarkedText()})]})}}var m=h;r.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.21350919.chunk.js.map