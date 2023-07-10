let datE = document.getElementById('date');
let data = document.getElementById('data');
let month = document.getElementById('month');
let year = document.getElementById('year');
let day = document.getElementById('day');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let session = document.getElementById('session');
let toggleBtn = document.getElementById('toggle-btn');
let status = false
let weekend = [" ", "Dushanba", "Seyshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"]
time()

setInterval(() => {
  time()
}, 1000)

function time() {
  let date = new Date();
  data.innerHTML = date.getDate();
  month.innerHTML = date.getMonth()
  year.innerHTML = date.getFullYear()
  sana = date.getDay()
  day.innerHTML = weekend[sana]
  if(status) {
    hours.innerHTML = date.getHours()
  } else {
    if(hours.innerHTML = date.getHours() % 12 === 0) {
      hours.innerHTML = 12
    } else {
      hours.innerHTML = date.getHours() % 12
    }
  }
  minutes.innerHTML = date.getMinutes()
  seconds.innerHTML = date.getSeconds()
  if(date.getHours() <= 12) {
    session.innerHTML = "AM"  
  } else {
    session.innerHTML = "PM"
  }
}
toggleBtn.addEventListener('click', (e) => {
  status = e.target.checked
  if(e.target.checked) {
    session.style.display = "none"
  } else {
    session.style.display = "block"
  }
  time()
})

