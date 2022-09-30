import React from 'react';
import { useState } from 'react';


import Second from '../Second/Second';
import './Cart.css';
const Cart = (props) => {

    const [number, setNumber] = useState(0)
    const handdear = (num1) => {
        localStorage.setItem('secondS', num1)
        setNumber(num1)

    }

    const fataFromLocalStorage = () => {
        let second = {};
        const getLocalValue = localStorage.getItem('secondS')
        if (getLocalValue) {
            second = JSON.parse(getLocalValue)
        }
        else {
            const getLocalValue = localStorage.setItem('secondS', 0)
            second = JSON.stringify(getLocalValue)
        }

        handdear(second)

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
                    fataFromLocalStorage={fataFromLocalStorage}
                    number={number}
                ></Second>

            </div>
        </div>
    );
};

export default Cart;