import React, { createElement } from "react";

const MyComponent = (props) => {
    return (
        <div>
        <div className="firstComment">
            <h1>Hello {props.name}, this is my {props.number} app.</h1>
        </div>
       <div className="secondComment">
       <h1>Let's go {props.name}, this is our {props.number} party.</h1>
   </div>
   </div>
    )
}

export default MyComponent;