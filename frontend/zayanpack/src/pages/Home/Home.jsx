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
                    maxime blanditiis aperiam aliquid molestias iste totam, repudiandae soluta voluptatem ratione? Saepe! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laboriosam fuga non eaque adipisci blanditiis aut ipsam amet voluptatibus architecto hic consectetur, veniam dolorum, eligend
                    i aliquid vitae corrupti harum doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facere, molestias accusamus porro consectetur amet modi dolore nostrum quod laborum iste libero sint aliquid et vel dolorem
                     expedita dolorum aspernatur.</p>
            </div>
        </div>
    )
}

export default Home;