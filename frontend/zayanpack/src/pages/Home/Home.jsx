import React, { useContext } from 'react'
import './Home.css'
import { Context } from '../../context/Storecontext.jsx';
import header_image from '../../assets/home_image.webp'

function Home() {
    const { check } = useContext(Context)
    return (
        <div className='home'>
            <div className="home-container">
               <img width="750px" height="800px" src={header_image} alt="" />
            </div>
        </div>
    )
}

export default Home;