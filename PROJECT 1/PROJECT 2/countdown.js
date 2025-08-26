const raceDate = new Date("August 31, 2025 18:30:00").getTime();


const countdown = setInterval(() => {
  const current = new Date().getTime();         
  const timeLeft = raceDate - current;          

 
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  
  document.getElementById("Days").innerText = days;
  document.getElementById("Hours").innerText = hours;
  document.getElementById("Minutes").innerText = minutes;
  document.getElementById("Seconds").innerText = seconds;

  
  if (timeLeft < 0) {
    clearInterval(countdown); 
    document.getElementById("countdown").innerText = "Lessss Goo!\nRace has started 🏁";
  }
}, 1000); 

/* 
"June 29, 2025 18:30:00",
"July 06, 2025 19:30:00",
*/

