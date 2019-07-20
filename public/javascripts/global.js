

var pie = document.getElementById('pieChart');

var data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Disburstments',
        'Proffesional',
        'Internal'
    ]
};

var options = {};

var myPieChart = new Chart(pie, {
    type: 'pie',
    data: data,
    options: options
});
