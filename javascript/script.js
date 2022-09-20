
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

// RICK-RENCES
const referencesObj={};

function referencesClicked(){
}

// JERR-ICTERS
const charObj = {};

function charactersClicked(){

}

// MORT-SCELLANEOUS
const miscObj= {};

function miscClicked(){

}
