$(document).ready(function () {
  let div = $("#firstWrapper");
  let paragraph = $("p").first();
  let h3 = $("h3").first();
  let h1 = $("h1").last();
  let button = $("button");

  // $("h1").first().text("JQuery is awesome");
  // $("h1").first().after("<p>A new paragraph</p>");
  // $("button").css("background-color", "red");

  ///////////////////
  //EVENTS
  let button2 = $("button").first();
  // simple on event click
  button2.on("click", function () {
    console.log("Hello");
  });
  // Even simpler click event
  button.click(function (e) {
    console.log("HELLO AGAIN");
  });
  // Catching an event
  button.click(function (e) {
    console.log(e);
  });
});
