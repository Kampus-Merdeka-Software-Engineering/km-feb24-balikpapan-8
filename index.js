var data = {
    labels: ['Germany', 'France', 'UK'],
    datasets: [{
      data: [32.1, 28.5, 39.4 ],
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