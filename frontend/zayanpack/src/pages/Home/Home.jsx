import React, { useContext } from 'react'
import './Home.css'
import { Context } from '../../context/Storecontext.jsx';

function Home() {
    const { check } = useContext(Context)
    return (
        <div className='home'>
            <div className="home-container">
                <p>Home</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi atque quos explicabo officiis unde. Eveniet, amet provident atque, 
                    maxime blanditiis aperiam .</p>
            </div>
        </div>
    )
}

export default Home;