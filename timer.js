const clock = document.getElementById("clock");
const clockWatch = document.getElementById("clockWatch");

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  if(clockWatch.value == 24){
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  }else{
    if (clockWatch.value == 24) {
      clock.innerText = `AM ${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
    } else {
      let time_h = hours;
      if (hours >= 12) {
        time_h = hours - 12;
      }
      
      clock.innerText = ` PM ${time_h < 10 ? `0${time_h}` : time_h}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
  }
  }




getClock();
setInterval(getClock,1000);


