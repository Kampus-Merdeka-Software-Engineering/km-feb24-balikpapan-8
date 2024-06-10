// // Fetching bike sales data
let Rev = document.getElementById("Revenue"); // revenue
let prof = document.getElementById("profit"); // profit
let Isold = document.getElementById("Item-sold"); // item sold
function fetchDataAndCalculateTotals() {
  fetch("./data/productCategory.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Log the data to check its structure

      if (!data.productCategory || !data.yearlyProfit || !data.yearlyItemSold) {
        throw new Error("Required properties are missing in the JSON data");
      }

      const totalRevenue = data.productCategory.reduce(
        (sum, sales) => sum + sales.revenue,
        0
      );
      const totalProfit = data.yearlyProfit.reduce(
        (sum, sales) => sum + sales.profit,
        0
      );
      const totalItemSold = data.yearlyItemSold.reduce(
        (sum, sales) => sum + sales.quantityOrdered,
        0
      );

      Rev.textContent = `$${totalRevenue}`;
      prof.textContent = `$${totalProfit}`;
      Isold.textContent = `${totalItemSold}`;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Call the function to fetch data and calculate totals

function country() {
  let countrySelect = document.getElementById("country");
  let yearSelect = document.getElementById("year");

  // Define a function to handle selection change
  function handleSelectionChange() {
    let selectedCountry = countrySelect.value;
    let selectedYear = yearSelect.value;

    fetch("./data/scorecardData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let filteredData;
        if (!selectedCountry && !selectedYear) {
          // If no country or year selected, use all data
          filteredData = data.scorecard;
        } else if (!selectedCountry && selectedYear) {
          // If no country selected but year is selected, filter data for the selected year
          filteredData = data.scorecard.filter(
            (item) => item.year === parseInt(selectedYear)
          );
        } else if (selectedYear) {
          // If both country and year selected, filter data for the selected country and year
          filteredData = data.scorecard.filter(
            (item) =>
              item.country === selectedCountry &&
              item.year === parseInt(selectedYear)
          );
        } else {
          // If no year selected, filter data for the selected country
          filteredData = data.scorecard.filter(
            (item) => item.country === selectedCountry
          );
        }

        // Calculate total sums
        let sumRevenue = filteredData.reduce(
          (sum, item) => sum + item.revenue,
          0
        );
        let sumProfit = filteredData.reduce(
          (sum, item) => sum + item.profit,
          0
        );
        let sumItemSold = filteredData.reduce(
          (sum, item) => sum + item.itemsSold,
          0
        );

        // Update UI with total sums
        Rev.textContent = `$${sumRevenue}`;
        prof.textContent = `$${sumProfit}`;
        Isold.textContent = `${sumItemSold}`;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  // Add event listeners for both country and year selection
  countrySelect.addEventListener("change", handleSelectionChange);
  yearSelect.addEventListener("change", handleSelectionChange);
}

// Call the country function to initialize
country();

fetchDataAndCalculateTotals();
country();
