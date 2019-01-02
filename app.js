let userScore = 0;
let computerScore = 0;
const userScoreEL = document.getElementById("user-score");
const computerScoreEL = document.getElementById("computer-score");
const scoreBoardEL = document.querySelector(".score-board");
const resultEL = document.querySelector(".result > p");
const rockEL = document.getElementById("r");
const scizorsEL = document.getElementById("s");
const paperEL = document.getElementById("p");

function computerChoice(){
	const choice = ['r','p','s'];
	let randomNumber = Math.floor(Math.random() * 3);
	return choice[randomNumber];
}

function convertToWord(letter){
	switch(letter){
		case "r":
			return "Rock";
			break;
		case "s":
			return "Scizors";
			break;
		case "p":
			return "Paper";
			break;
	}
}


function win(user,computer){
	userScore++;	
	userScoreEL.innerHTML = userScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	resultEL.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!`;
	let userChoiceEl = document.getElementById(user);
	userChoiceEl.classList.add('green-glow');
	setTimeout(function(){userChoiceEl.classList.remove('green-glow');},500);
	
}

function lose(user,computer){
	computerScore++;	
	computerScoreEL.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	resultEL.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You lost!`;
	let userChoiceEl = document.getElementById(user);
	userChoiceEl.classList.add('red-glow');
	setTimeout(function(){userChoiceEl.classList.remove('red-glow');},500);
}

function draw(user,computer){	
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	resultEL.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}. Draw!`;
	let userChoiceEl = document.getElementById(user);
	userChoiceEl.classList.add('gray-glow');
	setTimeout(function(){userChoiceEl.classList.remove('gray-glow');},500);
}

function game(userChoice){
	let cChoice = computerChoice();
	switch(userChoice + cChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,cChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,cChoice);
			break;
		case "pp":
		case "rr":
		case "ss":
			draw(userChoice,cChoice);
			break;
	}
}

function main(){

	rockEL.addEventListener('click',e=>{
		game("r");
	});

	scizorsEL.addEventListener('click',e=>{
		game("s");
	});

	paperEL.addEventListener('click',e=>{
		game("p");
	});
}

main();
