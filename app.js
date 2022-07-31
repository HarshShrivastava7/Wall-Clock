
show();

let interval = setInterval(show,1000);

function show() {
  let newTime = new Date();
  let hrs = newTime.getHours();
  let ampm = "A.M.";
  if(hrs>12){
    ampm = "P.M.";
  }
  if(hrs<10){
    hrs = `0${hrs}`;
  }
  if(hrs>12){
    hrs = hrs-12;
  }
  let mins = newTime.getMinutes();
  if(mins<10){
    mins = `0${mins}`;
  }
  let secs = newTime.getSeconds();
  if(secs<10){
    secs = `0${secs}`;
  }
  document.querySelector("#input").innerHTML = `${hrs} : ${mins} : ${secs} ${ampm}`;
}
