// Toggle button functionality
document.getElementById("toggle-button").addEventListener("click", () => {
  const navbarLinks = document.getElementById("navbar-links");
  const toggleButton = document.getElementById("toggle-button");
  navbarLinks.classList.toggle("active");
  toggleButton.classList.toggle("active");
});