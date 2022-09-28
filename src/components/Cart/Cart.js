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
                    <span> 20s</span>
                    <span> 40s</span>
                    <span> 30s</span>
                    <span> 35s</span>
                </div>

                <Second cart={props.cart} ></Second>

            </div>
        </div>
    );
};

export default Cart;