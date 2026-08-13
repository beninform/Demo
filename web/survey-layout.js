// modify the original plugin html layout
// setup for the attention check boxes
function setupSurveyLayout() {
    const contentDiv = document.getElementById("jspsych-content");
    const surveyFormDiv = document.getElementById("jspsych-survey-text-form");
    const surveyFormQ1 = document.getElementById("jspsych-survey-text-0");
    const surveyFormQ2 = document.getElementById("jspsych-survey-text-1");

    // create outer wrapper for new layout
    const outerWrapper = document.createElement("div");
    outerWrapper.id = "outer-wrapper";
    outerWrapper.classList.add("outer-wrapper");

    // new div for preamble and form
    const preambleWrapper = document.createElement("div");
    preambleWrapper.id = "preamble-form-wrapper";
    preambleWrapper.classList.add("preamble-form-wrapper");

    // new div for instructions and candidate rules
    const instructionsDiv = document.createElement("div");
    instructionsDiv.id = "instructions-div";
    instructionsDiv.classList.add("instructions-div");

    // Move the original content into new layout
    // Moves (doesn't clone) all elements from jspsych-content div into preamble-form-wrapper div
    // (proceeds by moving each first child in order until there are none left)
    while (contentDiv.firstChild) {
      preambleWrapper.appendChild(contentDiv.firstChild);
    }

    // Build the new structure for layout
    outerWrapper.appendChild(preambleWrapper);
    outerWrapper.appendChild(instructionsDiv);

    // Insert outer-wrapper (and all it now contains) as the first element inside jspsych-content div
    contentDiv.prepend(outerWrapper);


    // create survey form row div
    const formRowDiv = document.createElement("div");
    // formRowDiv.id = "form-row";
    formRowDiv.classList.add("form-row");

    // Move original questions and answer boxes into new row div
    formRowDiv.appendChild(surveyFormQ1);
    formRowDiv.appendChild(surveyFormQ2);

    // insert form row div (and its content) into jspsych-survey-text-form div
    surveyFormDiv.prepend(formRowDiv);


};

// for shuffling candidate rules array
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


function setupRightHandDiv(isExample, tid, imgno) {
    let bongProbNumber = imgno;

    // Set the timer to show skip button after delay
    const myTimer = createResettableTimer(() => {
        // showSkipButton();
        console.log('Timer finished! Sixty seconds since new page loaded.');
    }, 60000);

    const instructionsDivRH = document.getElementById("instructions-div");

    // create instruction-box-div for instructions and candidate rules
    const instructionsBoxDiv = document.createElement("div");
    instructionsBoxDiv.classList.add("instruction-box");
    instructionsBoxDiv.style.height = "100%";

    // add instructions from trial-text (according to example or ncr/wcr)
    if (isExample) {
        instructionsBoxDiv.innerHTML = trialText.ExampleProblemInstructions  // if example
    } else {
        instructionsBoxDiv.innerHTML = trialText.ProblemInstructions  // if regular BP
    }
    if (tid=='wcr') {
        instructionsBoxDiv.innerHTML += trialText.wcrInstructions  // if wcr
    }        


    // insert instructions-box into instructions-div
    instructionsDivRH.prepend(instructionsBoxDiv);

    const tableContainer = document.createElement("div");
    tableContainer.id = "table-container";
    tableContainer.classList.add("table-container");

    h3Element = document.createElement("h3");
    h3Element.innerText = 'Candidate Rules';
    tableContainer.prepend(h3Element);

    instructionsDivRH.append(tableContainer);


    generateTable(bongProbNumber);


}