function createTable(rows, cols) {
  // get the reference for the table
  var table = document.createElement("table");

  // create rows and cells for the table
  for (var i = 0; i < rows; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < cols; j++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(
        "Row-" + (i + 1) + " Column-" + (j + 1)
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  // append the table to the document body
  document.body.appendChild(table);
}
