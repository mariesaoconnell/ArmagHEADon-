// SCORE KEEPING

// COMPUTER GENERATED NUMBERS

// SELECTED ANSWER

let chosenAnswer = null;
let pointValueChosen = null;

// QUESTION DIV STAGE

const qCategory = document.querySelector('#qCategory');
const qQuestion = document.querySelector('#qQuestion');

 const ans1 = document.querySelector('#ans1');
 const ans2 = document.querySelector('#ans2');
 const ans3 = document.querySelector('#ans3');
 const ans4 = document.querySelector('#ans4');

// JOKE BLOCK WORKING

const j100Btn = document.querySelector('#j100');
const j200Btn = document.querySelector('#j200');
const j300Btn = document.querySelector('#j300');
const j400Btn = document.querySelector('#j400');

// RICKING JOKES
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

// JOKES CLICKED FUNCTION
function jokesClicked(key){
  let newObj = jokesObj[key];
  let ansArr = newObj.answers;

  qCategory.innerText = (jokesObj[key].category);
  qQuestion.innerText = (jokesObj[key]).question;

  ans1.value = ansArr[0].value;
  ans2.value = ansArr[1].value;
  ans3.value = ansArr[2].value;
  ans4.value = ansArr[3].value;

  pointValueChosen = key;

  console.log(`pointValueChosen: ${pointValueChosen}`)
  console.log(`Chosen Ans ${chosenAnswer}`)
};

// INVOKE JOKESCLICKED FUNC FOR TESTING
jokesClicked(200)


// CHECK ANSWER FUNCTION

function checkAnswer(){
  if(chosenAnswer.isCorrect){
    console.log('correct answer')
  } else{
    console.log('Wrong')
  }
}

// JOKES CLICKED EVENT LISTENERS

j100Btn.addEventListener('click', ()=>{
 jokesClicked(100);})

window.addEventListener('click', (event) => {

	if (event.target === ans1) {
    chosenAnswer = jokesObj[pointValueChosen].answers[0];
		checkAnswer();

	} else if (event.target === ans2) {
    chosenAnswer = jokesObj[pointValueChosen].answers[1];
    checkAnswer();

	} else if (event.target === ans3) {
		chosenAnswer = jokesObj[pointValueChosen].answers[2];
		checkAnswer();

	} else if (event.target == ans4) {
		chosenAnswer = jokesObj[pointValueChosen].answers[3];
		checkAnswer();
	}
});


j200Btn.addEventListener('click', ()=>{
 jokesClicked(200);
})
j300Btn.addEventListener('click', ()=>{
 jokesClicked(300);
})
j400Btn.addEventListener('click', ()=>{
 jokesClicked(400);
})

// ANSWER CLICKED EVENT LISTENERS


// ---------------------------------------

// RICK-FRENCES
const rf100 = document.querySelector('#rf100');
const rf200 = document.querySelector('#rf200');
const rf300 = document.querySelector('#rf300');
const rf400 = document.querySelector('#rf400');

// OBJECT
const referencesObj={
  100: "Rick-frences 100",
  200: "Rick-frences 200",
  300: "Rick-frences 300",
  400: "Rick-frences 400",
};

// FUNCTION
function referencesClicked(key){
  console.log(referencesObj[key])
}

// EVENT LISTENERS
rf100.addEventListener('click', () =>{
  referencesClicked(100)
})
rf200.addEventListener('click', () =>{
  referencesClicked(200)
})
rf300.addEventListener('click', () =>{
  referencesClicked(300)
})
rf400.addEventListener('click', () =>{
  referencesClicked(400)
})

// ---------------------------------------
const jer100 = document.querySelector('#jer100');
const jer200 = document.querySelector('#jer200');
const jer300 = document.querySelector('#jer300');
const jer400 = document.querySelector('#jer400');

// JERR-ICTERS
const charObj = {
	100: 'Jerri-cters 100',
	200: 'Jerri-cters  200',
	300: 'Jerri-cters  300',
	400: 'Jerri-cters 400',
};

function charactersClicked(key){
  console.log(charObj[key])
}

jer100.addEventListener('click', ()=>{
  charactersClicked(100)
});

jer200.addEventListener('click', ()=>{
  charactersClicked(200)
});
jer300.addEventListener('click', ()=>{
  charactersClicked(300)
});
jer400.addEventListener('click', ()=>{
  charactersClicked(400)
});

// ----------------------------------------

// MORT-SCELLANEOUS
const mort100 = document.querySelector('#mort100')
const mort200 = document.querySelector('#mort200')
const mort300 = document.querySelector('#mort300')
const mort400 = document.querySelector('#mort400')

const miscObj = {
	100: 'Misc 100',
	200: 'Misc 200',
	300: 'Misc 300',
	400: 'Misc 400',
};

function miscClicked(key){
  console.log(miscObj[key])
}

mort100.addEventListener('click', ()=>{
miscClicked(100);
})
mort200.addEventListener('click', ()=>{
miscClicked(200);
})
mort300.addEventListener('click', ()=>{
miscClicked(300);
})

mort400.addEventListener('click', ()=>{
miscClicked(400);
})
