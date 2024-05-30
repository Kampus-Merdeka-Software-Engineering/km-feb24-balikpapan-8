let productSums = [];

async function getData() {
    try {
        const response = await fetch("./data/bikesales.json");
        const data = await response.json();

        const productSumsMap = {};

        data.bikesalesdata.forEach(user => {
            const { Product, Sub_Category, Country, Revenue, Profit, Order_Quantity } = user;

            if (!productSumsMap[Product]) {
                productSumsMap[Product] = {
                    Product,
                    Sub_Category,
                    Country,
                    Revenue: 0,
                    Profit: 0,
                    Order_Quantity: 0
                };
            }

            productSumsMap[Product].Revenue += parseFloat(Revenue);
            productSumsMap[Product].Profit += parseFloat(Profit);
            productSumsMap[Product].Order_Quantity += parseInt(Order_Quantity, 10);
        });

        productSums = Object.values(productSumsMap);
        populateTable(productSums);

       new DataTable('#user-table',{
            data: productSums,
            "ordering": true,
            aaSorting: [[0, 'desc']],
            columns: [
                { data: "Product" },
                { data: "Sub_Category" },
                { data: "Country" },
                { data: "Revenue",
                    render:(data)=>{
                        const number = DataTable.render
                            .number(",")
                            .display(data)
                        return number;
                    }
                 },
                { data: "Profit" },
                { data: "Order_Quantity" },
                
            ]
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function populateTable(data) {
    let table = '';
    data.forEach(product => {
        table += `
            <tr>
                <td>${product.Product}</td>
                <td>${product.Sub_Category}</td>
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
