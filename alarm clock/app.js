
let counter = 0;
document.querySelector("#appt").addEventListener("blur",function(){
  counter++;
  console.log(counter);
  document.querySelector("#SetAlarm").innerHTML = `Alarm : `;
  let currentTime = new Date();
  console.log(currentTime);
  let val = document.querySelector("#appt").value;
  console.log(val.slice(0,2),val.slice(3,5),typeof(parseInt(val.slice(0,2))));
  let newTime = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate(),parseInt(val.slice(0,2)),parseInt(val.slice(3,5)),currentTime.getSeconds());
  if(parseInt(val.slice(0,2)) <= currentTime.getHours() || (parseInt(val.slice(0,2)) === currentTime.getHours() && parseInt(val.slice(3,5)) < currentTime.getMinutes())){
    newTime = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate()+1,parseInt(val.slice(0,2)),parseInt(val.slice(3,5)),currentTime.getSeconds());
  }
  let interval = setInterval(function(){
    currentTime = new Date();
    let remHrs = Math.floor(((newTime.getTime()-currentTime.getTime())%(24*60*60*1000))/(60*60*1000));
    let remMins = Math.floor(((newTime.getTime()-currentTime.getTime())%(60*60*1000))/(60*1000));
    let remSecs = Math.floor(((newTime.getTime()-currentTime.getTime())%(60*1000))/(1000));
    console.log(remHrs,remMins,remSecs);
    document.querySelector("#alarm").innerHTML = `<h1 style="color: #db7093" class="mx-5" id="SetAlarm">Alarm will ring in : </h1>
                                                  <table class="table my-5" style="border: 5px solid white;">
                                                    <thead>
                                                      <tr>
                                                        <th scope="col" style="border: 5px solid white;">Hours</th>
                                                        <th scope="col" style="border: 5px solid white;">Minutes</th>
                                                        <th scope="col" style="border: 5px solid white;">Seconds</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody style="border: 5px solid white;">
                                                      <tr>
                                                        <td style="border: 5px solid white; color: #db7093;">${remHrs}</td>
                                                        <td style="border: 5px solid white;color: #db7093;">${remMins}</td>
                                                        <td style="border: 5px solid white;color: #db7093;">${remSecs}</td>
                                                      </tr>
                                                    </tbody>
                                                  </table>`;
    if(remHrs===0 && remMins === 0 && remSecs === 0){
      clearInterval(interval);
      var audio = new Audio("alarm_classic.mp3");
      audio.play();
      setTimeout(function(){
        window.location.reload();
      },5000);
    }
    if(counter>1 || isNaN(remHrs)){
      clearInterval(interval);
      document.querySelector("#alarm").innerHTML = `<div id="Errors" class="container"><h1 id="Error">Error!!! Start Again :( </h1></div>`;
      document.querySelector("#clock").innerHTML = ``;
      document.querySelector("#inputs").innerHTML = ``;
      }
  },1000);
});
