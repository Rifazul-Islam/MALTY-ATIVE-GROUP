import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BIOData from '../BIOData/BIOData';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';



const Exercises = () => {


    const [excercises, setExcercises] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setExcercises(data))
    }, [])


    const addCart = (excercise) => {

        let newCart = [...cart, excercise]
        console.log(newCart)
        setCart(newCart)
    }

    return (

        // <div className="main-container">


        <div className="exercises-container">

            <div className="left-site">

                {
                    excercises.map(excercise =>
                        <Exercise key={excercise.name}
                            excercise={excercise}
                            addCart={addCart}
                        ></Exercise>)
                }
            </div>
            <div className="right-site">


                <BIOData> </BIOData>
                <Cart
                    cart={cart}
                ></Cart>


            </div>
        </div>
        // </div>
    );
};

export default Exercises;