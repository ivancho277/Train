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

  class Train{
    constructor(name, destination, startTime, frequency){
      this.name = name;
      this.destination = destination;
      this.startTime = startTime;
      this.frequency = frequency;
      this.nextarrival = calcNextTime;
      this.minutesaway = calcMin;
    
      
    this.calcNextTime = function(){
        var firstTimeConverted = moment(startTime, "HH:mm").subtract(1, "years");
        var currentTime = moment();
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        var tRemainder = diffTime % tFrequency;
        var tMinutesTillTrain = tFrequency - tRemainder;
        return currentTime.add(tMinutesTillTrain, "minutes");
      }

      this.calcMin() = function(){
        var firstTimeConverted = moment(startTime, "HH:mm").subtract(1, "years");
        var currentTime = moment();
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        var tRemainder = diffTime % tFrequency;
        return tFrequency - tRemainder
      }

    }


      
    
    }
    $("#submit-button").on("click", function () {
      let name = $("#train-name").val().trim();
      let destination = $("#destination").val().trim();
      let startTime = $("#start-time").val();
      let rate = $("#frequency").val().trim();
  
      let train = new Train(
          name,
          destination,
          startTime,
          frequency,
      )
      database.ref().push(train);
      console.log(train);


  


  // $("#name-employee").click(function(e) {
  //   event.preventDefault();


  // })

  // database.ref().on("value", function(snapshot){

  //   var employee = snapshot.val();
  //   for(const i in employee) {
  //       console.log(employee[i])
  //       var{ name, role, date, rate } = employee[i]
  //       var tableRow = $("<tr>")
  //       var tdName = $("<td>").text(name);
  //       var tdRate = $("<td>").text(rate);
  //       console.log(moment(date.diff(moment(),"months"))) // use this to retunr months worked
  //       //make two more rows

  //       tableRow.append(tdName, tdRate)//add the rest

  //       $("#tbody").append(tableRow)

  //   }


})