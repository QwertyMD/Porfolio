import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { HomeIcon } from "lucide-react";

const Header = ({ setIsHome, setIsProfile, setIsProject }) => {
  const [time, setTime] = useState({ hour: "00", minute: "00", second: "00" });
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      hour = hour % 12 || 12;
      hour = hour < 10 ? `0${hour}` : hour;
      minute = minute < 10 ? `0${minute}` : minute;
      second = second < 10 ? `0${second}` : second;
      setTime({ hour, minute, second });
    }, 1000);
    setTimeout(() => {
      setIsLoading(false);
      setIsHome(true);
    }, 1000);
  }, []);
  return (
    <div className="grid gap-5 justify-items-center">
      {
        <p className="text-xl">
          {time.hour} : {time.minute} : {time.second}
        </p>
      }
      <div className="flex justify-center items-center gap-10 ">
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
          <HomeIcon className="scale-150" />
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
    </div>
  );
};

export default Header;
