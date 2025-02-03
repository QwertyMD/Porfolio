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
    <div className="grid gap-10 lg:grid-cols-[1fr_2fr] transition shadow-[0_0_7px_1px_rgba(255,255,255,1)] hover:shadow-[0_0_14px_2px_rgba(255,255,255,1)] lg:max-w-[80vw] xl:max-w-[60vw] my-5 p-5 lg:p-20 rounded-xl">
      <div className="grid gap-10">
        <div className="grid justify-items-center gap-7">
          <img
            src="src/assets/mario.jpg"
            alt="heker"
            className="w-48 h-48 rounded-full animate-pulse"
          />
          <div className="flex gap-5">
            {Object.keys(socialInfo).map((e) => {
              const IconComponent = socialInfo[e].icon;
              return (
                <a href={socialInfo[e].link} target="_blank" key={e}>
                  <IconComponent
                    size={28}
                    className="cursor-pointer transition hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:scale-110"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="grid justify-items-center gap-3">
          <p className="text-3xl xl:text-4xl">Aaryan Dhakal</p>
          <p>he/him (18)</p>
        </div>
      </div>
      <div className="grid gap-5 content-center justify-items-center lg:justify-items-start">
        <p className="text-3xl xl:text-4xl">Who am I?</p>
        <p className="text-lg text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sit
          dolore iure et dolorum ad debitis fugiat magnam dolorem officia
          tenetur vitae exercitationem necessitatibus aspernatur, perspiciatis
          possimus vel sequi adipisci pariatur alias consequatur veritatis
          aliquam. Ratione fuga accusamus soluta consequatur eaque repellat,
          explicabo porro at sed hic facilis quia dolore labore, numquam eveniet
          ad fugiat magni. Repudiandae, aperiam nisi voluptate aut rem doloribus
          veniam error consequatur sed ea quod!
        </p>
      </div>
    </div>
  );
};

export default Profile;
