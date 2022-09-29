import React from 'react';
import { useState } from 'react';


import Second from '../Second/Second';
import './Cart.css';
const Cart = (props) => {
    // console.log(props)

    const [nuber, setNuber] = useState(0)
    const handdear = (num1) => {
        setNuber(num1)
    }

    return (
        <div className='cart'>
            <div>
                <h2> Add a Breack</h2>
                <div className='small-cart'>


                    <button onClick={() => handdear(20)} >20</button>
                    <button onClick={() => handdear(30)}>30</button>
                    <button onClick={() => handdear(40)} >40</button>
                    <button onClick={() => handdear(50)}>50</button>

                </div>

                <Second cart={props.cart}
                    nuber={nuber}
                ></Second>

            </div>
        </div>
    );
};

export default Cart;