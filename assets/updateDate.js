function updateDate() {
  const newDate = new Date();
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;
  const dateSection = document.querySelector(".date-section");
  dateSection.innerHTML = `${day}/${month}/${year}`;
}

export { updateDate };
