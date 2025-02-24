import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { HomeIcon, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import FadeContent from "./react-bits/FadeContent";

const Header = ({ setIsDark, isDark }) => {
  const [time, setTime] = useState({
    hour: "00",
    minute: "00",
    second: "00",
    ampm: "??",
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
    }, 2000);
  }, []);
  return (
    <FadeContent
      blur={true}
      duration={1500}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="space-y-10 justify-items-center">
        {
          <div className="relative">
            <p className="text-xl">
              {time.hour} : {time.minute} &nbsp; {time.ampm}
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
          <NavLink
            to="/profile"
            className={(e) =>
              `${
                e.isActive &&
                "bg-black text-white dark:bg-white dark:text-black"
              } rounded-lg border-2 border-black dark:border-white hover:scale-105 active:scale-95 transition-transform`
            }
          >
            <Button className="text-lg" variant=" ">
              Profile
            </Button>
          </NavLink>
          <NavLink
            to="/"
            className={(e) =>
              `${
                e.isActive &&
                "bg-black text-white dark:bg-white dark:text-black"
              } rounded-full border-2 border-black dark:border-white hover:scale-105 active:scale-95 transition-transform`
            }
          >
            <Button className="w-12 h-12" variant=" ">
              <HomeIcon className="scale-150" />
            </Button>
          </NavLink>
          <NavLink
            to="/project"
            className={(e) =>
              `${
                e.isActive &&
                "bg-black text-white dark:bg-white dark:text-black"
              } rounded-lg border-2 border-black dark:border-white hover:scale-105 active:scale-95 transition-transform`
            }
          >
            <Button className="text-lg" variant=" ">
              Project
            </Button>
          </NavLink>
        </div>
      </div>
    </FadeContent>
  );
};

export default Header;
