let bars = document.querySelector(".bars"),
  closeSidebar = document.querySelector(".close-sidebar2"),
  sidebar = document.querySelector(".sidebar2");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("transform-right");
});
closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("transform-right");
});
sidebar.addEventListener('click', (e) => {
  if (e.target) {
    sidebar.classList.add("transform-right");
  }
})
