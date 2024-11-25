function updateTime() {
  const newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let period = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const timeSection = document.querySelector(".time-section");
  timeSection.innerHTML = `${hours}:${minutes} ${period}`;
}

export { updateTime };
