import './style.css'

let redDiv = document.querySelector("#red");
let greenDiv = document.querySelector("#green");
let blueDiv = document.querySelector("#blue");
let yellowDiv = document.querySelector("#yellow");
let i = 0;
let j = 0;

// redDiv.addEventListener("click", ()=>{
    
// });

// greenDiv.addEventListener("click", ()=>{
    
// });

// blueDiv.addEventListener("click", ()=>{
    
// });

// yellowDiv.addEventListener("click", ()=>{
    
// });




function simon(tableau,game) {
  
      // console.log(Math.floor(Math.random() * (tableau.length)));
  
    let randomColor = Math.floor(Math.random() * (tableau.length));
    
    let randomColorValue = tableau[randomColor];
      console.log(randomColorValue)
      if (randomColorValue === tableau[0]) {
  
        redDiv.style.backgroundColor = "red"
        setTimeout(() => {
          redDiv.style.backgroundColor = "#AE0303"
        }, 500);
    
      } else if (randomColorValue === tableau[1]) {
    
        greenDiv.style.backgroundColor = "rgb(104, 172, 3)"
        setTimeout(() => {
          greenDiv.style.backgroundColor = "green"
        }, 500);
    
      } else if (randomColorValue === tableau[2]) {
  
        blueDiv.style.backgroundColor = "cyan"
        setTimeout(() => {
          blueDiv.style.backgroundColor = "darkcyan"
        }, 500);
    
      } else if (randomColorValue === tableau[3]) {
    
        yellowDiv.style.backgroundColor = "yellow"
        setTimeout(() => {
          yellowDiv.style.backgroundColor = "rgb(184, 184, 0)"
        }, 500);
    
    }
  
    game.push(randomColorValue);
    
    console.log(game);
  
    function isTheUserRight(player){
  
      redDiv.addEventListener("click", ()=>{
    
        player.push(tableau["R"])
    
        if (player[i] !== game[i]) {
          alert("Tu as perdu");
          j+1;
        } else {
    
          redDiv.style.backgroundColor = "red"
          setTimeout(() => {
            redDiv.style.backgroundColor = "#AE0303"
          }, 500);
    
        }
    
      });
        
      greenDiv.addEventListener("click", ()=>{
    
          player.push(tableau["G"])
      
          if (player[i] !== game[i]) {
            alert("Tu as perdu");
            j+1;
          } else {
      
           greenDiv.style.backgroundColor = "rgb(104, 172, 3)"
           setTimeout(() => {
              greenDiv.style.backgroundColor = "green"
          }, 500);
      
          }
            
      });
        
      blueDiv.addEventListener("click", ()=>{
    
        player.push(tableau["B"])
      
          if (player[i] !== game[i]) {
            alert("Tu as perdu");
            j+1;
          } else {
    
          blueDiv.style.backgroundColor = "cyan"
          setTimeout(() => {
            blueDiv.style.backgroundColor = "darkcyan"
        }, 500);
    
      }
            
      });
        
      yellowDiv.addEventListener("click", ()=>{
    
        player.push(tableau["B"])
      
          if (player[i] !== game[i]) {
            alert("Tu as perdu");
            j+1;
          } else {
    
          yellowDiv.style.backgroundColor = "yellow"
          setTimeout(() => {
            yellowDiv.style.backgroundColor = "rgb(184, 184, 0)"
        }, 500);
            
      }
    
      });
    
    }
    isTheUserRight([]);
    i++
  console.log(game);
  
    }

setInterval(simon, 500);
simon(["R","G","B","Y"],[]);


