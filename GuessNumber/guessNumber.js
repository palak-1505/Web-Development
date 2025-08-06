
let randomNumber =parseInt(( Math.random()*100+1));

const userInput=document.querySelector('#userInput');
const submit = document.querySelector('#subt');
const remaining = document.querySelector('.lastResult');
const prev = document.querySelector('.guesses');
const lowOrhigh = document.querySelector('.lowORhigh');
const info =document.querySelector('.info');

const p = document.createElement('p');

let prevGuess = []; 
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        valiadateGuess(guess);
    });
}

function valiadateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number!");
    }else if(guess<1){
        alert("Please enter a valid number!");
    }else if(guess>100){
        alert("Please enter a valid number!");
    }else{
        prevGuess.push(guess);
        if(numGuess===9){
            displayGuess(guess);
            displayMessage(`Game Over ! Randon number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }

    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right !`);
        endGame();
    }else if(guess > randomNumber){
        displayMessage(`Your guess is TOOO high !`);
    }else if(guess < randomNumber){
        displayMessage(`Your guess is TOOO low !`);
    }

}

function displayGuess(guess){
    userInput.value='';
    prev.innerHTML+= `${guess} , `;
    numGuess++;
    remaining.innerHTML= `${9-numGuess}`;

}

function displayMessage(message){
    lowOrhigh.innerHTML=`<h2>${message}</h2>`;

}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  info.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    prev.innerHTML = '';
    remaining.innerHTML = `${9 - numGuess} `;
    userInput.removeAttribute('disabled');
    info.removeChild(p);
    playGame = true;
  });
}