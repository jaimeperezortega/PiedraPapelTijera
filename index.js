//Voy a crear el juego de Piedra - Papel o Tijera
alert("¿Preparado para jugar a Piedra, Papel o Tijera contra la computadora? Gana el juego quien consiga antes 3 victorias. Pulsa ACEPTAR");

    const generateComputerChoice = ()=>{
        const randomNumber = Math.floor(Math.random() * 3) + 1 
        if (randomNumber ===1){
            return "piedra";
        } else if (randomNumber ===2){
            return "papel";
        } else if(randomNumber ===3){
            return "tijera";
        }
    }

   
let userWins=0;
let computerWins=0;

    const play= (computerChoice, userChoice) =>{
        
        if(computerChoice === "piedra"){
            if(userChoice === "papel"){
                alert(`La computadora ha sacado pieda. ¡Has ganado!`);
                userWins++
            
            }
            if(userChoice === "tijera"){
                alert(`La computadora ha sacado pieda. ¡Has perdido!`);
                computerWins++
               
            }
            if(userChoice === "piedra"){
                alert(`La computadora ha sacado pieda. ¡Habéis empatado!`)
            }
        }

        if(computerChoice === "papel"){
            if(userChoice === "papel"){
                alert(`La computadora ha sacado papel. ¡Habéis empatado!`)
            }
            if(userChoice === "tijera"){
                alert(`La computadora ha sacado papel. ¡Has ganado!`);
                userWins++
               
            }
            if(userChoice === "piedra"){
                alert(`La computadora ha sacado papel. ¡Has perdido!`);
                computerWins++
              
            }
            
        }

        if(computerChoice === "tijera"){
            if(userChoice === "papel"){
                alert(`La computadora ha sacado tijera. ¡Has perdido!`);
                computerWins++
                
            }
            if(userChoice === "tijera"){
                alert(`La computadora ha sacado tijera. ¡Habéis empatad!`)
            }
            if(userChoice === "piedra"){
                alert(`La computadora ha sacado tijera. ¡Has ganado!`);
                userWins++
                
            }
        }
        
    }

  
    

   



  while(userWins<3 || computerWins<3){
    const computerChoice = generateComputerChoice();
    const userChoice = prompt("Elige piedra, papel o tijera").toLowerCase();
    play(computerChoice, userChoice);
    if(userWins ===3){
        alert("HAS GANADO EL JUEGO CONTRA LA COMPUTADORA!!")
        break;
    } else if(computerWins ===3){
        alert("HAS PERDIDO EL JUEGO CONTRA LA COMPUTADORA")
        break;
    }
  }
  
 
   

//    setTimeout(avisarCuandoTerminaLaCuentaAtras, tiempo)
   
 

   

    


   
     

    

    // if (userWins ===3){
    //     console.log("HAS GANADO EL JUEGO!!!")
    // }

    // if(computerWins ===3){
    //     console.log("HAS PERDIDO EL JUEGO!!!")
    // }
   




