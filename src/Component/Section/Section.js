import React from 'react'
import './Section.css';
import girl from '../../Assets/girl.png'

const MainSection = () => {
    return (
        <div className= 'mainSection'>
            <div className='firstMainSection'>
                <div>
                    <h3>SUMMER 2022</h3>
                    <h1>NEW COLLECTION</h1>
                    <p>We know how large objects will act, <br /> but things on a small scale</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className= 'secondMainSection'>
                <div className= 'mediumEllipse'></div>
                <div className= 'largeEllipse'></div>
                <div className= 'smallEllipse'></div>
                <div className= 'smallestEllipse'></div>
                <div className= 'imgContainer'>
                    <img src={girl} alt='Girl' />
                </div>
            </div>
        </div>
    )
}

export default MainSection;