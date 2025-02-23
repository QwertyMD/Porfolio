import React from "react";
import FadeContent from "./react-bits/FadeContent";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <FadeContent
      blur={true}
      duration={500}
      easing="ease-out"
      initialOpacity={0}
      className="flex flex-col gap-5 items-center self-center text-center"
    >
      <p className="text-4xl font-semibold">404 | Page Not Found</p>
      <Button
        onClick={() => navigate("/")}
        variant=" "
        className="text-xl border-2 border-black dark:border-white transition-transform hover:scale-105 active:scale-95"
      >
        Go to Home
      </Button>
    </FadeContent>
  );
};

export default NotFound;
