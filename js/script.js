let mailTo = document.querySelectorAll(".email"),
    telTo = document.querySelectorAll(".number"),
    bars = document.querySelector(".bars"),
    closeSidebar = document.querySelector(".close-sidebar"),
    sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", () => {
    sidebar.classList.toggle("transform-right");
})
closeSidebar.addEventListener('click', () => {
    sidebar.classList.add("transform-right");
})
sidebar.addEventListener("click", (e) => {
  if (e.target) {
    sidebar.classList.add("transform-right");
  }
});