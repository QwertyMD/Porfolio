import "./App.css";
import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Home } from "lucide-react";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import ProjectPage from "./components/ProjectPage";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isProfile, setIsProfile] = useState(false);
  const [isProject, setIsProject] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-slate-800 to-gray-900 grid grid-rows-[0.1fr_1fr]">
      <div className="flex justify-center items-center gap-10 p-10">
        <Button
          onClick={() => {
            setIsHome(false);
            setIsProfile(true);
            setIsProject(false);
          }}
          className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 text-black transition hover:shadow-[0_0_7px_1px_rgba(255,255,255,1)] text-lg hover:scale-105 active:scale-95"
        >
          Profile
        </Button>
        <Button
          onClick={() => {
            setIsHome(true);
            setIsProfile(false);
            setIsProject(false);
          }}
          className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 text-black transition hover:shadow-[0_0_7px_1px_rgba(255,255,255,1)] text-lg hover:scale-105 active:scale-95 rounded-full w-12 h-12"
        >
          <Home className="scale-150" />
        </Button>
        <Button
          onClick={() => {
            setIsHome(false);
            setIsProfile(false);
            setIsProject(true);
          }}
          className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 text-black transition hover:shadow-[0_0_7px_1px_rgba(255,255,255,1)] text-lg hover:scale-105 active:scale-95"
        >
          Project
        </Button>
      </div>

      {isHome ? (
        <div className="flex justify-center items-center self-end">
          <HomePage />
        </div>
      ) : (
        <div className="flex justify-center items-center self-center text-white">
          {isProfile ? <ProfilePage /> : <ProjectPage />}
        </div>
      )}
    </div>
  );
}

export default App;
