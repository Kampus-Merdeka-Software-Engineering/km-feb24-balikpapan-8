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
