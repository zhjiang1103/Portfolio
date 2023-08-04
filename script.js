



document.getElementById("form").addEventListener("submit", (event)=>{
    event.preventDefault();
    const pTag = document.getElementById("message");
    const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
//    console.log(`Thanks, ${name}! I will contact you via ${email}. Have a nice day!`);
   triggerConfetti(); 
})