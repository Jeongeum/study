import React, { useEffect, useState } from 'react';
import { SplashLoading } from '../../components/Splash/SplashLoading';
import { SplashLogin } from '../../components/Splash/SplashLogin';

export const SplashPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {loading && <SplashLoading />}
      {!loading && <SplashLogin />}
    </>
  );
};
