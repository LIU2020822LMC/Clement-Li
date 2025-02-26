const TimeDisplay = document.getElementById("TimeDisplay");
let startTime = 0;
let Timer = null;
let elapsedTime = 0;
let ToRunning = false;

function start(){
  if(!ToRunning){
    startTime = Date.now() - elapsedTime;
    Timer =  setInterval(update,10);
    ToRunning =true;
  }
}
function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime/(1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime/(1000 * 60) % 60);
  let seconds = Math.floor(elapsedTime/1000 % 60);
  let millisecondes = Math.floor(elapsedTime % 1000 / 10);
  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0"); 
  millisecondes = String(millisecondes).padStart(2, "0");
  TimeDisplay.textContent = `${hours}:${minutes}:${seconds}:${millisecondes}`;
}
function stop() {
  if(ToRunning){
    clearInterval(Timer);
    elapsedTime = Date.now() - startTime;
    ToRunning = false;
  }
}
function reset() {
 if (ToRunning || stop) {
   clearInterval(Timer);
   startTime = 0;
   Timer = null;
   elapsedTime = 0;
   ToRunning = false;
   TimeDisplay.textContent = "00:00:00:00";
 }
}