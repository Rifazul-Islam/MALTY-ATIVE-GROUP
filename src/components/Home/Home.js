import React from 'react';
import images from '../../images/logo.png';
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <div className='logo-align'>
                <span> <img className='logo' src={images} alt="" /></span>

                <h2 style={{ color: 'green' }}>  MALTY-ATIVE-GROUP</h2>

            </div>

            <h3 className='text'> Seleced Everyday Exercise</h3>
        </div>
    );
};

export default Home;