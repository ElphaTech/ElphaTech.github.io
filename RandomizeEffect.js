const letters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[{]}\\|;:\'\"`~,<.>/?";

let interval = null;

document.querySelectorAll(".randomize").forEach(element => {
  
  element.onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration-9) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration-9 >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 2  ;
    }, 30);
  }
});