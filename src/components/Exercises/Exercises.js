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

        <div>
            <div className='logo-align'>
                <img className='logo' src=" https://images-platform.99static.com/8QVhsq0xUI9KAGH6WZXUmnWohwI=/0x0:1574x1574/500x500/top/smart/99designs-contests-attachments/97/97489/attachment_97489210" alt="" />

                <h2 style={{ color: 'green', marginLeft: '20px' }
                }> MALTY-Ative-Group</h2 >
            </div>
            <h3 style={{ marginLeft: '20px' }
            }>Seleced Everyday Exercise</h3>
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
                    <Cart cart={cart}></Cart>


                </div>
            </div>
        </div>
    );
};

export default Exercises;