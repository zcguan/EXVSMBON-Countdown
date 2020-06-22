// Set the date we're counting down to
// var countDownDate = new Date("Jun 19, 2020 23:00:00").getTime();
var countDownDate = new Date("June 20 2020 12:00:00 GMT+0900");
const playablePeriods = [
  [
    new Date("June 20 2020 12:00:00 GMT+0900"),
    new Date("June 22 2020 12:00:00 GMT+0900"),
  ],
  [
    new Date("June 26 2020 12:00:00 GMT+0900"),
    new Date("June 29 2020 12:00:00 GMT+0900"),
  ],
  [
    new Date("July 04 2020 12:00:00 GMT+0900"),
    new Date("July 06 2020 12:00:00 GMT+0900"),
  ],
  [
    new Date("July 11 2020 12:00:00 GMT+0900"),
    new Date("July 13 2020 12:00:00 GMT+0900"),
  ],
  [
    new Date("July 18 2020 12:00:00 GMT+0900"),
    new Date("July 20 2020 12:00:00 GMT+0900"),
  ],
  [
    new Date("July 24 2020 12:00:00 GMT+0900"),
    new Date("July 27 2020 12:00:00 GMT+0900"),
  ],
];
const releaseDate = new Date("July 30 2020 0:00:00 GMT+0900");

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

// function setCountDown(currentDate, dayOfWeek) {
//   var date = new Date(countDownDate);
//   currentDate = new Date(currentDate);
//   date.setMonth(currentDate.getMonth());
//   date.setDate(
//     currentDate.getDate() + ((dayOfWeek + 7 - currentDate.getDay()) % 7)
//   );
//   return date;
// }

function onGoing(date) {
  for (let i = 0; i < playablePeriods.length; i++) {
    const element = playablePeriods[i];
    if (date >= element[0] && date < element[1]) {
      countDownDate = element[1];
      return true;
    }
  }

  for (let i = 0; i < playablePeriods.length; i++) {
    if (date >= playablePeriods[i][1]) {
      if (i == playablePeriods.length - 1) {
        countDownDate = releaseDate;
      } else {
        countDownDate = playablePeriods[i + 1][0];
      }
    }
  }
  return false;
}

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var localTime = Date.now();
  // localTime = new Date(localTime).addDays(6);
  // localTime = new Date("July 21 2020 11:59:55 GMT+0900");

  // Find the distance between now and the count down date
  var distance = countDownDate - localTime;

  if (distance < 0) {
    if (localTime < releaseDate) {
      if (onGoing(localTime)) {
        // countDownDate = setCountDown(localTime, 0);
        document.getElementById("titleMsg").innerHTML =
          "MBON on going! </br> Time left:";
      } else {
        document.getElementById("titleMsg").innerHTML = "离MBON还有:";
      }
    } else {
      clearInterval(x);
      document.getElementById("titleMsg").innerHTML = "MBON已发售！";
      document.getElementById("timer").style.display = "none";
    }
  }

  var distance = countDownDate - localTime;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result
  document.getElementById("day").innerHTML =
    '<span id="emp">' +
    days +
    "</span>" +
    "d " +
    '<span id="emp">' +
    hours +
    "</span>" +
    "h " +
    '<span id="emp">' +
    minutes +
    "</span>" +
    "m " +
    '<span id="emp">' +
    seconds +
    "</span>" +
    "s ";

  document.getElementById("hour").innerHTML =
    '<span id="or"> OR </span>' +
    '<span id="emp">' +
    Math.floor(distance / (1000 * 60 * 60)) +
    "</span>" +
    "h ";

  document.getElementById("min").innerHTML =
    '<span id="or"> OR </span>' +
    '<span id="emp">' +
    Math.floor(distance / (1000 * 60)) +
    "</span>" +
    "m ";

  document.getElementById("sec").innerHTML =
    '<span id="or"> OR </span>' +
    '<span id="emp">' +
    Math.floor(distance / 1000) +
    "</span>" +
    "s ";
}, 1000);
