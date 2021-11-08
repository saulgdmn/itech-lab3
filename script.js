function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  function buildTable(){
    var tableDiv = document.getElementById("UserTable");
    tableDiv.innerHTML = '';
    var table = document.createElement("table");
    var range_min = parseInt(document.getElementById('min_range').value);
    var range_max = parseInt(document.getElementById('max_range').value);
    for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 10; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(`${rand(range_min, range_max)}`));
            if (i%2 == j%2) {
                td.className = "white";
            } else {
                td.className = "black";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableDiv.appendChild(table);
    //document.body.appendChild(table);
    //userTable.innerHTML = table;
}