let jsonData = [];

fetch("https://jsonplaceholder.typicode.com/users")
  // .then() executes when the response is back from the SERVER
  .then(function (response) {
    console.log(response); //provera koji status nam kod vraca, u ovom slucaju 200
    jsonData = response.json();
    console.log("response", jsonData);
    return jsonData;
  })
  .then((result) => {
    console.log("result", result);
  });
