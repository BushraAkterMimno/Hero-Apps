import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'
import { useNavigate } from 'react-router-dom';

const SingleApp = ({ app }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/app/${app.id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        
        <div onClick={handleClick}
        className='bg-white p-4 rounded-sm md:h-[400px] '>
                            <img src={app.image} alt="" className='w-full rounded-lg h-3/4'/>
                                <h2 className='font-medium text-xl text-[#001931] mt-4'>{app.title}</h2>
                                <div className='flex items-center justify-between mt-4'>
                                    {/* downloads */}
                                    <button className='flex items-center text-[#00D390] bg-[#F1F5E8]
                                    gap-2 py-1.5 px-2.5 rounded-sm'>
                                        <img src={downloadIcon} alt="" className='w-4 h-4' />
                                        <p className='font-medium text-base'>{app.downloads}</p>
                                    </button>
                                    {/* ratings */}
                                    <button className='flex items-center text-[#FF8811] bg-[#FFF0E1] 
                                    gap-2 py-1.5 px-2.5 rounded-sm'>
                                        <img src={ratingsIcon} alt="" className='w-4 h-4'/>
                                        <p className='font-medium text-base'>{app.ratingAvg}</p>
                                    </button>
                                </div>
                         </div>
    );
};

export default SingleApp;