import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";

const Root = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      // route load শেষ হলে ২ সেকেন্ড spinner delay
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);

  return (
    <>
      <Navbar />
      {loading && <Spinner />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
