
/*=====================================VARIABLES=============================*/


// GLOBAL VARIABLES
let chosenAnswer = null;
let pointValueChosen = null;
let chosenCategoryObj = null;

let scoreValue = document.querySelector('#playerScoreValue');

let playerScore = 0
let questionsLeft = 16;


// QUESTION DIV STAGES
const questionDiv = document.querySelector('#questionDiv');
const qCategory = document.querySelector('#qCategory');
const qQuestion = document.querySelector('#qQuestion');

// MAIN STAGE
const gameStageDiv = document.querySelector('#gameStage');
const mainGameTable = document.querySelector('#mainTable');

// CORRECT ANSWER STAGE
const correctAnsDiv = document.querySelector('#right-answer-react');

// WRONG ANSWER STAGE
const wrongAnsDiv = document.querySelector('#wrong-answer-react');


// ANSWER BUTTONS ON QUESTION DIV STAGE
const ans1 = document.querySelector('#ans1');
const ans2 = document.querySelector('#ans2');
const ans3 = document.querySelector('#ans3');
const ans4 = document.querySelector('#ans4');

// REACTION DOM ELEMENTS
const rightAnswerImg = document.querySelector('#right-answer-image');
const wrongAnswerImg = document.querySelector('#wrong-answer-image');

// REACTION VARIABLES
let rightAnswerReact = 1;
let wrongAnswerReact = 1;

// REACTION COUNTDOWN
const rightCount = document.querySelector('#right-countdown');
const wrongCount = document.querySelector('#wrong-countdown');

// GAME OVER
const goDiv = document.querySelector('#game-over-div');
const goScore = document.querySelector('#game-over-score-value');

const bodyElement = document.querySelector('body');


// ================== GLOBAL FUNCTIONS / EVENT LISTENERS ====================

// 🟢 GAME OVER FUNCTION
function gameOver(){
	correctAnsDiv.style.visibility="hidden";
	wrongAnsDiv.style.visibility="hidden";
	goDiv.style.visibility="visible";
	document.querySelector('main').style.visibility="hidden";
	goScore.innerText=playerScore;

	bodyElement.style.backgroundImage="none";
	bodyElement.style.backgroundColor="black";
}


// 🟢 QUESTIONS LEFT FUNCTION -- DETERMINES IF ALL QUESTIONS HAVE BEEN ANSWERED
function questionsLeftFunc(){
	if(questionsLeft<=0){
		gameOver();
	}
	console.log(questionsLeft)
}

// 🟢 CORRECT ANSWER REACTION FUNCTION

function correctAns(){
	// changes player view
	questionDiv.style.visibility="hidden";
	correctAnsDiv.style.visibility="visible";

	playerScore += pointValueChosen; // adds points
	scoreValue.innerText = playerScore; // updates score

	// handles reaction image, iterates through assets/right images
	if(rightAnswerReact>6){
		rightAnswerReact = 1;
		rightAnswerImg.src = `./assets/right/right-answer${rightAnswerReact}.gif`;
	} else {
		rightAnswerImg.src = `./assets/right/right-answer${rightAnswerReact}.gif`;
	}
	rightAnswerReact++;

		// countdown variable
		rightCount.innerText = 5;

		// countdown timer
		setInterval(()=>{

			rightCount.innerText = (parseInt(rightCount.innerText))-1;

			if(parseInt(rightCount.innerText)<=0){
				backToMain();
			}

		}, 2000);
}


// 🟢 WRONG ANSWER REACTION FUNCTION
function wrongAns(){

	// changes player view
	questionDiv.style.visibility = 'hidden';
	wrongAnsDiv.style.visibility = 'visible';

	// handles reaction image, iterates through assets/right images
	if (wrongAnswerReact > 4) {
		wrongAnswerReact = 1;
		wrongAnswerImg.src = `./assets/wrong/wrong-answer${wrongAnswerReact}.gif`;
	} else {
		wrongAnswerImg.src = `./assets/wrong/wrong-answer${wrongAnswerReact}.gif`;
	}

	// wrong ans increment
	wrongAnswerReact++;

	// count down variable
	wrongCount.innerText = 5;

	// count down variable
	setInterval(() => {
		wrongCount.innerText = (parseInt(wrongCount.innerText)) - 1;
		console.log(`wrongCount.innerText ${wrongCount.innerText}`);
		if (parseInt(wrongCount.innerText) <= 0) {
			backToMain();
		}
	}, 2000);
}


// 🟢 CHECK ANSWER FUNCTION
function checkAnswer(event){

	// decrements questions left
	questionsLeft = questionsLeft - 1;

	// CHECKS ANSWER BLOCK
  if(chosenAnswer.isCorrect){
		correctAns();
    console.log('correct answer')
  } else{
		wrongAns();
    console.log('Wrong')
  }
}


// 🟢 TOGGLE HOVER FUNC ON MAIN
	function toggleHover(event) {
		if (event.target.classList.contains('mainBtn') && !(event.target.classList.contains('answerBttn'))) {
			event.target.removeAttribute('class');
		} else {
			return;
		}
	}


// 🟢 BACK TO MAIN FUNC
function backToMain(){
	questionsLeftFunc();
	questionDiv.style.visibility = "hidden";
	gameStageDiv.style.visibility = "visible";
	mainGameTable.style.visibility = "visible";
	correctAnsDiv.style.visibility="hidden";
	wrongAnsDiv.style.visibility= "hidden";
}


// 🟢 ANSWERS CLICKED
window.addEventListener('click', (event) => {
  if (event.target === ans1) {
    chosenAnswer = chosenCategoryObj[pointValueChosen].answers[0];
    checkAnswer(event);
  } else if (event.target === ans2) {
    chosenAnswer = chosenCategoryObj[pointValueChosen].answers[1];
    checkAnswer(event);
  } else if (event.target === ans3) {
    chosenAnswer = chosenCategoryObj[pointValueChosen].answers[2];
    checkAnswer(event);
  } else if (event.target == ans4) {
    chosenAnswer = chosenCategoryObj[pointValueChosen].answers[3];
    checkAnswer(event);
  }
});

// 🟢 CATEGORY CLICK FUNCTION
function categoryClick(event){

	// disable clicked button & make red
	 event.target.disabled = 'true';
	 event.target.style.color = 'red';
	 event.target.style.backgroundColor = '#333333';

	// remove hover effect
		toggleHover(event);

	// swaps player view
		gameStageDiv.style.visibility = 'hidden';
		questionDiv.style.visibility= 'visible';
}


// ======================== CATEGORY SPECIFIC =============================


// JOKE CATEGORY

// joke buttons
const j100Btn = document.querySelector('#j100');
const j200Btn = document.querySelector('#j200');
const j300Btn = document.querySelector('#j300');
const j400Btn = document.querySelector('#j400');


// jokes Q & A object
const jokesObj = {
	100: {
		category: 'Jokes',
		question:
			'This multi-episode joke is famous for it\'s seemingly improvised commercials and TV Shows.',
		answers: [
			{ value: 'Intergallactic Cable', isCorrect: false },
			{ value: 'Interdimensional Cable', isCorrect: true },
			{ value: 'Interplanetary Cable', isCorrect: false },
			{ value: 'The LifeTime Network', isCorrect: false },
		],
	},
	200: {
		category: 'Jokes',
		question: 'This famous Rick catch phrase means, "I am in great pain"',
		answers: [
			{ value: '"Ricky-Ticky-Taffy"', isCorrect: false },
			{ value: '"I\'m Pickle Rick!"', isCorrect: true },
			{ value: '"And that\'s the waaaAAAAaaaaaAAAay the news goes"', isCorrect: false },
			{ value: '"Wubba-lubba-Dub-Dub"', isCorrect: false },
		],
	},
	300: {
		category: 'Jokes',
		question: 'In what seemed like a one off joke from an episode Rick-Shank Rick-Demption Rick gives up his ability to improv and can only adlib using the following phrase:',
		answers: [
			{ value: '"I gotta go see a man about a horse"', isCorrect: false },
			{ value: '"I don\'t want to be here anymore"', isCorrect: false },
			{ value: '"I gotta go take a 💩</colorful>"', isCorrect: true },
			{ value: '"No Thanks, I\'m busy"', isCorrect: false },
		],
	},
	400: {
		category: 'Jokes',
		question: 'In the episode "Close Rick-Counters of the Rick Kind" Jerry makes a friend whose picture can be seen framed hidden away in the garage in a later episode',
		answers: [
			{ value: 'Doofus Rick', isCorrect: true },
			{ value: 'Cousin Nicky', isCorrect: false },
			{ value: 'Sleepy Gary', isCorrect: false },
			{ value: 'Squanchy', isCorrect: false },
		],
	},
};


// 🟢 jokes clicked function
function jokesClicked(key){
  chosenCategoryObj = jokesObj;
  pointValueChosen = key;

  let ansArr = chosenCategoryObj[pointValueChosen].answers;

  qCategory.innerText = (chosenCategoryObj[key].category);
  qQuestion.innerText = chosenCategoryObj[key].question;

  ans1.value = ansArr[0].value;
  ans2.value = ansArr[1].value;
  ans3.value = ansArr[2].value;
  ans4.value = ansArr[3].value;
};


// main game jokes category event listeners
j100Btn.addEventListener('click', (event)=>{
 jokesClicked(100);
 categoryClick(event);
});

j200Btn.addEventListener('click', (event)=>{
 jokesClicked(200);
categoryClick(event);
});
j300Btn.addEventListener('click', (event)=>{
 jokesClicked(300);
categoryClick(event);
});
j400Btn.addEventListener('click', (event)=>{
 jokesClicked(400);
categoryClick(event);
});


// ==========================================================================

// REFERENCES CATEGORY


// references buttons
const rf100 = document.querySelector('#rf100');
const rf200 = document.querySelector('#rf200');
const rf300 = document.querySelector('#rf300');
const rf400 = document.querySelector('#rf400');

// references Q & A object
const referencesObj = {
	100: {
		category: 'References',
		question: 'When Rick is dating the Hive Mind known as Unity, he, at one point has her imitate the entire cast of this other Dan Harmon show, while describing the show\'s life cycle.',
		answers: [
			{ value: 'Community', isCorrect: true },
			{ value: 'Pokemon', isCorrect: false },
			{ value: 'Jersey Shore', isCorrect: false },
			{ value: 'Squid Game', isCorrect: false },
		],
	},
	200: {
		category: 'References',
		question: 'Referenced in a Christmas Themed episode, this test gauges the active presence of female actresses in hollywood films',
		answers: [
			{ value: 'The Firmi Paradox', isCorrect: false },
			{ value: 'The Heisenburg\'s Uncertainty Principle', isCorrect: false },
			{ value: 'The Bechdel Test', isCorrect: true },
			{ value: 'The Strawman Fallacy', isCorrect: false },
		],
	},
	300: {
		category: 'References',
		question: 'An Inter-Dimensional cable commercial stars eight separate versions of this actor',
		answers: [
			{ value: 'Rob Schneider', isCorrect: false },
			{ value: 'Nathan Fillion', isCorrect: false },
			{ value: 'Elon Tusk', isCorrect: false },
			{ value: 'Jan Michael Vincent', isCorrect: true },
		],
	},
	400: {
		category: 'References',
		question: 'In Season 6, the family receives the most "realistic" gaming console in the universe. In the fighting game, one of the characters that can be seen is a reference to another Dan Harmon character in the fan favorite show "Community".',
		answers: [
			{ value: 'Jeff Winger', isCorrect: false },
			{ value: 'Kick Puncher', isCorrect: true },
			{ value: 'Professor Chang', isCorrect: false },
			{ value: 'Star Burns', isCorrect: false },
		],
	},
};


// 🟢 miscellaneous clicked function
function referencesClicked(key){
  chosenCategoryObj = referencesObj;
  pointValueChosen = key;
  let ansArr = chosenCategoryObj[pointValueChosen].answers;

  qCategory.innerText = (chosenCategoryObj[key].category);
  qQuestion.innerText = chosenCategoryObj[key].question;

  ans1.value = ansArr[0].value;
  ans2.value = ansArr[1].value;
  ans3.value = ansArr[2].value;
  ans4.value = ansArr[3].value;
};


// main game references category event listeners
rf100.addEventListener('click', (event) =>{
  referencesClicked(100)
	categoryClick(event);
});
rf200.addEventListener('click', (event) => {
	referencesClicked(200);
	categoryClick(event);
});
rf300.addEventListener('click', (event) => {
	referencesClicked(300);
	categoryClick(event);
});
rf400.addEventListener('click', (event) => {
	referencesClicked(400);
	categoryClick(event);
});


// ==========================================================================

// CHARACTERS CATEGORY


// characters buttons
const jer100 = document.querySelector('#jer100');
const jer200 = document.querySelector('#jer200');
const jer300 = document.querySelector('#jer300');
const jer400 = document.querySelector('#jer400');


const charImg = document.querySelector('#q-img');

// miscellaneous Q & A object
const charObj = {
	100: {
		category: 'CHARACTERS',
		question: './assets/characters/fart.gif',
		answers: [
			{ value: 'Shiny Cloud', isCorrect: false },
			{ value: 'Fart', isCorrect: true },
			{ value: 'Rick', isCorrect: false },
			{ value: 'Jarmaine Clemmons', isCorrect: false },
		],
	},
	200: {
		category: 'CHARACTERS',
		question: './assets/characters/mrmeeseeks.gif',
		answers: [
			{ value: 'Blueman Group Member', isCorrect: false },
			{ value: 'Jerry', isCorrect: true },
			{ value: 'Mr.Meeseeks', isCorrect: true },
			{ value: 'Existence is Pain', isCorrect: true },
		],
	},
	300: {
		category: 'CHARACTERS',
		question: './assets/characters/scaryterry.gif',
		answers: [
			{ value: 'Freddy Krueger', isCorrect: false },
			{ value: 'Man with Knives for fingers', isCorrect: false },
			{ value: 'Jason', isCorrect: false },
			{ value: 'Scary Terry', isCorrect: true },
		],
	},
	400: {
		category: 'CHARACTERS',
		question: './assets/characters/snuffles.gif',
		answers: [
			{ value: 'Morty\'s Dog', isCorrect: false },
			{ value: 'Snuffles', isCorrect: true },
			{ value: 'The dog that Jerry got mad at for peeing on the rug', isCorrect: true },
			{ value: 'Snowball', isCorrect: true },
		],
	},
};

// 🟢 miscellaneous clicked function
function charactersClicked(key){
    chosenCategoryObj = charObj;
		pointValueChosen = key;
		let ansArr = chosenCategoryObj[pointValueChosen].answers;
		qCategory.innerText = chosenCategoryObj[key].category;
		charImg.src = chosenCategoryObj[key].question;

		ans1.value = ansArr[0].value;
		ans2.value = ansArr[1].value;
		ans3.value = ansArr[2].value;
		ans4.value = ansArr[3].value;
}


// main game characters category event listeners
jer100.addEventListener('click', (event) => {
	charactersClicked(100);
	categoryClick(event);
});

jer200.addEventListener('click', (event) => {
	charactersClicked(200);
	categoryClick(event);
});
jer300.addEventListener('click', (event) => {
	charactersClicked(300);
	categoryClick(event);
});
jer400.addEventListener('click', (event) => {
	charactersClicked(400);
	categoryClick(event);
});


// ==========================================================================


// miscellaneous block


const mort100 = document.querySelector('#mort100')
const mort200 = document.querySelector('#mort200')
const mort300 = document.querySelector('#mort300')
const mort400 = document.querySelector('#mort400')


// miscellaneous Q & A object
const miscObj = {
	100: {
		category: 'MISCELLANEOUS',
		question: 'What\'s Rick\'s lastname?',
		answers: [
			{ value: 'Anderson', isCorrect: false },
			{ value: 'Ross', isCorrect: false },
			{ value: 'Martin', isCorrect: false },
			{ value: 'Sanchez', isCorrect: true },
		],
	},
	200: {
		category: 'MISCELLANEOUS',
		question: 'The Schezuan sauce that Rick is obsessed with is a real life promotional sauce offered by McDonald\'s the the hit children\'s movie...',
		answers: [
			{ value: 'Aladin', isCorrect: false },
			{ value: 'Mulan', isCorrect: true },
			{ value: 'Veggie Tales', isCorrect: false },
			{ value: 'The Brave Little Toaster', isCorrect: false },
		],
	},
	300: {
		category: 'MISCELLANEOUS',
		question: 'What universe if the Rick that we follow originally from?',
		answers: [
			{ value: 'C-137', isCorrect: true },
			{ value: 'Eee-arth', isCorrect: false },
			{ value: 'The Milkyway', isCorrect: false },
			{ value: 'G-137', isCorrect: false },
		],
	},
	400: {
		category: 'MISCELLANEOUS',
		question: 'In the episode \'The Ricks Must Be Crazy\', Rick reveals he\'s created a microverse, a tiny universe, whose entire existence is to power his...',
		answers: [
			{ value: 'Portal Gun', isCorrect: false },
			{ value: 'Plumbus', isCorrect: false },
			{ value: 'Car', isCorrect: true },
			{ value: 'Flashlight', isCorrect: false },
		],
	},
};


// 🟢 miscellaneous clicked function
function miscClicked(key){
    chosenCategoryObj = miscObj;
		pointValueChosen = key;
		let ansArr = chosenCategoryObj[pointValueChosen].answers;

		qCategory.innerText = chosenCategoryObj[key].category;
		qQuestion.innerText = chosenCategoryObj[key].question;

		ans1.value = ansArr[0].value;
		ans2.value = ansArr[1].value;
		ans3.value = ansArr[2].value;
		ans4.value = ansArr[3].value;
}


// main game miscellaneous category event listeners
mort100.addEventListener('click', (event) => {
	miscClicked(100);
	categoryClick(event);
});
mort200.addEventListener('click', (event) => {
	miscClicked(200);
	categoryClick(event);
});
mort300.addEventListener('click', (event) => {
	miscClicked(300);
	categoryClick(event);
});

mort400.addEventListener('click', (event) => {
	miscClicked(400);
	categoryClick(event);
});
