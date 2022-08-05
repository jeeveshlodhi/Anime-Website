import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import {FaDiscord, FaTelegramPlane ,FaRedditAlien, FaTwitter, FaRandom } from 'react-icons/fa'

const Header = () => {

    const handleClick = async () => {    
        // console.log("Click detected");
        let ele = document.getElementById('sidemenu')
        ele.classList.add('side')
    }

    return (
        <div className="headWrapper">
            <div className='header'>
                <GiHamburgerMenu className='hamberger' onClick={handleClick}  />
                <img src={logo} alt="" className='logo' />
                <input type="text" name="search" placeholder='Search anime...' className='searchBar' />
                <div className='iconWrapper'>
                    <FaDiscord className='discord'/>
                    <FaTelegramPlane className='telegram' />
                    <FaRedditAlien className='reddit'/>
                    <FaTwitter className='twitter'/>
                </div>
            </div >
            <div className='header'>
                <FaRandom className='random'/>
                <input type="button" value="Donate" className='donateBtn' />
                <input type="button" value="Login" className='loginBtn' />
            </div>
            
        </div>
    )
}

export default Header