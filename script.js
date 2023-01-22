const hourEL = document.getElementById("hour")
const minutesEL = document.getElementById("minutes")
const secondEl = document.getElementById("second")
const ampmEl = document.getElementById("am-pm")


updateClock =()=>{
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"

  if(h > 12){
    h = h-12 // converting 24hr format to 12hr
    ampm = "PM"
  }

  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s

  hourEL.innerText = h
  minutesEL.innerText = m
  secondEl.innerText = s
  ampmEl.innerText = ampm

  setTimeout(()=>{ // calling function after every 1 sec 
    updateClock()
  } , 1000)
}


updateClock()
