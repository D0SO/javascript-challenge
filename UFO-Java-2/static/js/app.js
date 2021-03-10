
// from data.js
var tableData = data;


// with d3 create a variable that locates tbody in the index.html
var tbody = d3.select("tbody");


// -- Create Full Table -- 

// Loop through each object in our data table
tableData.forEach(function(ufoData) {
    
    // Append one table row `tr` for each object
    var row = tbody.append("tr");

    // Loop through each object collecting object content including values and respective keys
    Object.entries(ufoData).forEach(function([key,value]) {
      // assign object values to each table cell
      var cell = row.append("td");
      // insert values as text
      cell.text(value);
    });
  });



// select the filter button
var filtered = d3.select('#filter-btn');

// -- Define Filtering parameters -- 

filtered.on('click', function(){
    d3.event.preventDefault();
    // assign and input element with D3 (date input box)
    var inputElement = d3.select('#datetime');

    //get the value of the input element (date value)
    var inputValue = inputElement.property('value')
  
    //define filteredData as the object with matching values in any of the fields below 
    //the filter will look for matching value in desired fields with '||' = 'or' 
    var filteredData = data.filter(i => i.datetime === inputValue ||
                                        i.city === inputValue ||
                                        i.state === inputValue ||
                                        i.country === inputValue ||
                                        i.shape === inputValue );

    // clear the table content before entering filtered object values 
    tbody.html("");


// -- Display Filtered Data --

    // append filtered data to html
    filteredData.forEach((ufoData) => {
        // Append one table row `tr` for each object
        var row = tbody.append('tr');
        // Loop through each object collecting object content including values and respective keys
        Object.entries(ufoData).forEach(([key,value]) => {
          // assign object values to each table cell
          var cell = row.append('td');
          // insert values as text
          cell.text(value);
        });    
    });
});