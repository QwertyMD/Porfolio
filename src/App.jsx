import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Loading from "./components/Loading";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHome, setIsHome] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsHome(true);
    }, 1000);
  }, []);

  return (
    <div className={isDark && "dark"}>
      <div className="min-h-screen p-5 pb-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] dark:bg-slate-800 dark:bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] grid grid-rows-[0.1fr_1fr] dark:text-white cursor-default">
        <Header
          setIsHome={setIsHome}
          setIsProfile={setIsProfile}
          setIsProject={setIsProject}
          setIsDark={setIsDark}
          isDark={isDark}
        />
        {isHome && (
          <div className="flex justify-center items-center self-end">
            <Home />
          </div>
        )}
        <div className="flex justify-center items-center self-center">
          {isLoading && <Loading />}
          {isProfile && <Profile />}
          {isProject && <Project />}
        </div>
      </div>
    </div>
  );
}

export default App;
