$(document).ready(function () {
  let div = $("#firstWrapper");
  let paragraph = $("p").first();
  let h3 = $("h3").first();
  let h1 = $("h1").last();
  let button = $("button");

  $("h1").first().text("JQuery is awesome");
  $("h1").first().after("<p>A new paragraph</p>");
  $("button").css("background-color", "red");

  $("button")
    .first()
    .click(function () {
      $("#secondWrapper").hide();
      $("p").css("color", "green");
      $("button").first().text("Don't click me");
    });
});
