import { LuFacebook, LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import React from "react";
const ProfilePage = () => {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_2fr] border-2 border-white lg:max-w-[80vw] xl:max-w-[60vw] m-5 p-7 lg:p-20 rounded-xl">
      <div className="grid gap-10">
        <div className="grid justify-items-center gap-7">
          <img
            src="https://wallpapers-clan.com/wp-content/uploads/2024/03/mario-pfp-03.jpg"
            alt="heker"
            className="w-48 h-48 rounded-full animate-pulse"
          />
          <div className="flex gap-5">
            <a href="">
              <LuFacebook
                size={28}
                className="cursor-pointer transition duration-300 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] hover:scale-110"
              />
            </a>
            <a href="">
              <LuInstagram
                size={28}
                className="cursor-pointer transition duration-300 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] hover:scale-110"
              />
            </a>
            <a href="">
              <LuGithub
                size={28}
                className="cursor-pointer transition duration-300 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] hover:scale-110"
              />
            </a>
            <a href="">
              <LuLinkedin
                size={28}
                className="cursor-pointer transition duration-300 hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] hover:scale-110"
              />
            </a>
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

export default ProfilePage;
