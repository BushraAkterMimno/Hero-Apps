import React from 'react';
import Banner from '../../components/Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';


const Home = () => {

    const allApps = useLoaderData();
    // Trending 8 Apps
    const trendingApps = allApps.slice(0,8);

    return (
        <div>
            <Banner></Banner>
            <TrendingApps data={trendingApps}></TrendingApps>
        </div>

    );
};

export default Home;