import React from "react";
import CountUp from "./react-bits/CountUp";
import SplitText from "./react-bits/SplitText";
import FadeContent from "./react-bits/FadeContent";

const Loading = () => {
  return (
    <FadeContent
      blur={true}
      duration={1500}
      easing="ease-out"
      initialOpacity={0}
      className="flex justify-center self-center"
    >
      <div className="grid gap-14 justify-items-center">
        <div className="before:border-black dark:before:border-white before:border-s-2 before:border-t-2 relative before:absolute before:w-28 before:h-28 before:rounded-full before:animate-spin flex justify-center items-center">
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={0.1}
            className="count-up-text text-4xl font-semibold"
          />
        </div>
        <SplitText
          text="LOADING..."
          className="text-3xl font-semibold text-center"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.1}
          rootMargin="-50px"
        />
      </div>
    </FadeContent>
  );
};

export default Loading;
