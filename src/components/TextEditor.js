import React from 'react';

const TextEditor = ({markdown,handleChange}) => {
   
    return (
        <div className="container">
            <h2 className="heading">Text Editor </h2>
            <div className="content-box">
                <textarea id="editor" onChange={handleChange} value={markdown} >  </textarea>
            </div>
        </div>  
    );
}

export default TextEditor;