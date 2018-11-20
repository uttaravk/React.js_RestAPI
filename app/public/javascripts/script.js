//Function to generate a dropdown menu
function dropDown() {
  document.write("<select id='selector'>");
  document.write("<option value=10> All </option>");
  for (var i = 1; i < 10; i++) {
    document.write("<option value=" + i + ">" + i + "</option>");
  }
  document.write("</select>");
}

function display(data) {
  var num_rows = document.getElementById("selector").value;
  var i, j;
  var useremail = "";
  var username = "";
  var usergender = "";
  var HTML = "<div id='user_div'>"

  // Table Headings
  HTML += "<table id='user_table' class='table table-hover table-responsive'>";
  HTML += "<tr id='headings'>";
  HTML += "<th>Users</th>";
  HTML += "<th>Gender</th>";
  HTML += "<th>Email Ids.</th>";
  HTML += "</tr>";

  for (j = 0; j < num_rows; j++) {

    // Format Data (Name)
    title = (data["results"][j]["name"]["title"][0].toUpperCase() + data["results"][j]["name"]["title"].substring(1, ));
    first = (data["results"][j]["name"]["first"][0].toUpperCase() + data["results"][j]["name"]["first"].substring(1, ));
    last = (data["results"][j]["name"]["last"][0].toUpperCase() + data["results"][j]["name"]["last"].substring(1, ));

    username += (title + " " + first + " " + last) + "<br>";
    useremail += data["results"][j]["email"] + "<br>";

    //Format data (Gender)
    usergender += data["results"][j]["gender"][0].toUpperCase() + data["results"][j]["gender"].substring(1, ) + "<br>";

    //Insert data into a table
    HTML += "<tr id='row' align='left'>";
    HTML += "<td>" + username + "</td>";
    HTML += "<td>" + usergender + "</td>";
    HTML += "<td>" + useremail + "</td>";
    HTML += "</tr>";

    useremail = "";
    username = "";
    usergender = "";
  }
  HTML += "</table></div>";

  document.getElementById("user_details").innerHTML = HTML;
}

//Retrieve data using an API
function retrieveData() {
  $.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
      if (data['error'] === "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you.") {
        var error_message = "API service Unavaliable";
        document.getElementById("user_details").innerHTML = error_message;
      } else {
        display(data);
      }
    }
  });
}