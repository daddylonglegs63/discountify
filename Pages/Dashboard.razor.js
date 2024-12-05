
const cty = document.getElementById('universityChart').getContext('2d');
const universityChart = new Chart(cty, {
    type: 'pie',
    data: {
        labels: ['Air University', 'Nust', 'Fast University'],
        datasets: [{
            label: 'Students by University',
            data: [3, 1, 1],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',

            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Overview of Students by University'
            }
        }
    }
});
      
  
        const ctx = document.getElementById('discountChart').getContext('2d');
        const discountChart = new Chart(ctx, {
            type: 'pie',
        data: {
            labels: ['Food', 'Travel', 'Clothing'],
        datasets: [{
            label: 'Vendors by Category',
        data: [2, 1, 1],
        backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',

        ],
        borderWidth: 1
                }]
            },
        options: {
            responsive: true,
        plugins: {
            legend: {
            position: 'top',
                    },
        title: {
            display: true,
        text: 'Overview of Vendors by Category'
                    }
                }
            }
        });