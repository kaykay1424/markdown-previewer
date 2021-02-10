import React from 'react';

const Previewer = (props) => {
    return (
        <div className="container">
            <h2 className="heading" >Previewer</h2>
            <div className="content-box">
                <div id="preview" dangerouslySetInnerHTML={props.createMarkedText}></div>
            </div>
        </div>
    );
}

export default Previewer;