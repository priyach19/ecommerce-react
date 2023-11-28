import React from 'react'
import './Footer.css'

//Importing react icons
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer>
            <Link to="/" className='footer__logo'>APNA VEG HUB</Link>
            <div className="footer__socials">
                <Link to="https://facebook.com/login " target='_blank' rel='noreferrer'><BsFacebook /></Link>
                <Link to="https://instagram.com/login " target='_blank' rel='noreferrer'><GrInstagram /></Link>
                <Link to="https://twitter.com/login" target='_blank' rel='noreferrer'><AiFillTwitterCircle /></Link>
            </div>

            <div className="footer__copyright">
                <small>&copy;Apna Veg Hub: All right reserved @2023.</small>
            </div>
        </footer>
    )
}

export default Footer