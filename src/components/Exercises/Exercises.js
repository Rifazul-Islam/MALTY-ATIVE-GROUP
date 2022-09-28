import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
            }> MOLTY - Ative - Group</h2 >
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

                    <h2>Oder Summary</h2>

                </div>

            </div>
        </div>
    );
};

export default Exercises;