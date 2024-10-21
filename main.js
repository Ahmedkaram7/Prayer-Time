// https://api.aladhan.com/v1/timingsByAddress/21-10-2024?address=Cairo,EGP&method=5

let apiUrl = "https://api.aladhan.com/v1/timingsByAddress/21-10-2024?address=";

let changeCity = document.querySelector(".btn-save");
let input = document.querySelector(".input input");
let timezone = document.querySelector(".city");

async function times(city) {
  let response = await fetch(apiUrl + city + ",EGP&method=5");
  console.log(response);
  let data = await response.json();
  console.log(data);
  console.log(data.data.timings.Fajr);

  let fajr = document.querySelector(".fajr-time");
  let dhuhr = document.querySelector(".dhuhr-time");
  let sunrise = document.querySelector(".sunrise-time");
  let asr = document.querySelector(".asr-time");
  let maghrib = document.querySelector(".maghrib-time");
  let isha = document.querySelector(".isha-time");

  fajr.innerText = data.data.timings.Fajr;
  dhuhr.innerText = data.data.timings.Dhuhr;
  sunrise.innerText = data.data.timings.Sunrise;
  maghrib.innerText = data.data.timings.Maghrib;
  isha.innerText = data.data.timings.Isha;
  asr.innerText = data.data.timings.Asr;
}

times("Cairo");
timezone.innerText = `timezone: Cairo`;
changeCity.addEventListener("click", () => {
  if (input.value === "") {
    alert("Enter City");
  } else {
    times(input.value);
    timezone.innerText = `timezone: ${input.value}`;
  }
  input.value = "";
});
