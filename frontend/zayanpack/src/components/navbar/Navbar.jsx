import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/nav-logo.webp'

const Navbar = ({ setShowPopup }) => {

    const [navbar, setNavbar] = useState("navbar")

    const NavbarHandler = () => {
        const navbar = document.getElementById("navbar")

        if (navbar && window.scrollY > 10) {
            navbar.classList.add("active")
        } else if (navbar) {
            navbar.classList.remove("active")
        }
        console.log("running");

    }

    useEffect(() => {
        window.addEventListener("scroll", NavbarHandler)

        return () => {
            window.removeEventListener("scroll", NavbarHandler)
        }
    }, [])

    useEffect(() => {

        window.addEventListener("scroll", NavbarHandler)

        return () => window.removeEventListener("scroll", NavbarHandler)
    }, [])
    return (
        <div className='navbar' id="navbar">
            <div className="navbar-container">
                <div className="container-one">
                    <div className="left-nav-container">
                        <header>
                            <div><i class="fa-solid fa-phone"><span>7439553142</span></i></div>
                            <div><i class="fa-solid fa-envelope"><span>zayaentps@gmail.com</span></i></div>
                        </header>
                    </div>
                    <div className="right-nav-container">
                        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                        <a href=""><i class="fa-brands fa-youtube"></i></a>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div className="container-two">
                    <div className="big-navbar-container">
                        <div className="left-nav-container-two">
                            <img src={logo} alt="" />
                        </div>
                        <div className="middle-nav-container-two">
                            <div onClick={() => setNavbar("product")} className={`product ${navbar == "product" ? "active" : <></>}`}>Product  <i class="fa-solid fa-caret-up"></i></div>
                            <div onClick={() => setNavbar("solution")} className={`solution ${navbar == "solution" ? "active" : <></>}`}>Solution<i class="fa-solid fa-caret-up"></i></div>
                            <div onClick={() => setNavbar("sustainablity")} className={`sustainablity ${navbar == "sustainablity" ? "active" : <></>}`}>Sustainablity  </div>
                            <div onClick={() => setNavbar("about")} className={`about ${navbar == "about" ? "active" : <></>}`}>About <i class="fa-solid fa-caret-up"></i></div>
                            <div onClick={() => setNavbar("contact")} className={`contact${navbar == "contact" ? "active" : <></>}`}>Contact </div>
                        </div>
                        <div className="right-nav-container-two">
                            <div className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                            <div className="cart-icon"><i class="fa-solid fa-cart-arrow-down"></i></div>
                            <button onClick={() => setShowPopup(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;