// var today = new Date();

// var date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

// document.write(today);
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  var tod = new Date();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
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
    "October",
    "November",
    "December",
  ];
  timeDisplay.textContent =
    days[tod.getDay()] +
    "-" +
    months[tod.getMonth()] +
    "-" +
    tod.getFullYear() +
    "   " +
    tod.getHours() +
    ":" +
    tod.getMinutes() +
    ":" +
    tod.getSeconds();
}
setInterval(refreshTime, 1000);
