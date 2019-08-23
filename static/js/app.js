// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select('table');
var tbody = d3.select('tbody');

data.forEach((tableData)=> {
    var row = tbody.append('tr');
    Object.entries(tableData).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

var button = d3.select('#filter-btn');
button.on('click', function() {
    d3.event.preventDefault();
    tbody.selectAll('*').remove();
    var inputDate = d3.select('#datetime');
    var inputText = inputDate.property('value')
    var filterData = tableData.filter(x => x.datetime === inputText);

    filterData.forEach(function(tableData) {
        var row = tbody.append('tr');
        Object.entries(tableData).forEach(function([key,value]) {
            var cell = tbody.append('td');
            cell.text(value)
        });

    });

});