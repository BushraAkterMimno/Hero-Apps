import React from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const TrendingApps = ({ data }) => {
  const navigation = useNavigation();
  const navigate = useNavigate();

  const handleShowAll = () => {
    navigate('/apps');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (navigation.state === 'loading') {
    return <Spinner />;
  }

  return (
    <div className="bg-[#E9E9E9]">

      {/* Trending Apps Section */}
      <div className="max-w-11/12 mx-auto py-12">
        <div className="text-center">
          <h2 className="font-bold md:text-5xl text-4xl text-[#001931]">
            Trending Apps
          </h2>
          <p className="text-[#627382] md:text-xl text-base pt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Apps Grid */}
        <div className="pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((app) => (
              <SingleApp key={app.id} app={app} />
            ))}
          </div>
        </div>

        
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowAll}
            className="hover:scale-105 transition-transform duration-300 cursor-pointer rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-3 px-10 text-white font-semibold text-base"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;