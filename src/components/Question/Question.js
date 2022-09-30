import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='parent-blog'>

            <div className='blog'>
                <h2>1. How does react work..? </h2>
                <p>One of the biggest advantages of using React is that  can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. </p>
            </div>
            <div className='blog'>
                <h2>2. Props and state difference in react..? </h2>
                Both the props and the state decide  data the component will display. They are simple Javascript objects that will re-render the component every time  Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and  The this.
            </div>


            <div className='blog'>
                <h2> 3. What works without the use effect data load ..?</h2>
                The useEffect hook is the Swiss Army knife of all the hooks. It the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.

            </div>


        </div>
    );
};

export default Question;