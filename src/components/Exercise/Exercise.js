import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const { img, name, time } = props.excercise
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Exercise;