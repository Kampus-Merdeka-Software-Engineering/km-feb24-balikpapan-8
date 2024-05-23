// Toggle button functionality
document.getElementById("toggle-button").addEventListener("click", () => {
  const navbarLinks = document.getElementById("navbar-links");
  const toggleButton = document.getElementById("toggle-button");
  navbarLinks.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

function darkmodeToggle() {
  let darkmodeCheckbox = document.getElementById("darkmode-toggle");
  let salesperformance = document.getElementsByClassName("range");
  let body = document.body;

  // Set font color to black for salesperformance elements initially
  for (let i = 0; i < salesperformance.length; i++) {
    salesperformance[i].style.color = "black";
    salesperformance[i].style.transition = "color 0.5s";
  }
  body.style.transition = "background-color 0.5s";
  darkmodeCheckbox.addEventListener("change", () => {
    if (darkmodeCheckbox.checked) {
      console.log("Dark mode is on");
      body.style.background = "linear-gradient(180deg, #000000, #ffff00)"; // Black to yellow gradient when dark mode is on
      // Set font color to white for salesperformance elements when dark mode is on
      for (let i = 0; i < salesperformance.length; i++) {
        salesperformance[i].style.color = "white";
      }
    } else {
      console.log("Dark mode is off");
      body.style.background = "linear-gradient(180deg, #ffffff, #ffff00)"; // White to yellow gradient when dark mode is off
      // Set font color to black for salesperformance elements when dark mode is off
      for (let i = 0; i < salesperformance.length; i++) {
        salesperformance[i].style.color = "black";
      }
    }
  });
}

darkmodeToggle();
