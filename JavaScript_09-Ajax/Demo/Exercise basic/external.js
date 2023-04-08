$.ajax({
  method: "GET",
  url: "https://swapi.dev/api/people/2",
  success: function (data) {
    console.log(data);
  },
});
