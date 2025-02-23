import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className={isDark && "dark"}>
      <div className="min-h-screen p-5 pb-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] bg-[aliceblue] dark:bg-[#201f3e] dark:bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] grid grid-rows-[200px_1fr] dark:text-white cursor-default transition-colors">
        <Header setIsDark={setIsDark} isDark={isDark} />
        {isLoading ? <Loading /> : <Outlet />}
      </div>
    </div>
  );
};

export default RootLayout;
