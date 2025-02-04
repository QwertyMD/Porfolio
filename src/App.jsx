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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsHome(true);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen p-5 pb-0 bg-slate-800 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] grid grid-rows-[0.1fr_1fr] text-white cursor-default">
      <Header
        setIsHome={setIsHome}
        setIsProfile={setIsProfile}
        setIsProject={setIsProject}
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
  );
}

export default App;
