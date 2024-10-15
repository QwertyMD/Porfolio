const scroll = document.getElementById("switch");
const profile = document.querySelector(".profile-content");
const project = document.querySelector(".project-content");
let isDefault = true;

scroll.addEventListener("click", () => {
  if (isDefault) {
    scroll.classList.add("rotate");
    profile.style.transform = "translate(-100vw)";
    project.style.transform = "translate(0)";
  } else {
    scroll.classList.remove("rotate");
    profile.style.transform = "";
    project.style.transform = "";
  }
  isDefault = !isDefault;
});
