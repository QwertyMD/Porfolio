function updateNavig() {
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
}

export { updateNavig };
