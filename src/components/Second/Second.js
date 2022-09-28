import React from 'react';
import './Second.css'
const Second = (props) => {

    const activityHandelar = () => {

        alert('WelCome Completed your site')
    }

    return (
        <div>
            <h2 style={{ color: 'blue' }}> Exercise Details</h2>
            <div className='small-style'>
                <span> Exercise time</span>
                <span> secend</span>
            </div>

            <div className='small-style'>

                <span> Breack time</span>
                <span>  second</span>

            </div>
            <button onClick={activityHandelar} className='btn-activity'>
                Activity Completed
            </button>
        </div>
    );
};

export default Second;