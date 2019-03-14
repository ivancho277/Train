var config = {
    apiKey: "AIzaSyDx2rZuEN6HYW4TZ-OEdpuuZbPMsCu3x0w",
    authDomain: "traintime-ee39e.firebaseapp.com",
    databaseURL: "https://traintime-ee39e.firebaseio.com",
    projectId: "traintime-ee39e",
    storageBucket: "",
    messagingSenderId: "98774640093"
  };
  firebase.initializeApp(config);
  var database = firebase.database()


  $("#name-employee").click(function(e) {
    event.preventDefault();


  })

  database.ref().on("value", function(snapshot){

    var employee = snapshot.val();
    for(const i in employee) {
        console.log(employee[i])
        var{ name, role, date, rate } = employee[i]
        var tableRow = $("<tr>")
        var tdName = $("<td>").text(name);
        var tdRate = $("<td>").text(rate);
        console.log(moment(date.diff(moment(),"months"))) // use this to retunr months worked
        //make two more rows

        tableRow.append(tdName, tdRate;)//add the rest

        $("#tbody").append(tableRow)

    }


  })