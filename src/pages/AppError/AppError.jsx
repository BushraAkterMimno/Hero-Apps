import React, { useEffect, useState }  from 'react';
import appErrorImg from '../../assets/App-Error.png'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const AppError = () => {

     const navigation = useNavigation();
     const navigate = useNavigate();
     const handleGoBack = () => { navigate('/'); 
         window.scrollTo({ top: 0, behavior: 'smooth' });
     };
    
    return (
        <>

        <Spinner navigationState={navigation.state} />

        
        <div className='bg-[#E9E9E9]'>
            <div className='max-w-10/12 mx-auto flex flex-col items-center justify-center pt-24 pb-18'>
                <img src={appErrorImg} alt="" />
                <div className='mt-12 text-center'>
                    <h1 className='text-[#001931] font-semibold text-5xl'>OPPS!! APP NOT FOUND</h1>
                    <p className='text-[#627382] text-xl mt-3'>The App you are requesting is not found on our system.  please try another apps</p>
                
                    <button onClick={handleGoBack}
                    className='mt-4 font-semibold text-base text-white rounded-sm py-4 px-10
                    bg-gradient-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer hover:scale-105'>Go Back!</button>   
                </div>
            </div>
        </div>
        
        </>
    );
};

export default AppError;