import React from 'react';
import './Second.css';
import Swal from 'sweetalert2';


const Second = (props) => {
    const { cart, number } = props

    let total = 0;
    for (const p of cart) {

        total = total + p.time;
    }

    const handerlar = () => {

        Swal.fire(
            'Welcome!',
            'You clicked the button!',
            'success'
        )
    }


    return (
        <div>
            <h2 style={{ color: 'blue' }}> Exercise Details</h2>
            <div className='small-style'>
                <span> Exercise time</span>
                <span>{total} secend</span>
            </div>

            <div className='small-style'>

                <span> Breack time</span>
                <span>  {number} second</span>

            </div>
            <div className='btn-positin'>
                <button onClick={handerlar} className='btn-activity'>
                    Activity Completed
                </button>
            </div>
        </div>
    );
};

export default Second;