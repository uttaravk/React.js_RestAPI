function retrieveData(){
  $.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function (data) {
      var i,j;
      var useremail="";
      var username="";
      var usergender="";
      var HTML = "<table align=left width=50%>";
      HTML+="<tr>";
      HTML+="<th align=left>Users</th>";
      HTML+="<th align=left>Gender</th>";
      HTML+="<th align=left>Email Ids.</th>";
      HTML+="</tr>";
        for(j=0;j<10;j++)
        {
          title=(data["results"][j]["name"]["title"][0].toUpperCase()+data["results"][j]["name"]["title"].substring(1,));
          first=(data["results"][j]["name"]["first"][0].toUpperCase()+data["results"][j]["name"]["first"].substring(1,));
          last=(data["results"][j]["name"]["last"][0].toUpperCase()+data["results"][j]["name"]["last"].substring(1,));
          username+=(title+" "+first+" "+last)+"<br>";
          useremail+=data["results"][j]["email"]+"<br>";
          usergender+=data["results"][j]["gender"][0].toUpperCase()+data["results"][j]["gender"].substring(1,)+"<br>";
          HTML+="<tr>";
          HTML += "<td>"+username+"</td>";
          HTML += "<td>"+usergender+"</td>";
          HTML += "<td>"+useremail+"</td>";
          HTML+="</tr>";
          useremail="";
          username="";
          usergender="";
        }
      HTML += "</table>";
      document.getElementById("user_details").innerHTML = HTML;
    }
  });
}
