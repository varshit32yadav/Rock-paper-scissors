const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const winner = document.querySelector(".winner");
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
      hands.forEach( (hand)=>{
          hand.addEventListener('animationend',function(){
             this.style.animation=''; 
          })
      }

      );
     
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
            setTimeout(()=>{
                //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
            },2000);
          
          //Animation
          computerHand.style.animation="shakecomputer 2s ease";
          playerHand.style.animation="shakeplayer 2s ease";
        });
      });
    };
    const updateScore = () => {
      const winner = document.querySelector(".winner");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const neww = document.querySelector(".neww");
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
      setTimeout(()=>{
        if(pScore ==2)
      {
        game(); neww.textContent="player wins the match"; window.alert("HARD LUCK!! PLAYER WON LET'S START NEW MATCH"); 
        setTimeout(()=>{
          pScore=0;cScore=0; 
          playerHand.src = `./assets/rock.png`;
          computerHand.src = `./assets/rock.png`;
          winner.textContent="Let's Start";
          updateScore();return;
        },1000);
       
      }
      else if(cScore ==2)
      {
        game(); neww.textContent="computer wins the match"; window.alert("HARD LUCK!! COMPUTER WON LET'S START NEW MATCH"); 
        setTimeout(()=>{
          pScore=0;cScore=0; 
          playerHand.src = `./assets/rock.png`;
          computerHand.src = `./assets/rock.png`;
          winner.textContent="Let's Start";
          updateScore();return;
        },900);
      }
      
      },100);
      
     
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //new match
     //Checking for a tie
     if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie" ;
      return;
    }
      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();
  