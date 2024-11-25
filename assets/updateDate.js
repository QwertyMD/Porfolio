function updateDate() {
  const currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;
  const dateSection = document.querySelector(".date-section");
  dateSection.innerHTML = `${day}/${month}/${year}`;
}

export { updateDate };
