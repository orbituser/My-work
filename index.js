 

const d = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = daysOfWeek[d.getDay()];
document.querySelector("p[data-testid='currentDayOfTheWeek']").innerHTML = day;

function addZero(x, n) {
  while (x.toString().length < n) {
    x = "0" + x;
  }return x;
}

function updateTime() {
  const d = new Date();
  let h = addZero(d.getHours(), 2);
  let m = addZero(d.getMinutes(), 2);
  let s = addZero(d.getSeconds(), 2);
  let ms = addZero(d.getMilliseconds(), 3);
  let time = h + ":" + m + ":" + s + ":" + ms;
  document.querySelector("div[data-testid='currentUTCTime']").innerHTML = time;
}

// Call updateTime initially to set the initial time
updateTime();

// Set up an interval to update the time every 1000 milliseconds (1 second)
setInterval(updateTime, 100);




