/*

[] -- start menu
		[🟢] -- start button linked to rules

[] -- rules menu
		[🟢] -- button linked to Main Stage

[🟢] -- Main Stage
		[🟢] -- obj will contain keys associated with a value, the value will hold the associated answers/correct ans
		[🟢] -- event listener for every button -- upon click, Question Screen will be VISIBLE, gameStage will be HIDDEN
		[🟢] -- uppon button click, that category and value button will be disabled
		[🟢] -- score updated

[] -- Question Screen
		[🟢] -- Global function listening for answer clicks
		[🟢] -- Global checkAnswer function
		[] -- styling
		[🟢] -- answer clicked, delay, return back to main screen

[] -- Game Over

== STRETCH GOALS ==

[] -- visible timer
[] -- computer opponent

-------------------------------------------------------------------------------------------------------------------*/
// GLOBAL VARIABLES

let chosenAnswer = null;
let pointValueChosen = null;
let chosenCategoryObj = null;

let scoreValue = document.querySelector('#playerScoreValue');

let playerScore = 0
let questionsLeft = 16;


// QUESTION DIV STAGE
const questionDiv = document.querySelector('#questionDiv');
const qCategory = document.querySelector('#qCategory');
const qQuestion = document.querySelector('#qQuestion');
const gameStageDiv = document.querySelector('#gameStage');

const ans1 = document.querySelector('#ans1');
const ans2 = document.querySelector('#ans2');
const ans3 = document.querySelector('#ans3');
const ans4 = document.querySelector('#ans4');

// ==== GLOBAL FUNCTIONS / EVENT LISTENERS ====

function questionsLeftFunc(){
	if(questionsLeft<=0){
		alert('gameover!')
	}
	console.log(questionsLeft)
}

// 🟢 CHECK ANSWER FUNCTION
function checkAnswer(event){
	questionsLeft = questionsLeft - 1;
  if(chosenAnswer.isCorrect){
		playerScore += pointValueChosen;
		scoreValue.innerText = playerScore;
		// event.target.style.backgroundColor="lime";
		alert('Correct!')
    console.log('correct answer')
  } else{
		// event.target.style.backgroundColor = 'red';
		alert('Wrong!')
    console.log('Wrong')
  }
	event.target.style.background="black"
	backToMain();
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
	questionDiv.style.visibility = "hidden"
	gameStageDiv.style.visibility = "visible"
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


// ==== CATEGORY SPECIFIC ====

// JOKE BLOCK CATEGORY BUTTON
const j100Btn = document.querySelector('#j100');
const j200Btn = document.querySelector('#j200');
const j300Btn = document.querySelector('#j300');
const j400Btn = document.querySelector('#j400');

// JOKES OBJECT
const jokesObj = {
	100: {
		category: 'Jokes',
		question: 'Question 1',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	200: {
		category: 'Jokes',
		question: 'Question 2',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	300: {
		category: 'Jokes',
		question: 'Question 3',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	400: {
		category: 'Jokes',
		question: 'Question 4',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
};

// 🟢 JOKES CLICKED FUNCTION
function jokesClicked(key){
  chosenCategoryObj = jokesObj;
  pointValueChosen = key;
  let ansArr = chosenCategoryObj[pointValueChosen].answers;
  console.log(`ans array ${ansArr}`)

  qCategory.innerText = (chosenCategoryObj[key].category);
  qQuestion.innerText = chosenCategoryObj[key].question;

  ans1.value = ansArr[0].value;
  ans2.value = ansArr[1].value;
  ans3.value = ansArr[2].value;
  ans4.value = ansArr[3].value;


  console.log(`pointValueChosen: ${pointValueChosen}`)
  console.log(`Chosen Ans ${chosenAnswer}`)
};

// INVOKE JOKESCLICKED FUNC FOR TESTING
jokesClicked(400)

// CATEGORY CLICK
function categoryClick(event){
	// disable clicked button & make red
	 event.target.disabled = 'true';
	 event.target.style.color = 'red';
	 event.target.style.backgroundColor = '#333333';

	// remove hover effect
		toggleHover(event);

	// swaps player view
		gameStageDiv.style.visibility = 'hidden';
		questionDiv.style.visibility = 'visible';

	// reset answer color
}

// JOKE BUTTON CLICKED
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
// jokesClicked(100)
// ---------------------------------------

// ==== RICK-FRENCES BLOCK ====
const rf100 = document.querySelector('#rf100');
const rf200 = document.querySelector('#rf200');
const rf300 = document.querySelector('#rf300');
const rf400 = document.querySelector('#rf400');

// OBJECT
const referencesObj = {
	100: {
		category: 'References',
		question: 'Question 1',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	200: {
		category: 'References',
		question: 'Question 2',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	300: {
		category: 'References',
		question: 'Question 3',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	400: {
		category: 'References',
		question: 'Question 4',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
};

// FUNCTION
function referencesClicked(key){
  chosenCategoryObj = referencesObj;
  pointValueChosen = key;
  let ansArr = chosenCategoryObj[pointValueChosen].answers;
  console.log(`ans array ${ansArr}`)

  qCategory.innerText = (chosenCategoryObj[key].category);
  qQuestion.innerText = chosenCategoryObj[key].question;

  ans1.value = ansArr[0].value;
  ans2.value = ansArr[1].value;
  ans3.value = ansArr[2].value;
  ans4.value = ansArr[3].value;


  console.log(`pointValueChosen: ${pointValueChosen}`)
  console.log(`Chosen Ans ${chosenAnswer}`)
};

// EVENT LISTENERS
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

// 🟢 TEST REFERENCES CLICKED FUNC
// referencesClicked(100)

// ---------------------------------------

// ==== CHARACTERS BLOCK ====

const jer100 = document.querySelector('#jer100');
const jer200 = document.querySelector('#jer200');
const jer300 = document.querySelector('#jer300');
const jer400 = document.querySelector('#jer400');

// JERR-ICTERS
const charObj = {
	100: {
		category: 'CHARACTERS',
		question: 'Question 1',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	200: {
		category: 'CHARACTERS',
		question: 'Question 2',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	300: {
		category: 'CHARACTERS',
		question: 'Question 3',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	400: {
		category: 'CHARACTERS',
		question: 'Question 4',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
};

function charactersClicked(key){
    chosenCategoryObj = charObj;
		pointValueChosen = key;
		let ansArr = chosenCategoryObj[pointValueChosen].answers;
		console.log(`ans array ${ansArr}`);

		qCategory.innerText = chosenCategoryObj[key].category;
		qQuestion.innerText = chosenCategoryObj[key].question;

		ans1.value = ansArr[0].value;
		ans2.value = ansArr[1].value;
		ans3.value = ansArr[2].value;
		ans4.value = ansArr[3].value;

		console.log(`pointValueChosen: ${pointValueChosen}`);
		console.log(`Chosen Ans ${chosenAnswer}`);
}
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

// 🟢 CHARACTER BLOCK TEST
// charactersClicked(100)

// ----------------------------------------

// MORT-SCELLANEOUS
const mort100 = document.querySelector('#mort100')
const mort200 = document.querySelector('#mort200')
const mort300 = document.querySelector('#mort300')
const mort400 = document.querySelector('#mort400')

const miscObj = {
	100: {
		category: 'MISCELLANEOUS',
		question: 'Question 1',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	200: {
		category: 'MISCELLANEOUS',
		question: 'Question 2',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	300: {
		category: 'MISCELLANEOUS',
		question: 'Question 3',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
	400: {
		category: 'MISCELLANEOUS',
		question: 'Question 4',
		answers: [
			{ value: 'Answer 1', isCorrect: false },
			{ value: 'Answer 2', isCorrect: true },
			{ value: 'Answer 3', isCorrect: false },
			{ value: 'Answer 4', isCorrect: false },
		],
	},
};

function miscClicked(key){
    chosenCategoryObj = miscObj;
		pointValueChosen = key;
		let ansArr = chosenCategoryObj[pointValueChosen].answers;
		console.log(`ans array ${ansArr}`);

		qCategory.innerText = chosenCategoryObj[key].category;
		qQuestion.innerText = chosenCategoryObj[key].question;

		ans1.value = ansArr[0].value;
		ans2.value = ansArr[1].value;
		ans3.value = ansArr[2].value;
		ans4.value = ansArr[3].value;

		console.log(`pointValueChosen: ${pointValueChosen}`);
		console.log(`Chosen Ans ${chosenAnswer}`);
}

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

// 🟢 MISC CLICKED FUNC TEST
// miscClicked(100)
