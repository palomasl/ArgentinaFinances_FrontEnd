//Bar Chart - Expenses per person
var ctx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Expenses per person',
            backgroundColor: ["#0E4366", "#9DD1FC","#2A8AC9","#63C5F2","#189DDB"],
            borderColor: '#FFFFFF',
            hoverBackgroundColor: '#808080',
            hoverBorderColor: '#FFFFFF',
            data: []
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
        labels: [],
        datasets: [{
            backgroundColor: ["#63F2B7", "#0E4366", "#9DD1FC","#2A8AC9", "#FFE45E", "#63C5F2","#189DDB"],
            borderColor: '#FFFFFF',
            hoverBackgroundColor: '#808080',
            hoverBorderColor: '#FFFFFF',
            data: []
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


// Insert JSON data into charts
function addData(chart, label, data) {
    chart.data.labels = chart.data.labels.concat(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data = dataset.data.concat(data);
    });
    chart.update();
}

document.addEventListener("DOMContentLoaded",
  function () {
    $ajaxUtils
      .sendGetRequest("data/expensesCategory.json",
        function (response) {
        var categories = [];
        for (var i = 0; i < response.length; i++) {
            categories.push(response[i].category);
        }
        var amounts = [];
        for (var i = 0; i < response.length; i++) {
            amounts.push(response[i].amount);
        }
        addData(pieChart, categories, amounts);
        });
  } 
);

document.addEventListener("DOMContentLoaded",
  function () {
    $ajaxUtils
      .sendGetRequest("data/expensesPerson.json",
        function (response) {
        var names = [];
        for (var i = 0; i < response.length; i++) {
            names.push(response[i].name);
        }
        var amounts = [];
        for (var i = 0; i < response.length; i++) {
            amounts.push(response[i].amount);
        }
        addData(barChart, names, amounts);
        });
  } 
);
