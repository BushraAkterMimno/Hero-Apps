import React from 'react';
import logo from '../../assets/logo.png'
import '../Footer/Footer.css'

const Footer = () => {
    return (
        
            <footer className=' bg-[#001931]'>
                <div className='max-w-11/12 mx-auto py-8 grid grid-cols-2 md:grid-cols-4'>
                    <div>
                        <img src={logo} alt="" className='h-20 w-20 mb-1' />
                        <h2 className='font-bold text-3xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                            bg-clip-text text-transparent'>HERO.IO </h2>
                    </div>
                    <div className='mt-3'>
                        <h5>Services</h5>
                        <ul className='mt-3'>
                            <li ><a href="/" >Branding</a></li>
                            <li><a href="/">Design</a></li>
                            <li><a href="/">Marketing</a></li>
                            <li><a href="/">Advertisement</a></li>
                            
                        </ul>
                    </div>
                    <div className='mt-3'>
                        <h5>Company</h5>
                        <ul className='mt-3'>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Jobs</a></li>
                            <li><a href="/">Press kit</a></li>
                            
                        </ul>
                    </div>
                    <div className='mt-3'>
                        <h5>Legal</h5>
                        <ul className='mt-3'>
                            <li><a href="/">Terms of use</a></li>
                            <li><a href="/">Privacy policy</a></li>
                            <li><a href="/">Cookie policy</a></li>
                            <li><a href="/">Copyright Policy</a></li>
                            
                        </ul>
                    </div>
                   
                </div>
                <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        <p className='text-white'>
          © {new Date().getFullYear()} <span className="text-purple-400">HERO.IO</span> — All Rights Reserved.
        </p>
        <p className="mt-1">Crafted with by the HERO.IO Team</p>
      </div>
            </footer>

        
    );
};

export default Footer;