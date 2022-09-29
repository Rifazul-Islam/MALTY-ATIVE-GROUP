import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='blog'>

            <div className='blog1'>
                <h2>1. How does react work..? </h2>
                <p>One of the biggest advantages of using React is that  can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. </p>
            </div>
            {/* <div className='blog1'>
                <h2> props and state difference in react..? </h2>
                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and  The this. setState property is used to update the state values in the
            </div> */}


        </div>
    );
};

export default Question;