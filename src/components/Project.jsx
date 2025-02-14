import React from "react";

const Project = () => {
  const projects = {
    "AIM Trainer": {
      link: "https://github.com/QwertyMD/AIM-Trainer",
      img: "",
    },
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
    "ToDo List": {
      link: "https://github.com/QwertyMD/ToDo-List",
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
    <div className="grid gap-5 lg:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-5">
      {Object.keys(projects).map((e) => (
        <a
          href={projects[e].link}
          target="_blank"
          key={e}
          className="relative before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 grid gap-5 p-5 before:rounded-xl before:shadow-[0_0_7px_rgba(0,0,0,1)] dark:before:shadow-[0_0_7px_rgba(255,255,255,1)] before:animate-pulse hover:scale-105 transition-transform opacity-60 hover:opacity-100 before:hover:animate-none"
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
  );
};

export default Project;
