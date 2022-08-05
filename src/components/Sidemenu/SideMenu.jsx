import './sidemenu.css'
import React, { useEffect, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'


const Sidemenu = () => {
    
    const handleClose = () => {
        let ele = document.getElementById('sidemenu')
        ele.classList.remove('side')
    }

    return (
        <div className='sideWrapper' id='sidemenu'>
            <div className='sideClose'>
                <input type="button" value="Close"  className='loginBtn' onClick={handleClose}/>
            </div>
            <div className='menuoptions'>
                <a href="#"><p>Home</p></a>
                <a href="#"><p>Subbed Anime</p></a>
                <a href="#"><p>Dubbed Anime</p></a>
                <a href="#"><p>Most Popular</p></a>
                <a href="#"><p>Movies</p></a>
                <a href="#"><p>TV Series</p></a>
                <a href="#"><p>OVA's</p></a>
                <a href="#"><p>ONA's</p></a>
                <a href="#"><p>Specials</p></a>
                <a href="#x"><p>Genre</p></a>
            </div>
        </div>
    )
}

export default Sidemenu