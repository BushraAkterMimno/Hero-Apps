import React from 'react';
import playStoreImg from '../../assets/playStore.png'
import appStoreImg from '../../assets/appStore.png'
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='parentDiv bg-[#E9E9E9] '>

       {/* banner */}
        <div className='text-center pt-40 pb-10 max-w-11/12 mx-auto'>
            <h1 className='text-5xl md:text-7xl text-[#001931] font-semibold '>We Build 
                <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                    bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-[#627382] text-base md:text-lg mt-4'>At AppRadar, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>        
        </div>

        <div className='max-w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center gap-4 pb-10'>

            <button onClick={() => window.open("https://play.google.com", "_blank")}
            className='flex gap-2.5 border-2 border-gray-400 rounded-sm py-4 px-4 bg-[#D2D2D2] cursor-pointer hover:scale-105'>
                <img src={playStoreImg} alt="" />
                <h4 className='font-semibold text-xl text-[#001931] '>Google Play</h4>
            </button>

            <button onClick={() => window.open("https://apps.apple.com", "_blank")}
            className='flex gap-2.5 border-2 border-gray-400 rounded-sm py-4 px-5 bg-[#D2D2D2] cursor-pointer hover:scale-105'>
                <img src={appStoreImg} alt="" />
                <h4 className='font-semibold text-xl text-[#001931] '>App Store</h4>
            </button>
        </div>
        
        <div className='max-w-11/12 mx-auto flex flex-col items-center justify-center 
        '>
            <img src={heroImg} alt="" />
        </div>

        
        <div className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20'>
            <div className='max-w-11/12 mx-auto text-center'>
                <h2 className='font-bold text-4xl md:text-5xl text-white'>Trusted by Millions, Built for You</h2>
                
                <div className='mt-10 flex items-center justify-center gap-12'>
                    <div>
                        <p className='text-gray-300'>Total Downloads</p>
                    <h3 className='font-extrabold text-3xl md:text-6xl text-white py-4'>29.6M</h3>
                    <p className='text-gray-300'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-gray-300'>Total Reviews</p>
                    <h3 className='font-extrabold text-3xl md:text-6xl text-white py-4'>906K</h3>
                    <p className='text-gray-300'>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-gray-300'>Active Apps</p>
                    <h3 className='font-extrabold text-3xl md:text-6xl text-white py-4'>132+</h3>
                    <p className='text-gray-300'>31 more will Launch</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    
        </div>
    );
};

export default Banner;