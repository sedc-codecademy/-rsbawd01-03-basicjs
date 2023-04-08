$(document).ready(function () {
  function callStarWarsCharacter(number) {
    let result = $("#title");
    console.log(number);
    $.ajax({
      method: "GET",
      url: "https://swapi.dev/api/people/" + number,
      success: function (data) {
        showInfo(data, result);
        console.log(data);
      },
    });
  }
  function showInfo(data, resultElement) {
    resultElement.after(
      `<p>Im and actor. I weight ${data.mass}kg and my height is ${data.height} cm, gender is ${data.gender}.</p>`
    );
    resultElement.after(`<h3>My name is ${data.name}</h3>`);
  }
  $("#btn").on("click", function () {
    callStarWarsCharacter(Math.floor(Math.random() * 27));
  });
});
