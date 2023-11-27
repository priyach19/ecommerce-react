import React from 'react'
import './Footer.css'

//Importing react icons
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'


const Footer = () => {
    return (
        <footer>
            <a href="/" className='footer__logo'>APNA VEG HUB</a>
            <div className="footer__socials">
                <a href="https://facebook.com/login " target='_blank' rel='noreferrer'><BsFacebook /></a>
                <a href="https://instagram.com/login " target='_blank' rel='noreferrer'><GrInstagram /></a>
                <a href="https://twitter.com/login" target='_blank' rel='noreferrer'><AiFillTwitterCircle /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy;Apna Veg Hub: All right reserved @2023.</small>
            </div>
        </footer>
    )
}

export default Footer