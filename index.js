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