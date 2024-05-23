// // // Line Chart
// Draw the line chart for yearly revenue
const lineCtx = document.getElementById("myLineChart").getContext("2d");
let myLineChart;

function displayLineChartYearlyRevenue(yearlyRevenueData) {
  console.log("Re-rendering line chart for yearly revenue");

  const labelsYearlyRevenue = yearlyRevenueData.map((data) => data.year);
  const revenueYearlyRevenue = yearlyRevenueData.map((data) => data.revenue);

  if (myLineChart) {
    myLineChart.destroy();
  }

  myLineChart = new Chart(lineCtx, {
    type: "line",
    data: {
      labels: labelsYearlyRevenue,
      datasets: [
        {
          label: "Yearly Revenue",
          data: revenueYearlyRevenue,
          fill: false,
          borderColor: "rgba(52, 152, 219, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(52, 152, 219, 1)",
          pointRadius: 3,
          pointHoverRadius: 5,
          pointHitRadius: 10,
          pointHoverBorderColor: "rgba(52, 152, 219, 1)",
          pointHoverBackgroundColor: "#fff",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "Year",
          },
        },
        y: {
          title: {
            display: true,
            text: "Revenue",
          },
        },
      },
    },
  });
}

// Call the function to display line chart for yearly revenue
displayLineChartYearlyRevenue([
  {
    label: "Revenue",
    year: "2015",
    revenue: 6273281.0,
  },
  {
    label: "Revenue",
    year: "2016",
    revenue: 6621033.0,
  },
]);

// // // Bar Chart
const barOptions = {
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

// Filtering logic
const filteringByCat = document.getElementById("filteringByCategories");
const inputCheckboxCategories = filteringByCat.querySelectorAll(
  "input[type='checkbox']"
);
const filteringByYears = document.getElementById("filteringByYears");
const inputCheckboxYears = filteringByYears.querySelectorAll(
  "input[type='checkbox']"
);

let selectedCategories = [];
let selectedYears = [];

displayChartProductCategory([], []);

// Menambahkan event listener untuk semua checkbox kategori
inputCheckboxCategories.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      selectedCategories.push(checkbox.value);
    } else {
      const index = selectedCategories.indexOf(checkbox.value);
      if (index > -1) {
        selectedCategories.splice(index, 1);
      }
    }
    // Panggil fungsi untuk menampilkan grafik berdasarkan kategori dan tahun yang dipilih
    displayChartProductCategory(selectedCategories, selectedYears);
  });
});

// Menambahkan event listener untuk semua checkbox tahun
inputCheckboxYears.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      selectedYears.push(checkbox.value);
    } else {
      const index = selectedYears.indexOf(checkbox.value);
      if (index > -1) {
        selectedYears.splice(index, 1);
      }
    }
    // Panggil fungsi untuk menampilkan grafik berdasarkan kategori dan tahun yang dipilih
    displayChartProductCategory(selectedCategories, selectedYears);
  });
});

// Function to check all checkboxes by default
function checkAllCheckboxes() {
  inputCheckboxCategories.forEach((checkbox) => {
    checkbox.checked = true;
    // Trigger change event to display the chart
    checkbox.dispatchEvent(new Event("change"));
  });
  inputCheckboxYears.forEach((checkbox) => {
    checkbox.checked = true;
    // Trigger change event to display the chart
    checkbox.dispatchEvent(new Event("change"));
  });
}

// Call the function to check all checkboxes by default
checkAllCheckboxes();

// Event listeners for checkbox changes
inputCheckboxCategories.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      selectedCategories.push(checkbox.value);
    } else {
      const index = selectedCategories.indexOf(checkbox.value);
      if (index > -1) {
        selectedCategories.splice(index, 1);
      }
    }
    displayChartProductCategory(selectedCategories, selectedYears);
  });
});

inputCheckboxYears.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    console.log("Year checkbox changed:", checkbox.checked);
    if (checkbox.checked) {
      selectedYears.push(checkbox.value);
    } else {
      const index = selectedYears.indexOf(checkbox.value);
      if (index > -1) {
        selectedYears.splice(index, 1);
      }
    }
    displayChartProductCategory(selectedCategories, selectedYears);
  });
});

// Draw the bar chart by category and year
const barCtx = document.getElementById("myBarChart").getContext("2d");
let myBarChart;

function displayChartProductCategory(filteringProduct, filteringYears) {
  console.log("Re-rendering chart");
  fetch("./data/productCategory.json")
    .then((res) => res.json())
    .then((data) => {
      // Filter data by selected years
      const filteredByYears = data.productCategory.filter(
        (item) =>
          filteringYears.length === 0 || filteringYears.includes(item.year)
      );

      // Separate data for each year if both 2015 and 2016 are selected
      let aggregatedData2015 = [];
      let aggregatedData2016 = [];

      if (filteringYears.includes("2015")) {
        aggregatedData2015 = filteredByYears.filter(
          (item) => item.year === "2015"
        );
      }

      if (filteringYears.includes("2016")) {
        aggregatedData2016 = filteredByYears.filter(
          (item) => item.year === "2016"
        );
      }

      const aggregatedData = [...aggregatedData2015, ...aggregatedData2016];

      // Aggregate data by category
      const aggregatedDataByCategory = aggregatedData.reduce((acc, current) => {
        const category = acc.find((item) => item.label === current.label);
        if (category) {
          category[current.year] = current.revenue;
        } else {
          const newCategory = { label: current.label };
          newCategory[current.year] = current.revenue;
          acc.push(newCategory);
        }
        return acc;
      }, []);

      const labelsProductCategory = aggregatedDataByCategory.map(
        (cat) => cat.label
      );
      const revenue2015 = aggregatedDataByCategory.map(
        (cat) => cat["2015"] || 0
      ); // Use 0 if revenue data is not available
      const revenue2016 = aggregatedDataByCategory.map(
        (cat) => cat["2016"] || 0
      ); // Use 0 if revenue data is not available

      let filteredLabels = [];
      let filteredRevenue2015 = [];
      let filteredRevenue2016 = [];

      if (filteringProduct.length) {
        aggregatedDataByCategory.forEach((category) => {
          if (filteringProduct.includes(category.label)) {
            filteredLabels.push(category.label);
            filteredRevenue2015.push(category["2015"] || 0);
            filteredRevenue2016.push(category["2016"] || 0);
          }
        });
      } else {
        filteredLabels = labelsProductCategory;
        filteredRevenue2015 = revenue2015;
        filteredRevenue2016 = revenue2016;
      }

      if (myBarChart) {
        myBarChart.destroy();
      }

      myBarChart = new Chart(barCtx, {
        type: "bar",
        data: {
          labels: filteredLabels,
          datasets: [
            {
              label: "Revenue 2015",
              data: filteredRevenue2015,
              backgroundColor: "rgba(241, 196, 15, 1)",
              borderColor: "rgba(211, 84, 0, 1)",
              borderWidth: 1,
            },
            {
              label: "Revenue 2016",
              data: filteredRevenue2016,
              backgroundColor: "rgba(46, 204, 113, 1)",
              borderColor: "rgba(39, 174, 96, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: barOptions,
      });
    });
}

// Toggle button functionality
document.getElementById("toggle-button").addEventListener("click", () => {
  const navbarLinks = document.getElementById("navbar-links");
  const toggleButton = document.getElementById("toggle-button");
  navbarLinks.classList.toggle("active");
  toggleButton.classList.toggle("active");
});
