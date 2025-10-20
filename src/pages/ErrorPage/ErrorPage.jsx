import React from 'react';
import errorImg from '../../assets/error-404.png'
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate, useNavigation } from 'react-router-dom';


const ErrorPage = () => {

    const navigation = useNavigation();
    
     const navigate = useNavigate();
     const handleGoBack = () => { navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <>

        <Navbar></Navbar>
        <div className='bg-[#E9E9E9]'>
            <div className='max-w-10/12 mx-auto flex flex-col items-center justify-center pt-24 pb-18'>
                <img src={errorImg} alt="" />
                <div className='mt-12 text-center'>
                    <h1 className='text-[#001931] font-semibold text-5xl'>Oops, page not found!</h1>
                    <p className='text-[#627382] text-xl mt-3'>The page you are looking for is not available.</p>
                
                    <button onClick={handleGoBack}
                    className='mt-4 font-semibold text-base text-white rounded-sm py-4 px-10
                    bg-gradient-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer hover:scale-105'>Go Back!
                    </button>
                
                </div>
            </div>
        </div>
        
        <Footer></Footer>
        </>
    );
};


export default ErrorPage;