// SCORE KEEPING

// COMPUTER GENERATED NUMBERS


// JOKE BLOCK WORKING

const j100Btn = document.querySelector('#j100');
const j200Btn = document.querySelector('#j200');
const j300Btn = document.querySelector('#j300');
const j400Btn = document.querySelector('#j400');

// RICKING JOKES
const jokesObj = {
  100:"Jokes for 100",
  200:"Jokes for 200",
  300:"Jokes for 300",
  400:"Jokes for 400",
};

// JOKES CLICKED FUNCTION
function jokesClicked(key){
  console.log(jokesObj[key]);
};

// JOKES CLICKED EVENT LISTENERS
j100Btn.addEventListener('click', ()=>{
 jokesClicked(100);
})
j200Btn.addEventListener('click', ()=>{
 jokesClicked(200);
})
j300Btn.addEventListener('click', ()=>{
 jokesClicked(300);
})
j400Btn.addEventListener('click', ()=>{
 jokesClicked(400);
})

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
