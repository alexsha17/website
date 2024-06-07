const ctx = document.getElementById('barchart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Java','HTML&CSS','MYSQL','C'],
                datasets: [{
                    label: 'Skill Level(%)',
                    data: [70, 55, 85, 60,100],
                    backgroundColor: [
                        'rgba(255, 9, 132, 1)',  // Red
                        'rgba(54, 162, 235, 1)',  // Blue
                        'rgba(255, 206, 86, 1)',  // Yellow
                        'rgba(75, 192, 192, 1)'   // Green
                    ],
                    borderColor: [
                        'rgba(255, 255, 255, 1)'  // White
                    ],
                    borderWidth:1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white'  // White y-axis labels
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'  // White x-axis labels
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'  // White legend labels
                        }
                    }
                }
            }
        });