import React from 'react';

import Second from '../Second/Second';
import './Cart.css';
const Cart = (props) => {
    // console.log(props)


    return (
        <div className='cart'>
            <div>
                <h2> Add a Breack</h2>
                <div className='small-cart'>


                    <button>20</button>
                    <button>30</button>
                    <button>40</button>
                    <button>50</button>

                </div>

                <Second cart={props.cart} ></Second>

            </div>
        </div>
    );
};

export default Cart;