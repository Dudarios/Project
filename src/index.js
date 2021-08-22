let now = new Date();

function formatDate(now) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function formatDate1(now) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December"
  ];

  let month = months[now.getMonth()];
  let date = now.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  return `${month} ${date}`;
}

let month1 = document.querySelector(".month1");
let currentTime1 = new Date();
month1.innerHTML = formatDate1(currentTime1);

let times = document.querySelector(".times");
let currentTime = new Date();
times.innerHTML = formatDate(currentTime);

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#exampleInputEmail1").value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;
  let apiKey = "5a7acbe76d11ed01350ad9a79a9f8797";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a7acbe76d11ed01350ad9a79a9f8797&units=metric`;
  axios.get(url).then(showTemp);
}

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let weather = document.querySelector("#temperature");
  weather.innerHTML = `${temperature}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);