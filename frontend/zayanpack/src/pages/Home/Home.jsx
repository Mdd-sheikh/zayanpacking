import React, { useContext } from 'react'
import './Home.css'
import { Context } from '../../context/Storecontext.jsx';
import header_image from '../../assets/image copy.png'

function Home() {
    const { check } = useContext(Context)
    return (
        <div className='home'>
            <div className="home-container">
               <img src={header_image} alt="" />
            </div>
        </div>
    )
}

export default Home;