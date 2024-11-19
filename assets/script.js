const timeSection = document.querySelector(".time-section");
const dateSection = document.querySelector(".date-section");
const currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const period = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  timeSection.innerHTML = `${hours}:${minutes} ${period}`;
}

updateTime();
day = day < 10 ? `0${day}` : day;
month = month < 10 ? `0${month}` : month;
dateSection.innerHTML = `${day}/${month}/${year}`;
setInterval(updateTime, 1000);

const navItems = document.querySelectorAll("nav li");
const activeIndicators = document.querySelectorAll("nav .active");
const sections = document.querySelectorAll(".home, .profile, .project");

navItems.forEach((navItem, index) => {
  navItem.addEventListener("click", () => {
    activeIndicators.forEach((indicator, i) => {
      indicator.classList.toggle("scale-0", i !== index);
      indicator.classList.toggle("opacity-0", i !== index);
    });

    sections.forEach((section, i) => {
      section.classList.toggle("scale-0", i !== index);
      section.classList.toggle("opacity-0", i !== index);
    });
  });
});
