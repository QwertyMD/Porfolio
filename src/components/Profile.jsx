import { LuFacebook, LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import React from "react";
const Profile = () => {
  const socialInfo = {
    facebook: {
      link: "https://www.facebook.com/aaa.ryan01",
      icon: LuFacebook,
    },
    instagram: {
      link: "https://www.instagram.com/aaa_ryan01",
      icon: LuInstagram,
    },
    github: {
      link: "https://github.com/QwertyMD",
      icon: LuGithub,
    },
    linkedin: {
      link: "https://www.linkedin.com/in/aaa-ryan01",
      icon: LuLinkedin,
    },
  };
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_2fr] transition-shadow w-full lg:max-w-[80vw] xl:max-w-[60vw] my-5 p-10 lg:p-20 rounded-xl relative before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:rounded-xl before:shadow-[0_0_10px] before:animate-pulse z-10 before:-z-10">
      <div className="grid gap-10">
        <div className="grid justify-items-center gap-7">
          <img
            src="mario.jpg"
            alt="Mamma Mia"
            className="w-48 h-48 rounded-full outline"
          />
          <div className="flex gap-5">
            {Object.keys(socialInfo).map((e) => {
              const IconComponent = socialInfo[e].icon;
              return (
                <a href={socialInfo[e].link} target="_blank" key={e}>
                  <IconComponent
                    size={28}
                    className="cursor-pointer transition-[shadow_transform] hover:drop-shadow-[0_0_5px] hover:scale-110"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="space-y-3 text-center">
          <p className="text-3xl xl:text-4xl">Aaryan Dhakal</p>
          <p>he/him (18)</p>
        </div>
      </div>
      <div className="space-y-5 justify-items-center lg:justify-items-start">
        <p className="text-3xl xl:text-4xl">Who am I?</p>
        <p className="text-justify text-lg">It's-A Me, Mario!</p>
      </div>
    </div>
  );
};

export default Profile;
