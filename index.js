// // Fetching bike sales data
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

// // Bar Chart for row 2
// const categories = [
//   { category: "Accessories", value: 7393616 },
//   { category: "Bikes", value: 26045215 },
//   { category: "Clothing", value: 4067070 },
// ];

// const barChartData = {
//   labels: categories.map((data) => data.category),
//   datasets: [
//     {
//       label: "Value",
//       data: categories.map((data) => data.value),
//       backgroundColor: "rgba(241, 196, 15, 1)",
//       borderColor: "rgba(211, 84, 0, 1)",
//       borderWidth: 1,
//     },
//   ],
// };

// const barOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     x: {
//       title: {
//         display: true,
//         text: "Category",
//       },
//     },
//     y: {
//       title: {
//         display: true,
//         text: "Value",
//       },
//     },
//   },
// };

// // Filtering logic
// const filteringByCat = document.getElementById("filteringByCategories");
// const inputCheckboxCategories = filteringByCat.querySelectorAll("input[type='checkbox']");
// let selectedCategories = [];
// displayChartProductCategory([]);

// inputCheckboxCategories.forEach((checkbox) => {
//   checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//       selectedCategories.push(checkbox.value);
//     } else {
//       const index = selectedCategories.indexOf(checkbox.value);
//       if (index > -1) {
//         selectedCategories.splice(index, 1);
//       }
//     }
//     displayChartProductCategory(selectedCategories);
//   });
// });

// // Draw the bar chart by category
// const barCtx = document.getElementById("myBarChart").getContext("2d");
// let myBarChart;

// function displayChartProductCategory(filteringProduct) {
//   console.log("Re-rendering chart");
//   fetch("./data/productCategory.json")
//     .then((res) => res.json())
//     .then((data) => {
//       const labelsProductCategory = data.productCategory.map((cat) => cat.label);
//       const revenueProductCategory = data.productCategory.map((cat) => cat.revenue);

//       let filteredLabel = [];
//       let filteredRevenue = [];

//       if (filteringProduct.length) {
//         data.productCategory.forEach((category) => {
//           if (filteringProduct.includes(category.label)) {
//             filteredLabel.push(category.label);
//             filteredRevenue.push(category.revenue);
//           }
//         });
//       } else {
//         filteredLabel = labelsProductCategory;
//         filteredRevenue = revenueProductCategory;
//       }

//       if (myBarChart) {
//         myBarChart.destroy();
//       }

//       myBarChart = new Chart(barCtx, {
//         type: "bar",
//         data: {
//           labels: filteredLabel,
//           datasets: [
//             {
//               label: "Revenue",
//               data: filteredRevenue,
//               borderWidth: 1,
//             },
//           ],
//         },
//         options: barOptions,
//       });
//     });
// }

// // Toggle button functionality
// document.getElementById("toggle-button").addEventListener("click", () => {
//   const navbarLinks = document.getElementById("navbar-links");
//   const toggleButton = document.getElementById("toggle-button");
//   navbarLinks.classList.toggle("active");
//   toggleButton.classList.toggle("active");
// });
