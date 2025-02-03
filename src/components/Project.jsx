import React from "react";

const Project = () => {
  const projects = {
    "AIM Trainer": {
      link: "https://qwertymd.github.io/AIM-Trainer",
      img: "",
    },
    "Joke Generator": {
      link: "https://qwertymd.github.io/Joke-Generator",
      img: "",
    },
    "Marriage Card": {
      link: "https://qwertymd.github.io/Marriage-Card",
      img: "",
    },
    "Movie App": {
      link: "https://qwertymd.github.io/Movie-App",
      img: "",
    },
    "Music Player": {
      link: "https://qwertymd.github.io/Music-Player",
      img: "",
    },
    "ToDo List": {
      link: "https://qwertymd.github.io/ToDo-List",
      img: "",
    },
    "Weather App": {
      link: "https://qwertymd.github.io/Weather-App",
      img: "",
    },
    "Whack A Mole": {
      link: "https://qwertymd.github.io/Whack-A-Mole",
      img: "",
    },
  };
  return (
    <div className="grid gap-5 lg:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-5">
      {Object.keys(projects).map((e) => (
        <a
          href={projects[e].link}
          target="_blank"
          key={e}
          className="relative before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 grid p-5 pt-7 before:rounded-xl before:shadow-[0_0_7px_1px_rgba(255,255,255,1)] before:animate-pulse hover:scale-105 transition"
        >
          <img
            src="https://media.tenor.com/L2NVsm9IRsUAAAAi/mario-bros-star-star-arcade.gif"
            alt="img"
            className="w-32 h-32 rounded-lg animate-bounce"
          />
          <p className="text-lg text-center">{e}</p>
        </a>
      ))}
    </div>
  );
};

export default Project;
