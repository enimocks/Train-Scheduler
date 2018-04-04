// Initialize Firebase
var config = {
  apiKey: "AIzaSyBjV2zPqqaNybxKX4aSkN0WcC9oCgo7m_8",
  authDomain: "train-scheduler-4905a.firebaseapp.com",
  databaseURL: "https://train-scheduler-4905a.firebaseio.com",
  projectId: "train-scheduler-4905a",
  storageBucket: "",
  messagingSenderId: "164021261126"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();


$(document).on("click", "#submit", function (event) {

  event.preventDefault();


  var name = $("#train-name").val().trim();
  var destination = $("#destination").val().trim();
  var firstTrainTime = $("#train-time").val().trim();
  var frequency = $("#frequency").val().trim();

  database.ref().set({
    name: name,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency
  });

});