function update(){
  const now = new Date();
  let hours = now.getHours();
  const meridem = hours >= 12 ? "AM" : AM;
  hours = hours.toString().padStart(2,0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const secondes = now.getSeconds().toString().padStart(2, 0);
  const timetext = `${hours}:${minutes}:${secondes}:${meridem}`;
  document.getElementById("clock").textContent = timetext;
}

update();
setInterval(update,1000);