import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SingleApp from "../SingleApp/SingleApp";
import Spinner from "../../components/Spinner/Spinner";
import { Search } from "lucide-react";

const Apps = () => {
  const allApps = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(allApps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const result = allApps.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(result);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchTerm, allApps]);

  if (loading) return <Spinner />;

  return (
    <div className="bg-[#E9E9E9] pb-20">
      
      {/* title */}
      <div className="max-w-11/12 mx-auto pt-20 pb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-base md:text-lg text-[#627382] mt-4">
          Explore All Apps developed by us
        </p>
      </div>

      {/* search */}
      <div className="max-w-11/12 mx-auto pb-10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xl md:text-2xl font-semibold text-[#001931]">
          ({filteredApps.length}) Apps Found
        </p>

        <div className="relative mt-3 md:mt-0">
          <input
            type="search"
            name="search"
            value={searchTerm}
            placeholder="Search Apps"
            className="border-2 border-gray-400 py-2 pl-10 rounded-sm text-gray-800"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
        </div>
      </div>

      {/* app list */}
      <div className="max-w-11/12 mx-auto">
        {filteredApps.length === 0 ? (
          <div className="text-center text-5xl font-extrabold text-gray-500">
            No Apps Found!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredApps.map((app) => (
              <SingleApp key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
