import React from 'react';
import { useState } from 'react';


import Second from '../Second/Second';
import './Cart.css';
const Cart = (props) => {

    const [number, setNumber] = useState(0)
    const handdear = (num1) => {

        setNumber(num1)

        const secondStorge = localStorage.getItem("second")
        const oldmark = JSON.parse(secondStorge)
        if (oldmark) {

            localStorage.setItem("second", JSON.stringify([...oldmark, num1]))

        }

        else {

            localStorage.setItem("second", JSON.stringify([num1]))
        }

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

                <Second
                    cart={props.cart}

                    number={number}
                ></Second>

            </div>
        </div>
    );
};

export default Cart;