import React from 'react'
import './Footer.css'
import logo from '../../assets/nav-logo.webp'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left-footer-container">
                    <img src={logo} alt="logo" />
                    <p>Empowering Your Brand packaging </p>
                    <div className="footer-logos">
                        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                        <a href=""><i class="fa-brands fa-youtube"></i></a>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div className="right-footer-container">
                    <div className="solution">
                        <h2>Solution</h2>
                        <p>One-Stop-Solution</p>
                        <p>Coffee</p>
                        <p>Backery</p>
                        <p>FastFood</p>
                        <p>Takeway/Restaurant To-go</p>
                    </div>
                    <div className="quick links">
                         <h2>Quick Links</h2>
                        <p>About MBPAK</p>
                        <p>Service</p>
                        <p>Factory</p>
                        <p>Sustainablity</p>
                        <p>FAQs</p>
                    </div>
                    <div className="get-in-touch">
                        <h2>Get In Touch</h2>
                        <p>Room 3201, 3214, No. 180, <br />Jiangnan Avenue Middle Road,<br /> Haizhu District,Guangzhou,<br /> China</p>
                        <a href="mailto:zayanentps@gmail.com">Email:zayanentps@gmail.com</a>
                        <p><a href="">Whatsapp:+91 7488191663</a></p>
                        <a href="tel:+7488191663">Phone:7488191663</a>
                    </div>
                </div>
            </div>
            <div className="footer-language">
                <p>English</p>
                <hr />
                <p>Hindi</p>
                <hr />
                <p>Fracsis</p>
                <hr />
                <p>Daoucsch</p>
            </div>
            <div className="copy-right">
                © 2026 All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;