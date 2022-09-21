const rulesParagraph = document.querySelector('#pRules');
const nxtBttn = document.querySelector('#nxtBtn')
const startBttn = document.querySelector('#gameStart')


function firstClick(){
  rulesParagraph.innerText="";
  rulesParagraph.innerText =
		"If you have an inkling that you've seen something similar before, your senses prove you right! It seems their show was inspired by Alex Trebek, because it's seemingly similar to Jeopardy 🤔";

    nxtBttn.removeAttribute("onclick");
    nxtBttn.setAttribute("onclick", "secondClick()")
}

function secondClick(){
  rulesParagraph.innerText = '';
	rulesParagraph.innerText =
      "  Anywho! There are Four Categories and each Category contains Four Questions with different point values-- the higher the point value, the higher the question!"
	nxtBttn.removeAttribute('onclick');
	nxtBttn.setAttribute('onclick', 'thirdClick()');
}

function thirdClick() {
	rulesParagraph.innerText = '';
	rulesParagraph.innerText =
		"I'm sure you're asking yourself How do I win?, that's a GREAT question! The Cromulonians agreed to put their ray guns away, this is just a test run to see if you share a similar love for the schwiftiest schwifters!";

    startBttn.style.visibility="visible"
    nxtBttn.style.display="none"
}
