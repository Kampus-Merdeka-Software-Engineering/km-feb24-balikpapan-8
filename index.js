// // Fetching bike sales data
let Rev = document.getElementById("Revenue"); // revenue
let prof = document.getElementById("profit"); // profit
let Isold = document.getElementById("Item-sold"); // item sold
function totalRevenue() {
  fetch("./data/productCategory.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Log the data to check its structure

      if (!data.productCategory) {
        throw new Error("bikesales property is missing in the JSON data");
      }

      const totalRevenue = data.productCategory.reduce((sum, sales) => {
        return sum + sales.revenue;
      }, 0);

      Rev.textContent = `$${totalRevenue}`;
      console.log(totalRevenue);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
function totalProfit() {
  fetch("./data/productCategory.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Log the data to check its structure

      if (!data.yearlyProfit) {
        throw new Error("bikesales property is missing in the JSON data");
      }

      const totalProfit = data.yearlyProfit.reduce((sum, sales) => {
        return sum + sales.profit;
      }, 0);

      prof.textContent = `$${totalProfit}`;
      console.log(totalProfit);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function totalItemSold() {
  fetch("./data/productCategory.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Log the data to check its structure

      if (!data.yearlyItemSold) {
        throw new Error("bikesales property is missing in the JSON data");
      }

      const totalItemSold = data.yearlyItemSold.reduce((sum, sales) => {
        return sum + sales.quantityOrdered;
      }, 0);

      Isold.textContent = `${totalItemSold}`;
      console.log(totalItemSold);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
function country() {
  let countrySelect = document.getElementById("country");
  let yearSelect = document.getElementById("year");

  // Define a function to handle selection change
  function handleSelectionChange() {
    let total;
    let selectedCountry = countrySelect.value;
    let selectedYear = yearSelect.value;
    console.log(`You selected ${selectedCountry} in ${selectedYear}`);
    if (!selectedCountry && !selectedYear) {
      totalRevenue();
    }
    if (selectedCountry === "United Kingdom" && selectedYear === "2015") {
      console.log("It's UK 2015");
      Rev.textContent = `$${2220143}`;
    } else if (selectedCountry === "France" && selectedYear === "2015") {
      console.log("It's UK 2015");
      Rev.textContent = `$${1871282}`;
    } else if (selectedCountry === "Germany" && selectedYear === "2015") {
      console.log("It's UK 2015");
      Rev.textContent = `$${1925113}`;
    } else if (
      selectedCountry === "United Kingdom" &&
      selectedYear === "2016"
    ) {
      console.log("It's UK 2016");
      Rev.textContent = `$${2600379}`;
    } else if (selectedCountry === "France" && selectedYear === "2016") {
      console.log("It's France 2016");
      Rev.textContent = `$${1800511}`;
    } else if (selectedCountry === "Germany" && selectedYear === "2016") {
      console.log("It's Germany 2016");
      Rev.textContent = `$${2220143}`;
    } else {
      if (selectedCountry === "United Kingdom") {
        total = 2476886 + 2600379;
        Rev.textContent = `$${total}`;
      } else if (selectedCountry === "France") {
        total = 1871282 + 1800511;
        Rev.textContent = `$${total}`;
      } else if (selectedCountry === "Germany") {
        total = 1925113.0 + 2220143.0;
        Rev.textContent = `$${total}`;
      }
    }
  }

  // Add event listeners for both country and year selection
  countrySelect.addEventListener("change", handleSelectionChange);
  yearSelect.addEventListener("change", handleSelectionChange);
}

totalRevenue();
totalProfit();
totalItemSold();
country();



