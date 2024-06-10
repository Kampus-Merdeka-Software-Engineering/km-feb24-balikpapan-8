// Fetch the JSON data for top products
fetch("./data/topProduct.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(function (data) {
    displayTopFiveProducts(data, "bar");
  })
  .catch(function (error) {
    console.error("Error fetching top product data:", error);
  });

// Fetch the JSON data for gender and age
fetch("./data/genderandage.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(function (data) {
    age(data.salesData);
  })
  .catch(function (error) {
    console.error("Error fetching gender and age data:", error);
  });

// Display top five products chart
function displayTopFiveProducts(data, chartType) {
  const { labels, datasets } = prepareDataForChart(data);
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      },
      x: {
        ticks: {
          font: {
            size: 9
          }
        }
      }
    }
  };

  new Chart(document.getElementById("TopProduct"), {
    type: chartType,
    data: { labels, datasets },
    options: chartOptions
  });
}

// Prepare data for top five products chart
function prepareDataForChart(data) {
  const labels = data.map(row => row.ProductName);
  const datasets = [{
    label: 'Top 5 product',
    data: data.map(row => row.revenue),
    borderWidth: 1,
    backgroundColor: 'rgba(241, 196, 15, 1)'
  }];

  return { labels, datasets };
}

// Display age chart
function age(data) {
  const ageGroups = ["Adults", "Young Adults", "Youth", "Seniors"];
  const years = ["2015", "2016"];
  const genders = ["Male", "Female"];

  const datasets = genders.map((gender) => {
    return {
      label: gender,
      data: ageGroups.map((ageGroup) => {
        return years.reduce((sum, year) => {
          return sum + (data[year][ageGroup][gender] || 0);
        }, 0);
      }),
      borderWidth: 1,
      backgroundColor: gender === "Male" ? "rgba(241, 196, 15, 1)" : "rgba(211, 84, 0, 1)",
      borderColor: gender === "Female" ? "rgba(241, 196, 15, 1)" : "rgba(211, 84, 0, 1)",
    };
  });

  new Chart(document.getElementById("ageBarChart"), {
    type: "bar",
    data: {
      labels: ageGroups,
      datasets: datasets,
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          barPercentage: 0.2,
        },
      },
    },
  });
}

// Display pie chart
var pieData = {
  labels: ["Germany", "France", "UK"],
  datasets: [
    {
      data: [32.1, 28.5, 39.4],
      backgroundColor: [
        "rgba(243, 156, 18, 1)",
        "rgba(211, 84, 0, 1)",
        "rgba(241, 196, 15, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

var pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

var ctxPie = document.getElementById("myPieChart").getContext("2d");
new Chart(ctxPie, {
  type: "pie",
  data: pieData,
  options: pieOptions,
});

// Display line chart for sales
var salesData = [
  {
    country: "United Kingdom",
    values: [2476886, 2600379],
    backgroundColor: "yellow",
  },
  {
    country: "Germany",
    values: [1925113, 1925113],
    backgroundColor: "red",
  },
  {
    country: "France",
    values: [1925113, 1800511],
    backgroundColor: "orange",
  },
];

var lineChartData = {
  labels: ["2015", "2016"],
  datasets: salesData.map((countryData) => ({
    label: countryData.country,
    data: countryData.values,
    borderWidth: 1,
    fill: false,
    backgroundColor: countryData.backgroundColor,
  })),
};

var lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
};


