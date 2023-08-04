
function triggerConfetti() {
  const duration = 3000; // Duration of the confetti effect in milliseconds
  const options = {
    particleCount: 100, // Number of confetti particles
    spread: 160, // Spread of confetti particles
    colors: ['#ff0000', '#00ff00', '#0000ff'], // Colors of confetti particles (customize as needed)
    console.log(`Thanks, ${name}! I will contact you via ${email}. Have a nice day!`);

};

  canvasConfetti(options);
}



document.getElementById("form").addEventListener("submit", (event)=>{
    event.preventDefault();
    const pTag = document.getElementById("message");
    const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
//    console.log(`Thanks, ${name}! I will contact you via ${email}. Have a nice day!`);
   triggerConfetti(); 
})