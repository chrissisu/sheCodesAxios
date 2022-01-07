let apiKey = "fcd0a0f8638227b09e295db37316a9a5";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric";

function showTemperature(response) {
  let h1 = document.querySelector("#sydney");
  let temperature = Math.round(response.data.main.temp);

  console.log(response);
  h1.innerHTML = `It is ${temperature} C° in Sydney`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
