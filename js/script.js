//Home Page
document.addEventListener("DOMContentLoaded",
function() {
    $ajaxUtils
      .sendGetRequest("https://argentina-finance.herokuapp.com/expenses/total",
        function (response) {
        var total = response.amount;

        document.querySelector("#total")
            .innerHTML = total;
        });
  }
);//--End of Home Page

//Reports Page
document.addEventListener("DOMContentLoaded",
  function () {
    $ajaxUtils
      .sendGetRequest("data/highestSpender.json",
        function (response) {
        var name = response.firstName + " " + response.lastName;

        document.querySelector("#spender")
            .innerHTML = name;
        });
  } 
);//--End of Reports Page

//Expenses Page - Loop
document.addEventListener("DOMContentLoaded",
  function() {
    $ajaxUtils
      .sendGetRequest("data/expensesTable.json",
        function (response) {
        var expenses = response;
        var table = "";
        for (var i = 0; i < expenses.length; i++) {
          table += "<tr>" + 
          "<td>" + expenses[i].category + "</td>" +
          "<td>" + expenses[i].name + "</td>" +
          "<td>" + expenses[i].cost + "</td>" +
          "<td>" + expenses[i].date + "</td>" +
          "<td>" + expenses[i].payer + "</td>" +
          "<td>" + expenses[i].shareWith.join(', ') + "</td>" +
          "</tr>";
        }
        document.querySelector("tbody")
            .innerHTML = table; 
        });
  }
);



// function constructTable(selector) { 
              
//             // Getting the all column names 
//             var cols = Headers(list, selector);   
   
//             // Traversing the JSON data 
//             for (var i = 0; i < list.length; i++) { 
//                 var row = $('<tr/>');    
//                 for (var colIndex = 0; colIndex < cols.length; colIndex++) 
//                 { 
//                     var val = list[i][cols[colIndex]]; 
                      
//                     // If there is any key, which is matching 
//                     // with the column name 
//                     if (val == null) val = "";   
//                         row.append($('<td/>').html(val)); 
//                 } 
                  
//                 // Adding each row to the table 
//                 $(selector).append(row); 
//             } 
//         } 

// //Expenses Page - Sort Table
// function sortTable(n) {
//   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//   table = document.getElementById("myTable");
//   switching = true;
//   //Set the sorting direction to ascending:
//   dir = "asc"; 
//   /*Make a loop that will continue until
//   no switching has been done:*/
//   while (switching) {
//     //start by saying: no switching is done:
//     switching = false;
//     rows = table.rows;
//     /*Loop through all table rows (except the
//     first, which contains table headers):*/
//     for (i = 1; i < (rows.length - 1); i++) {
//       //start by saying there should be no switching:
//       shouldSwitch = false;
//       /*Get the two elements you want to compare,
//       one from current row and one from the next:*/
//       x = rows[i].getElementsByTagName("TD")[n];
//       y = rows[i + 1].getElementsByTagName("TD")[n];
//       /*check if the two rows should switch place,
//       based on the direction, asc or desc:*/
//       if (dir == "asc") {
//         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//           //if so, mark as a switch and break the loop:
//           shouldSwitch= true;
//           break;
//         }
//       } else if (dir == "desc") {
//         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//           //if so, mark as a switch and break the loop:
//           shouldSwitch = true;
//           break;
//         }
//       }
//     }
//     if (shouldSwitch) {
//       /*If a switch has been marked, make the switch
//       and mark that a switch has been done:*/
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//       //Each time a switch is done, increase this count by 1:
//       switchcount ++;      
//     } else {
//       /*If no switching has been done AND the direction is "asc",
//       set the direction to "desc" and run the while loop again.*/
//       if (switchcount == 0 && dir == "asc") {
//         dir = "desc";
//         switching = true;
//       }
//     }
//   }
// }

