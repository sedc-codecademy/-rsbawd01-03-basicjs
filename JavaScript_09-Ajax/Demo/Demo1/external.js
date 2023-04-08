// Load the JSON data from the file using AJAX
$.getJSON("http://127.0.0.1:5500/trainer.json", function (data) {
  // Parse the JSON data into a JavaScript object
  var trainerObj = JSON.parse(JSON.stringify(data));
  console.log(trainerObj);
  // Access the properties of the JavaScript object
  var name = trainerObj.trainer.name;
  var age = trainerObj.trainer.age;
  var courses = trainerObj.trainer.courses;
  var email = trainerObj.trainer.contact.email;
  var phone = trainerObj.trainer.contact.phone;
  console.log(courses);

  // Display the data on the page
  var trainerInfo = "<h2>" + name + "</h2>";
  trainerInfo += "<p>Age: " + age + "</p>";
  trainerInfo += "<p>Courses: " + courses.join(", ") + "</p>";
  trainerInfo += "<p>Contact: " + email + ", " + phone + "</p>";
  $("#trainer-info").html(trainerInfo);

  // Convert the JavaScript object back into JSON string
  var jsonString = JSON.stringify(trainerObj);
  console.log(jsonString);
});
