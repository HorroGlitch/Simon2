import './style.css'

let redDiv = document.querySelector("#red");
let greenDiv = document.querySelector("#green");
let blueDiv = document.querySelector("#blue");
let yellowDiv = document.querySelector("#yellow");
let i = 0;
const a = ["R","G","B","Y"];

// redDiv.addEventListener("click", ()=>{
    
// });

// greenDiv.addEventListener("click", ()=>{
    
// });

// blueDiv.addEventListener("click", ()=>{
    
// });

// yellowDiv.addEventListener("click", ()=>{
    
// });

function simon(tmp,game) {
  
      // console.log(Math.floor(Math.random() * (tableau.length)));
  
    let randomColor = Math.floor(Math.random() * (tmp.length));
    
    let randomColorValue = tmp[randomColor];
      console.log(randomColorValue)
      if (randomColorValue === tmp[0]) {
  
        redDiv.style.backgroundColor = "red"
        setTimeout(() => {
          redDiv.style.backgroundColor = "#AE0303"
        }, 500);
    
      } else if (randomColorValue === tmp[1]) {
    
        greenDiv.style.backgroundColor = "rgb(104, 172, 3)"
        setTimeout(() => {
          greenDiv.style.backgroundColor = "green"
        }, 500);
    
      } else if (randomColorValue === tmp[2]) {
  
        blueDiv.style.backgroundColor = "cyan"
        setTimeout(() => {
          blueDiv.style.backgroundColor = "darkcyan"
        }, 500);
    
      } else if (randomColorValue === tmp[3]) {
    
        yellowDiv.style.backgroundColor = "yellow"
        setTimeout(() => {
          yellowDiv.style.backgroundColor = "rgb(184, 184, 0)"
        }, 500);
    
    }
  
    game.push(randomColorValue);
    
    console.log(game);
  
    function isTheUserRight(player){
  
      redDiv.addEventListener("click", ()=>{
    
        player.push("R")
    
        if (player[i] !== game[i]) {
          alert("Tu as perdu");
          clearInterval();
        } else {
    
          redDiv.style.backgroundColor = "red"
          setTimeout(() => {
            redDiv.style.backgroundColor = "#AE0303"
          }, 500);
    
        }
    
      });
        
      greenDiv.addEventListener("click", ()=>{
    
          player.push("G")
      
          if (player[i] !== game[i]) {
            alert("Tu as perdu");
            clearInterval();
          } else {
      
           greenDiv.style.backgroundColor = "rgb(104, 172, 3)"
           setTimeout(() => {
              greenDiv.style.backgroundColor = "green"
          }, 500);
      
          }
            
      });
        
      blueDiv.addEventListener("click", ()=>{
    
        player.push("B")
      
          if (player[i] !== game[i]) {
            alert("Tu as perdu");
            clearInterval();
          } else {
    
          blueDiv.style.backgroundColor = "cyan"
          setTimeout(() => {
            blueDiv.style.backgroundColor = "darkcyan"
        }, 500);
    
      }
            
      });
        
      yellowDiv.addEventListener("click", ()=>{
    
        player.push("Y")
      
          if (player[i] !== game[i]) {
            alert("Tu as perdu");
            clearInterval();
          } else {
    
          yellowDiv.style.backgroundColor = "yellow"
          setTimeout(() => {
            yellowDiv.style.backgroundColor = "rgb(184, 184, 0)"
        }, 500);
            
      }
    
      });
      console.log(player);
    
    }
    isTheUserRight([]);
    i++
    console.log(game);
  

    console.log(tmp);
    }

simon(a,[]);
setInterval(simon, 500);




