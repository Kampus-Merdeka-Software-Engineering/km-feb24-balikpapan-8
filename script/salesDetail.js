let productSums = [];

async function getData() {
  try {
    const response = await fetch("./data/bikesales.json");
    const data = await response.json();

    const productSumsMap = {};

    data.bikesalesdata.forEach((sale) => {
      const {
        Product,
        Product_Category,
        Country,
        Revenue,
        Profit,
        Order_Quantity,
      } = sale;

      const key = `${Product}-${Country}`;

      if (!productSumsMap[key]) {
        productSumsMap[key] = {
          Product,
          Product_Category,
          Country,
          Revenue: 0,
          Profit: 0,
          Order_Quantity: 0,
        };
      }

      productSumsMap[key].Revenue += parseFloat(Revenue);
      productSumsMap[key].Profit += parseFloat(Profit);
      productSumsMap[key].Order_Quantity += parseInt(Order_Quantity, 10);
    });

    productSums = Object.values(productSumsMap);
    populateTable(productSums);

    // Initialize DataTable after the table has been populated
    $("#myTable").DataTable({
      columnDefs: [
        {
          targets: [0],
          orderData: [0, 1],
        },
        {
          targets: [1],
          orderData: [1, 0],
        },
        {
          targets: [4],
          orderData: [4, 0],
        },
      ],
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function populateTable(data) {
  let table = "";
  data.forEach((product) => {
    table += `
      <tr>
          <td>${product.Product}</td>
          <td>${product.Product_Category}</td>
          <td>${product.Country}</td>
          <td>$${product.Revenue.toFixed(2)}</td>
          <td>$${product.Profit.toFixed(2)}</td>
          <td>${product.Order_Quantity}</td>
      </tr>
    `;
  });
  document.getElementById("data-output").innerHTML = table;
}

window.onload = getData;
