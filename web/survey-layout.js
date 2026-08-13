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

    // reinstate focus after div manipulation (autofocus doesn't survive it)
    const area0 = document.getElementById("input-0");
    area0.focus();

};


function moveContinueButton() {
    const buttonGroup = document.getElementById("jspsych-html-button-response-btngroup");
    const preambleWrapper = document.getElementById("preamble-form-wrapper");
    preambleWrapper.appendChild(buttonGroup);
}





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


// setup tabs for the example problem
function setupExampleRulesTabs() {

    // const formDiv = document.getElementById("jspsych-survey-text-form");
    const egRulesDiv = document.getElementById("example-rules-div");

    const tabContainer = document.createElement('div');
    tabContainer.id = 'eg-tab-container';
    tabContainer.className = 'eg-tab-container';

    const tabHeader = document.createElement('div');
    tabHeader.className = 'eg-tab-header';

    const label = document.createElement('p');
    label.className = 'eg-tab-btn';
    label.innerText = 'Example Rule Pairs:';
    label.style.cursor = 'default'; 

    const btnGd = document.createElement('button');
    btnGd.className = 'eg-tab-btn';
    btnGd.innerText = 'Good ones';
    btnGd.type = 'button'; 
    btnGd.style.cursor = 'pointer'; 

    const btnBd = document.createElement('button');
    btnBd.className = 'eg-tab-btn';
    btnBd.innerText = 'Bad ones';
    btnBd.type = 'button';

    tabHeader.appendChild(label);
    tabHeader.appendChild(btnGd);
    tabHeader.appendChild(btnBd);
    tabContainer.appendChild(tabHeader);
    
    const tabContent = document.createElement('div');
    tabContent.className = 'eg-tab-content';

    // create first content
    const divGd = document.createElement('div');
    divGd.classList.add("eg-good-rules");
    setupExampleRulesTable('good', divGd, trialText.exampleGoodRulesArray)

    // create second content
    const divBd = document.createElement('div');
    divBd.classList.add("eg-bad-rules");
    setupExampleRulesTable('bad', divBd, trialText.exampleBadRulesArray)

    tabContent.appendChild(divGd);
    tabContent.appendChild(divBd);
    tabContainer.appendChild(tabContent);

    // put tabContainer in the DOM
    // formDiv.appendChild(tabContainer);
    egRulesDiv.appendChild(tabContainer);

    btnGd.classList.add('active');
    divGd.classList.remove('hidden');
    divBd.classList.add('hidden');

    btnGd.addEventListener('click', () => {
        btnGd.classList.add('active');
        btnBd.classList.remove('active');
        divGd.classList.remove('hidden');
        divBd.classList.add('hidden');
    });

    btnBd.addEventListener('click', () => {
        btnBd.classList.add('active');
        btnGd.classList.remove('active');
        divBd.classList.remove('hidden');
        divGd.classList.add('hidden');
    });
}





// make the example rules table for tutorial (ExampleTrial2) page on left hand side
function setupExampleRulesTable(typeRules, element, array) {
    console.log('typeRules', typeRules);

    const container = element; //document.getElementById('eg-tab-content');

    if (typeRules=='good') {
        const divEgGd = document.createElement('div');
        divEgGd.classList.add("eg-good-rules");    
    } else if (typeRules=='bad') {
        const divEgBd = document.createElement('div');
        divEgBd.classList.add("eg-bad-rules");           
    }

    const table = document.createElement('table');
    table.classList.add("example-rules-table");
    const tbody = document.createElement('tbody');

    array.forEach(rowObject => {
        const row = document.createElement("tr");
        console.log('rowObject', rowObject);
        keys = Object.keys(rowObject);
        console.log('keys', keys);
        keys.forEach(key => {
            const cell = document.createElement('td');
            cell.classList.add("example-rules-td");
            cell.textContent = rowObject[key];
            console.log('cell content', rowObject[key]);
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);
}




