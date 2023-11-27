const clock = document.getElementById("clock");
const clockWatch = document.getElementById("clockWatch");

function getClock() {
  //console.log(clockWatch.value);
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  //if(clockWatch.value == 24){
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  //}else{
   /* if(hours >= 12) { 
      const hour = hours-12;
      console.log(typeof hours)
      console.log(hour);
      clock.innerText = `${hour < 10 ? `0${hour}` : hour}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
     
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  }*/
}



getClock();
setInterval(getClock,1000);


