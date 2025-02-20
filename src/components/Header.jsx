import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { HomeIcon, Moon, Sun } from "lucide-react";

const Header = ({
  setIsHome,
  setIsProfile,
  setIsProject,
  setIsDark,
  isDark,
  isHome,
  isProfile,
  isProject,
}) => {
  const [time, setTime] = useState({
    hour: "00",
    minute: "00",
    second: "00",
    ampm: "00",
  });
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      let ampm = hour < 12 ? "AM" : "PM";
      hour = hour % 12 || 12;
      hour = hour < 10 ? `0${hour}` : hour;
      minute = minute < 10 ? `0${minute}` : minute;
      second = second < 10 ? `0${second}` : second;
      setTime({ hour, minute, second, ampm });
    }, 1000);
    setTimeout(() => {
      setIsLoading(false);
      setIsHome(true);
    }, 1000);
  }, []);
  return (
    <div className="space-y-10 justify-items-center">
      {
        <div className="relative">
          <p className="text-xl">
            {time.hour} : {time.minute} : {time.second} : {time.ampm}
          </p>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`absolute -right-12 top-0 transition-transform duration-500 ${
              isDark ? "rotate-90" : "rotate-0"
            }`}
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
      }
      <div className="flex justify-center items-center gap-10 ">
        <Button
          onClick={() => {
            setIsHome(false);
            setIsProfile(true);
            setIsProject(false);
          }}
          className={`text-lg transition-transform shadow-[0_0_5px] hover:scale-105 active:scale-95 ${
            isProfile && "outline outline-4 outline-offset-4"
          }`}
          variant=" "
        >
          Profile
        </Button>
        <Button
          onClick={() => {
            setIsHome(true);
            setIsProfile(false);
            setIsProject(false);
          }}
          className={`transition-transform shadow-[0_0_5px] hover:scale-105 active:scale-95 rounded-full w-12 h-12 ${
            isHome && "outline outline-4 outline-offset-4"
          }`}
          variant=" "
        >
          <HomeIcon className="scale-150" />
        </Button>
        <Button
          onClick={() => {
            setIsHome(false);
            setIsProfile(false);
            setIsProject(true);
          }}
          className={`text-lg transition-transform shadow-[0_0_5px] hover:scale-105 active:scale-95 ${
            isProject && "outline outline-4 outline-offset-4"
          }`}
          variant=" "
        >
          Project
        </Button>
      </div>
    </div>
  );
};

export default Header;
