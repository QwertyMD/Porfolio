import React from "react";
import FadeContent from "./react-bits/FadeContent";

const Project = () => {
  const projects = {
    "Joke Generator": {
      link: "https://github.com/QwertyMD/Joke-Generator",
      img: "",
    },
    "Marriage Card": {
      link: "https://github.com/QwertyMD/Marriage-Card",
      img: "",
    },
    "Movie App": {
      link: "https://github.com/QwertyMD/Movie-App",
      img: "",
    },
    "Music Player": {
      link: "https://github.com/QwertyMD/Music-Player",
      img: "",
    },
    "Password Manager": {
      link: "https://github.com/QwertyMD/Password-Manager",
      img: "",
    },
    "ToDo App": {
      link: "https://github.com/QwertyMD/ToDo-App",
      img: "",
    },
    "Traffic Analyzer": {
      link: "https://github.com/QwertyMD/Traffic-Analyzer",
      img: "",
    },
    "Weather App": {
      link: "https://github.com/QwertyMD/Weather-App",
      img: "",
    },
    "Whack A Mole": {
      link: "https://github.com/QwertyMD/Whack-A-Mole",
      img: "",
    },
  };
  return (
    <FadeContent
      blur={true}
      duration={500}
      easing="ease-out"
      initialOpacity={0}
      className="flex justify-center self-center"
    >
      <div className="flex flex-wrap justify-center gap-10 my-5 max-w-4xl">
        {Object.keys(projects).map((e) => (
          <a
            href={projects[e].link}
            target="_blank"
            key={e}
            className="relative before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 grid justify-items-center gap-5 p-5 before:rounded-xl before:shadow-[0_0_10px] hover:before:shadow-[0_0_20px] before:animate-pulse hover:scale-105 transition-transform opacity-60 hover:opacity-100 w-56"
          >
            <img
              src="https://media.tenor.com/L2NVsm9IRsUAAAAi/mario-bros-star-star-arcade.gif"
              alt="Super Star"
              className="w-32 h-32 rounded-lg"
            />
            <p className="text-lg text-center">{e}</p>
          </a>
        ))}
      </div>
    </FadeContent>
  );
};

export default Project;
