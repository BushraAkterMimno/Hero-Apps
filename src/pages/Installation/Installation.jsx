import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'
import toast, { Toaster } from 'react-hot-toast';


const Installation = () => {

    const allApps = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    
    
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(stored);
    }, []);

    // uninstall
    const handleUninstall =  (id) => {
        const app = installedApps.find(a => a.id === id);

        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));

        // toast
        toast.success(`${app.title} uninstalled successfully!`);
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOrder(value);

        let sortedApps = [...installedApps];

        if (value === "high-low") {
            sortedApps.sort((a, b) => b.downloads - a.downloads);
        } else if (value === "low-high") {
            sortedApps.sort((a, b) => a.downloads - b.downloads);
        }

        setInstalledApps(sortedApps);
    };
    

    return (
        <div className='bg-[#E9E9E9] pb-10'>

            {/* Toast */}
             <Toaster position="top-right" reverseOrder={false}  />


            {/* title & description */}
            <div className='max-w-11/12 mx-auto pt-20 pb-10 text-center'>
                <h1 className='text-3xl md:text-5xl font-bold text-[#001931]'>Your Installed Apps</h1>
                <p className='text-base md:text-lg text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {/* found apps number & sort by */}
            <div className='max-w-11/12 mx-auto pb-4 flex items-center justify-between'>
                <p className='text-2xl font-semibold text-[#001931]'>({installedApps.length}) Apps Found</p>
                
                <select id="options" name="options" 
                onChange={handleSortChange}  value={sortOrder}
                className=' border-2 border-gray-400 py-3 px-4 rounded-sm text-gray-500'>
                    <option value="">Sort By Size</option>
                    <option value="high-low">High-Low</option>
                    <option value="low-high">Low-High</option>
                  </select>
            </div>

            {/* show installed apps */}
            <div className='max-w-11/12 mx-auto  pb-16 '>
                {installedApps.length === 0 ? (
                    <div className='text-center'>
                        <h2 className='text-5xl font-extrabold text-gray-500'>No Installed App Yet!</h2>
                    </div>
                ) : (
                    <div>
                        {installedApps.map(app => (
                            <div key={app.id}
                            className='flex items-center gap-2 md:gap-4 bg-white rounded-sm py-6 px-4 my-4'>
                                <img src={app.image} alt="" className='w-20 h-20 rounded-lg' />

                                {/* ratings, download, size */}
                                <div>
                                    <h2 className='text-xl font-medium text-[#001931]'>{app.title}</h2>
                                    <div className='flex items-center gap-4 mt-4'>

                                        {/* downloads */}
                                        <div className='flex items-center gap-1'>
                                            <img src={downloadIcon} alt="" className='w-4 h-4'  />
                                            <h2 className='font-medium text-base text-[#00D390]'>
                                                {app.downloads >= 1000000 
                                                ? ((app.downloads / 1000000) % 1 === 0 
                                                ? (app.downloads / 1000000).toFixed(0) 
                                                : (app.downloads / 1000000).toFixed(1)) + "M"
                                                : app.downloads >= 1000
                                                ? ((app.downloads / 1000) % 1 === 0 
                                                ? (app.downloads / 1000).toFixed(0) 
                                                : (app.downloads / 1000).toFixed(1)) + "K"
                                                : app.downloads
                                            }</h2>
                                        </div>

                                        {/* ratings */}
                                        <div className='flex items-center gap-1'>
                                        <img src={ratingsIcon} alt="" className='w-4 h-4' />
                                        <h2  className='font-medium text-base text-[#FF8811]'>{app.ratingAvg}</h2>
                                        </div>

                                        {/* sizes */}
                                        <div>
                                            <p className='text-[#627382] text-base'>{app.size}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* uninstall btn */}
                                <button onClick={() => handleUninstall(app.id)}
                                className='ml-auto md:py-3 md:px-4 py-2 px-3 rounded-sm font-semibold md:text-xl text-base text-white bg-[#00D390] hover:scale-105 cursor-pointer'>
                                    Uninstall</button>
                            </div>
                        ))}
                    </div>
                )}
                 
            </div>
        </div>
        
    );
};

export default Installation;