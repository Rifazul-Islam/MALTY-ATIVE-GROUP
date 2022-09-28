import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BIOData from '../BIOData/BIOData';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';


const Exercises = () => {


    const [excercises, setExcercises] = useState([])

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setExcercises(data))
    },)



    return (

        <div>
            <h2 style={{ color: 'green', marginLeft: '20px' }
            }> MALTY-Ative-Group</h2 >
            <h3 style={{ marginLeft: '20px' }
            }>Seleced Everyday Exercise</h3>
            <div className="exercises-container">

                <div className="left-site">

                    {
                        excercises.map(excercise =>
                            <Exercise key={excercise.name}
                                excercise={excercise}
                            ></Exercise>)
                    }
                </div>
                <div className="right-site">
                    <div className='menu'>
                        <BIOData> </BIOData>
                        <Cart></Cart>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Exercises;