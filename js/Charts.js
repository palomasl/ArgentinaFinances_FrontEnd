//Bar Chart - Expenses per person
var ctx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Bharath', 'Paloma', 'Marta', 'Sandra', 'Georgia'],
        datasets: [{
            label: 'Expenses per person',
            backgroundColor: ["#0E4366", "#9DD1FC","#2A8AC9","#63C5F2","#189DDB"],
            borderColor: '#FFFFFF',
            hoverBackgroundColor: '#808080',
            hoverBorderColor: '#FFFFFF',
            data: [5, 10, 5, 6, 20]
        }]
    },

    // Configuration options go here
    options: {
        legend: {display: false},
    }
});

//Pie Chart - Expenses per category
var ctx = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Plane', 'Hotel', 'Groceries', 'Taxi', 'Restaurants', 'Tickets', 'Others'],
        datasets: [{
            backgroundColor: ["#63F2B7", "#0E4366", "#9DD1FC","#2A8AC9", "#FFE45E", "#63C5F2","#189DDB"],
            borderColor: '#FFFFFF',
            hoverBackgroundColor: '#808080',
            hoverBorderColor: '#FFFFFF',
            data: [3, 10, 5, 2, 4, 8, 5]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom',
            labels: {
                fontColor: '#000',
                fontFamily: "'Montserrat', sans-serif",
            },
        }
    }
});
