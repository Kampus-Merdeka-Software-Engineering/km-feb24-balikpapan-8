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
  let h1Elements = document.getElementsByTagName("h1");

  for (let k = 0; k < h1Elements.length; k++) {
    h1Elements[k].style.color = "black";
    h1Elements[k].style.transition = "color 0.5s";
  }

  for (let i = 0; i < salesperformance.length; i++) {
    salesperformance[i].style.color = "black";
    salesperformance[i].style.transition = "color 0.5s";
  }

  body.style.transition = "background-color 0.5s, background 0.5s";
  darkmodeCheckbox.addEventListener("change", () => {
    if (darkmodeCheckbox.checked) {
     
      body.style.background = "rgb(68, 1, 194)";
      for (let i = 0; i < salesperformance.length; i++) {
        salesperformance[i].style.color = "white";
      }
      for (let k = 0; k < h1Elements.length; k++) {
        h1Elements[k].style.color = "white";
      }
    } else {
      console.log("Dark mode is off");
      body.style.background = "white";
      for (let i = 0; i < salesperformance.length; i++) {
        salesperformance[i].style.color = "black";
      }
      for (let k = 0; k < h1Elements.length; k++) {
        h1Elements[k].style.color = "black";
      }
    }
  });
}

darkmodeToggle();
// Function to set the default body color
document.addEventListener("DOMContentLoaded", function() {
  // document.body.style.background = "linear-gradient(135deg, #f1f512, #b9750e)";
  document.body.style.background = "white";
});

