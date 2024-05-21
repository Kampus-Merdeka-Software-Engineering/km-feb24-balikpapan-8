var data = {
    labels: ["Germany", "France", "UK"],
    datasets: [{
        data: [32.1, 28.5, 39.4],
        backgroundColor: [
            "rgba(243, 156, 18, 1)",
            "rgba(211, 84, 0, 1)",
            "rgba(241, 196, 15, 1)",
        ],
        borderWidth: 1,
    }, ],
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
var sales = [{
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

// Konfigurasi diagram garis
var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: "Year",
            },
        },
        y: {
            display: true,
            title: {
                display: true,
                text: "Value",
            },
        },
    },
};

// Menggambar diagram garis
var ctx = document.getElementById("myLineChart").getContext("2d");
var myLineChart = new Chart(ctx, {
    type: "line",

    data: chartData,
    options: options,
});

//// Diagram Batang untuk row 2
var kategori = [
    { category: "Accessories", value: 7393616 },
    { category: "Bikes", value: 26045215 },
    { category: "Clothing", value: 4067070 },
];

// Convert data to the format used by Chart.js
var chartData = {
    labels: kategori.map((data) => data.category),
    datasets: [{
        label: "Value",
        data: kategori.map((data) => data.value),
        backgroundColor: "rgba(241, 196, 15, 1)", // Blue color for bars
        borderColor: "rgba(211, 84, 0, 1)", // Border color for bars
        borderWidth: 1,
    }, ],
};

// Configuration for the bar chart
var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            title: {
                display: true,
                text: "Category",
            },
        },
        y: {
            title: {
                display: true,
                text: "Value",
            },
        },
    },
};

// ==== filtering start here ====
const filteringByCat = document.getElementById("filteringByCategories");
const inputCheckboxCategories = filteringByCat.querySelectorAll(
    "input[type='checkbox']"
);
let selectedCategories = [];
displayChartProductCategory([]);

for (let i = 0; i < inputCheckboxCategories.length; i++) {
    inputCheckboxCategories[i].addEventListener("change", () => {
        if (inputCheckboxCategories[i].checked) {
            selectedCategories.push(inputCheckboxCategories[i].value);
        } else {
            //menghapus spesifik elemen dari suatu array
            const index = selectedCategories.indexOf(
                inputCheckboxCategories[i].value
            );
            if (index > -1) {
                selectedCategories.splice(index, 1);
            }
        }

        displayChartProductCategory(selectedCategories);
    });
}

// Draw the bar chart by category
var ctx = document.getElementById("myBarChart").getContext("2d");

let myBarChart;

function displayChartProductCategory(filteringProduct) {
    console.log("melakukan re rendering");
    fetch("./data/productCategory.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let labelsProductCategory = [];
            let revenueProductCategory = [];

            for (let i = 0; i < data.productCategory.length; i++) {
                labelsProductCategory.push(data.productCategory[i].label);
                revenueProductCategory.push(data.productCategory[i].revenue);
            }

            // olah data
            let filteredLabel = [];
            let filteredRevenue = [];

            if (filteringProduct.length != 0) {
                data.productCategory.forEach((category) => {
                    if (filteringProduct.includes(category.label)) {
                        filteredLabel.push(category.label);
                        filteredRevenue.push(category.revenue);
                    }
                });
            } else {
                // nilainya sama kaya original karena user tidak melakukan flltering
                filteredLabel = labelsProductCategory;
                filteredRevenue = revenueProductCategory;
            }

            if (myBarChart) {
                myBarChart.destroy();
            }

            myBarChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: filteredLabel,
                    datasets: [{
                        label: "2015",
                        data: filteredRevenue.map(entry => entry[0]), // Mendapatkan data pendapatan tahun 2015
                        backgroundColor: 'rgba(255, 230, 0, 1)', // Warna orange untuk latar belakang tanpa transparansi
                        borderColor: 'rgba(255, 230, 0, 1)', // Warna orange untuk border tanpa transparansi
                        borderWidth: 1,
                    }, {
                        label: "2016",
                        data: filteredRevenue.map(entry => entry[1]), // Mendapatkan data pendapatan tahun 2016
                        backgroundColor: 'rgba(255, 190, 0, 1)', // Warna kuning untuk latar belakang tanpa transparansi
                        borderColor: 'rgba(255, 270, 0, 1)', // Warna kuning untuk border tanpa transparansi
                        borderWidth: 1,
                    }],
                },
                options: options,
            });
        });
}

document.getElementById('toggle-button').addEventListener('click', function() {
    const navbarLinks = document.getElementById('navbar-links');
    const toggleButton = document.getElementById('toggle-button');
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');


    fetch('data.json')
        .then(function(response) {
            if (response.ok) {
                return response.json(); // Corrected this line
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(function(data) {
            console.log(data);
            createChart(data, 'bar');
        })
        .catch(function(error) {
            console.error('There was a problem with the fetch operation:', error);
        });
});