var data = {
    labels: ['Germany', 'France', 'UK'],
    datasets: [{
        data: [32.1, 28.5, 39.4],
        backgroundColor: [

            'rgba(243, 156, 18, 1)',
            'rgba(211, 84, 0, 1)',
            'rgba(241, 196, 15, 1)'

        ],
        borderWidth: 1
    }]
};


// Konfigurasi pie chart
var options = {
    responsive: true,
    maintainAspectRatio: false
};

// Menggambar pie chart
var ctx = document.getElementById('myPieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});

// Untuk Row 2 Menampilkan diagram garis
var sales = [{
        country: "United Kingdom",
        values: [2476886, 2600379],
        backgroundColor: 'yellow'
    },
    {
        country: "Germany",
        values: [1925113, 1925113],
        backgroundColor: 'red'
    },
    {
        country: "France",
        values: [1925113, 1800511],
        backgroundColor: 'orange'
    }
];





// Konversi data penjualan ke format yang digunakan oleh Chart.js
var chartData = {
    labels: ['2015', '2016'],
    datasets: sales.map((countryData, index) => ({
        label: countryData.country,
        data: countryData.values,
        // borderColor: countryData.backgroundColor, Using the specified backgroundColor for each country
        borderWidth: 1,
        fill: false
    }))
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
                text: 'Year'
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Value'
            }
        }
    }
};

// Menggambar diagram garis
var ctx = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',

    data: chartData,
    options: options
});

//// Diagram Batang untuk row 2
var kategori = [
    { category: 'Accessories', value: 7393616 },
    { category: 'Bikes', value: 26045215 },
    { category: 'Clothing', value: 4067070 }
];

// Convert data to the format used by Chart.js
var chartData = {
    labels: kategori.map(data => data.category),
    datasets: [{
        label: 'Value',
        data: kategori.map(data => data.value),
        backgroundColor: 'rgba(241, 196, 15, 1)', // Blue color for bars
        borderColor: 'rgba(211, 84, 0, 1)', // Border color for bars
        borderWidth: 1
    }]
};

// Configuration for the bar chart
var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            title: {
                display: true,
                text: 'Category'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Value'
            }
        }
    }
};

// Draw the bar chart
var ctx = document.getElementById('myBarChart').getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar', // Set chart type to 'bar'

    data: chartData,
    options: options
});