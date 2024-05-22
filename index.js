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



let Rev = document.getElementById("Revenue")

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

        Rev.textContent = `$${totalRevenue}`
        console.log(totalRevenue);
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
    });


// fetch("bikesales.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const totalRevenue = data.bikesales.reduce((sum, sales) => {
//       return sum + sales.Revenue; // Ensure the property name matches your JSON structure
//     }, 0);

//     console.log("Total Revenue:", totalRevenue);
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

// // Pie Chart configuration
// const pieData = {
//   labels: ["Germany", "France", "UK"],
//   datasets: [
//     {
//       data: [32.1, 28.5, 39.4],
//       backgroundColor: [
//         "rgba(243, 156, 18, 1)",
//         "rgba(211, 84, 0, 1)",
//         "rgba(241, 196, 15, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// const pieOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// const pieCtx = document.getElementById("myPieChart").getContext("2d");
// const myPieChart = new Chart(pieCtx, {
//   type: "pie",
//   data: pieData,
//   options: pieOptions,
// });

// // Line Chart configuration
// const sales = [
//   {
//     country: "United Kingdom",
//     values: [2476886, 2600379],
//     borderColor: "yellow",
//   },
//   {
//     country: "Germany",
//     values: [1925113, 1925113],
//     borderColor: "red",
//   },
//   {
//     country: "France",
//     values: [1925113, 1800511],
//     borderColor: "orange",
//   },
// ];

// const lineChartData = {
//   labels: ["2015", "2016"],
//   datasets: sales.map((countryData) => ({
//     label: countryData.country,
//     data: countryData.values,
//     borderColor: countryData.borderColor,
//     borderWidth: 1,
//     fill: false,
//   })),
// };

// const lineOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     x: {
//       display: true,
//       title: {
//         display: true,
//         text: "Year",
//       },
//     },
//     y: {
//       display: true,
//       title: {
//         display: true,
//         text: "Value",
//       },
//     },
//   },
// };

// const lineCtx = document.getElementById("myLineChart").getContext("2d");
// const myLineChart = new Chart(lineCtx, {
//   type: "line",
//   data: lineChartData,
//   options: lineOptions,
// });


