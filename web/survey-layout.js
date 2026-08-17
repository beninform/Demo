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


function testImgLoading() {
    console.log('test triggered');
    const container = document.getElementById('image-container');

    function triggerEvent() {  // action to take on img load
        console.log('Success: The bp image has loaded!');
        // event logic
        container.classList.add('is-loaded');
    }    

    const img = document.getElementById('bp-img');

    if (img && img.complete && img.naturalWidth !== 0) {
        // Trigger immediately if already loaded
        console.log('was already loaded');
        triggerEvent();
    } else {
        // Wait for the load event if it is still downloading
        img.addEventListener('load', triggerEvent, { once: true });
        console.log('waited for load - now loaded')

        // Error handling
        img.addEventListener('error', () => {
            console.error('Error: The image failed to load.');
        }, { once: true });
    } 
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


function setupExampleRulesDiv() {

    const egRulesDiv = document.getElementById('example-rules-div');
    egRulesDiv.setAttribute('style', 'display:none')

    const formRowElement = document.createElement('div');
    formRowElement.classList.add('form-row');
    egRulesDiv.appendChild(formRowElement);

    ['A', 'B'].forEach(qSet => {
        const surveyQuestionElement = document.createElement('div');
        surveyQuestionElement.classList.add('jspsych-survey-text-question');
        formRowElement.appendChild(surveyQuestionElement);

        const paraElement = document.createElement('p');
        paraElement.classList.add('jspsych-survey-text');
        paraElement.textContent = 'Example response for '+qSet;
        surveyQuestionElement.appendChild(paraElement);


        const textAreaElement = document.createElement('textarea');
        textAreaElement.readOnly = true;
        textAreaElement.classList.add('example-rules-area');
        textAreaElement.id = 'example-rule-'+qSet;
        textAreaElement.setAttribute('rows', "2")
        textAreaElement.setAttribute('cols', "40")
        textAreaElement.setAttribute('placeholder', qSet);
        surveyQuestionElement.appendChild(textAreaElement);
    })
    const commentPara = document.createElement('p');
    commentPara.id = 'example-rule-comment';
    commentPara.classList.add('example-rule-comment');
    commentPara.innerText = 'test comment';
    egRulesDiv.appendChild(commentPara);



}

function setupExampleCommentButtons(array) {

    const egCommentForm = document.getElementById('example-problem-guidance-button-group'); // a form element
    const egAreaA = document.getElementById('example-rule-A');
    const egAreaB = document.getElementById('example-rule-B');
    const outputP = document.getElementById('example-rule-comment');
    const noteP = document.getElementById('example-problem-guidance-note');

    // reveal motivation, buttons and notes with the 'show examples' button
    const revealDiv = document.createElement('div');
    revealDiv.id = 'reveal-div';
    revealDiv.setAttribute('style', 'display:none')

    const revealBtn = document.createElement('button');
    revealBtn.type = 'button';
    revealBtn.id = 'reveal-btn';
    revealBtn.className = 'jspsych-btn';
    revealBtn.innerText = 'Show examples';  
    revealBtn.onclick = function(){
        document.getElementById('reveal-div').style.display = "block";
        document.getElementById('example-rules-div').style.display = "block";
        document.getElementById('replaceable-text').style.display = "none";
    };  

    const revealP = document.createElement('p');  // revealed instruction
    revealP.className = 'example-instruction';
    revealP.innerText = `Explore the options here to see examples on the left, including comments below them on what makes each a good or bad rule pair.`

    // const commntP = document.createElement('p'); 
    // commntP.className = 'example-comment';
    // commntP.innerText = ` `;

    const fieldSet = document.createElement('fieldsset');
    fieldSet.classList.add('radio-fieldset');

    keys = Object.keys(array);
    keys.forEach(key => {
        // let btnNo = key.charAt(key.length - 1);
        let btnNo = key;

        const egCommentButtonLabel = document.createElement('label');
        egCommentButtonLabel.classList.add('radio-option');

        const egCommentRadioButton = document.createElement('input');
        egCommentRadioButton.setAttribute('type', 'radio');
        egCommentRadioButton.setAttribute('value', 'eg'+btnNo);
        egCommentRadioButton.setAttribute('name', 'examples');
        egCommentRadioButton.type = 'radio';
        egCommentRadioButton.id = 'r'+btnNo;
        egCommentRadioButton.className = 'radio-input';

        const radioCtrl = document.createElement('span');
        radioCtrl.classList.add('radio-control');

        const radioLabl = document.createElement('span');
        radioLabl.classList.add('radio-label-text');
        radioLabl.innerText = 'Example '+btnNo

        egCommentButtonLabel.appendChild(egCommentRadioButton);
        egCommentButtonLabel.appendChild(radioCtrl);
        egCommentButtonLabel.appendChild(radioLabl);
        fieldSet.appendChild(egCommentButtonLabel);
    })
    revealDiv.appendChild(revealP);
    revealDiv.appendChild(fieldSet);
    // revealDiv.appendChild(commntP);
    egCommentForm.appendChild(revealBtn);
    egCommentForm.appendChild(revealDiv);

    // Listen for changes inside the form
    egCommentForm.addEventListener('change', (event) => {
      if (event.target.name === 'examples') {
        // Find the visible text label of the checked item
        let labelText = event.target.closest('.radio-option').querySelector('.radio-label-text').textContent;

        let egNo = labelText.charAt(labelText.length - 1);
        let selectedKey = egNo;

        let row = array[selectedKey];
        let a_val = row['A'];
        let b_val = row['B'];
        let capt = row['capt'];
        let note = row['note'];

        egAreaA.textContent = a_val;
        egAreaB.textContent = b_val;
        outputP.textContent = note;
        // commntP.textContent = capt;
      }
    });

    document.getElementById('r1').click();
}




