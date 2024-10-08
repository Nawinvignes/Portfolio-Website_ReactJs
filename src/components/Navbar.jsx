import React from 'react'
import logo from '../assets/Logo.jpg';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaInstagram} from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
    <img className="mx-4 w-16" src={logo} alt='WebLogo' />
</div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/nawin-vignesh-4586a6255/'><FaLinkedin/></a>
            <a href='https://github.com/Nawinvignes'><FaGithub/></a>
            <a href='https://www.instagram.com/'><FaInstagram/></a>
            <a href='https://twitter.com/home'><FaSquareXTwitter/></a>
        </div>
    </nav>
  )
}

export default Navbar