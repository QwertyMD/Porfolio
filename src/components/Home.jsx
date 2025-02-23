import React from "react";
import FadeContent from "./react-bits/FadeContent";

const Home = () => {
  return (
    <FadeContent
      blur={true}
      duration={500}
      easing="ease-out"
      initialOpacity={0}
      className="flex justify-center self-end"
    >
      <img
        src="jump.png"
        alt="Mamma Mia"
        className="max-w-[80vw] max-h-[80vh] animate-bounce drop-shadow-[0_0_20px_rgba(0,0,0,1)]"
      />
    </FadeContent>
  );
};

export default Home;
