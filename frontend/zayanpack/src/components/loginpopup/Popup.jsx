import React from 'react'
import './Popup.css'
import { useState } from 'react'

const Popup = ({ howpopup, setShowPopup }) => {
    const [currentData, setCurrentData] = useState(false)
    return (
        <div className='login'>
            <form action="">
                <div className="login-container">
                    <div className="header">
                        <h3>Login with email and password</h3>
                        <button onClick={() => setShowPopup(false)}>X</button>
                    </div>
                    <div className="login-form">
                        {!currentData ? "Name" : ""}
                        {!currentData ? <input type="text" placeholder='name' /> : ""}
                        Email <input type="email" placeholder='email' required />
                        Password <input type="password" placeholder='password' required />
                        <div className="conditions">
                            <input type="checkbox" name="" id=""  required/>
                            <p>I agree to all conditions and privacy policy</p>

                        </div>
                        <div className="sign-button">
                            <p> click here to {currentData ? <span onClick={() => setCurrentData(false)}>Create account</span> : <span onClick={() => setCurrentData(true)}>Login</span>}</p>
                            <p>Forgott password</p>
                        </div>
                        <button type='submit'>Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Popup;