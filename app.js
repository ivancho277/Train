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

class Train {
  constructor(name, destination, startTime, frequency) {
    this.name = name;
    this.destination = destination;
    this.startTime = startTime;
    this.frequency = frequency;
    this.nextarrival;
    this.minutesaway;
    this.calcNextTime();
    this.calcMin();

  }
  calcNextTime = function () {
    var firstTimeConverted = moment(this.startTime, "HH:mm").subtract(1, "years");
    var currentTime = moment();
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var tRemainder = diffTime % this.frequency;
    var tMinutesTillTrain = this.Frequency - tRemainder;
    this.nextarrival = currentTime.add(tMinutesTillTrain, "minutes");
  }

  calcMin = function () {
    var firstTimeConverted = moment(this.startTime, "HH:mm").subtract(1, "years");
    var currentTime = moment();
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var tRemainder = diffTime % this.frequency;
    this.minutesaway = this.frequency - tRemainder;
  }

}

// function trainToObj(Train) {
//   var trainObj = {
//     name: Train.name,
//     destination: Train.destination,
//     startTime: Train.startTime,
//     frequency: Train.Frequency,
//     nextarrival: Train.nextarrival,
//     minutesaway: Train.minutesaway
//   }
//   return trainObj;
// }


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
  //var trainToPushToDatabase = trainToObj(train);

  console.log("train min left:" + train.minutesaway)
  console.log("train next time:" + train.nextarrival)
  database.ref().push(JSON.parse(JSON.stringify(train)));
  console.log(train);


})
database.ref().on("value", function(snapshot) {

  var dataTrain = snapshot.val();
  for(const i in dataTrain){
    console.log(dataTrain[i]);
    var{ name, destination, startTime, frequency, nextarrival, minutesaway} = dataTrain[i];
    var tableRow = $("<tr>")
    var tdName = $("<td>").text(name);
    var tdDestination = $("<td>").text(destination);
    var tdStartTime = $("<td>").text(startTime);
    var tdFrequency = $("<td>").text(frequency);
    var tdNextArrival = $("<td>").text(nextarrival);
    var tdMinutesAway = $("<td>").text(minutesaway);

    tableRow.append(tdName, tdDestination, tdStartTime, tdFrequency, tdNextArrival, tdMinutesAway);
    $("#train-info").append(tableRow);
  }

})



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