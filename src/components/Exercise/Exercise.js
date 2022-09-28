import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const { img, name, time, discripe } = props.excercise
    return (
        <div className='exercise'>
            <div className='cart-style'>
                <img src={img} alt="" />

                <h3> {name}</h3>
                <p> {discripe}</p>
                <h3> time quarence : {time}s</h3>
            </div>
            <button className='btn-style'>
                <p>AddCart</p>
            </button>
        </div>
    );
};

export default Exercise;