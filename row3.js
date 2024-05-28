const barGender = document.getElementById("GenderBarchart");
const ageBarchart = document.getElementById("ageBarChart");
function gender() {
  new Chart(barGender, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
function age() {
  new Chart(ageBarchart, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
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

var data = {
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

// Konfigurasi pie chart
var options = {
  responsive: true,
  maintainAspectRatio: false,
};

// Menggambar pie chart
var ctx = document.getElementById("myPieChart").getContext("2d");
var myPieChart = new Chart(ctx, {
  type: "pie",
  data: data,
  options: options,
});

// Untuk Row 2 Menampilkan diagram garis
var sales = [
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

// Konversi data penjualan ke format yang digunakan oleh Chart.js
var chartData = {
  labels: ["2015", "2016"],
  datasets: sales.map((countryData, index) => ({
    label: countryData.country,
    data: countryData.values,
    // borderColor: countryData.backgroundColor, Using the specified backgroundColor for each country
    borderWidth: 1,
    fill: false,
  })),
};

gender();
age();
