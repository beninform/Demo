const urlParams = new URLSearchParams(window.location.search);

let uid = urlParams.get('uid') || 'PROLIFIC_ID'; 
let tid = urlParams.get('tid') || 'ncr';
let pid = urlParams.get('pid') || 'pia';

// get the user id from the querystring

// function getQueryVariable(variable) {
//     var query = window.location.search.substring(1);
//     var vars = query.split('&');
//     for (var i = 0; i < vars.length; i++) {
//         var pair = vars[i].split('=');
//         if (decodeURIComponent(pair[0]) == variable) {
//             return decodeURIComponent(pair[1]);
//         }
//     }
// }
// let id = getQueryVariable('id');

let jsPsych = initJsPsych();

let timeline = [];

let selectedBlock = [];

if (pid === 'pia') {
    selectedBlock = [blocks[0]]; 
} else if (pid === 'pib') {
    selectedBlock = [blocks[1]]; 
} else if (pid === 'pic') {
    selectedBlock = [blocks[2]]; 
} else {
    selectedBlock = blocks;
}

let welcomeTrial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: trialText.introductionText,
    choices: ['Continue'],
    // prompt: ""
};

timeline.push(welcomeTrial);

// TODO add radio button for 'I know the answer' prior to input text
// TODO add institutional logo
// TODO add option to resume later - with save form
// TODO capture user code in instruction trial (or provide it in querystring)

let instructionTrial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: trialText.instructionText,
    // questions: [
    //     {prompt: 'Your code', required: true, name: 'usrcode'}
    // ],
    // data: {
    //     collect: true
    // }
    choices: ['Continue'],

};
timeline.push(instructionTrial);

let exampleTrial = {
    type: jsPsychSurveyText,
    preamble: trialText.exampleProblem,
    questions: [
        {prompt: 'Your rule for set A', required: true, name: 'A-rule', rows: 2},
        {prompt: 'Your rule for set B', required: true, name: 'B-rule', rows: 2}
    ],
    sidebox: 1, 
    on_load: setupInstructionMC
};

timeline.push(exampleTrial);


for (let block of selectedBlock) {
    let blockIntroTrial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: `
        	<h1>${block.title}</h1>
            <p>There are ${block.conditions[0].length} problems in this part.</p>
            <p>Press the button below to begin.</p>
        	`,
        choices: ['Continue']
    };
    timeline.push(blockIntroTrial);


    //TODO give feedback on example page response
    for (let imgno of block.conditions[0]) {
        let imagenostr = '000'+imgno;
        let imgstr = imagenostr.slice(-4);

        let trialPreamble = `
            <div class="trial-countdown-wrapper">
                Time remaining: <span id="trial-countdown">--:--</span>
            </div>
            <h3>BP ${imgno}</h3>
            ${trialText.tempLabelsText}
            <img class='bp-img' src='img/p${imgstr}.png'/>
        `;

        let sideboxVal = null;
        if (tid === 'wcr') {  // switches candidate rules on (from querystring)
            sideboxVal = imgno;
            trialPreamble += `
                <button type="button" class="help-btn" id="help-toggle-btn">?</button>
                <div class="help-popup hidden" id="help-popup-box">
                        Type each of your rules into the appropriate answer box. You cannot drag and drop any text from the candidate rules list.
                </div>
            `;
        } else {
            trialPreamble += `
                <button type="button" class="help-btn" id="help-toggle-btn">?</button>
                <div class="help-popup hidden" id="help-popup-box">
                        Type each of your rules into the appropriate answer box. The page shows a ‘time remaining’ countdown timer. 
                        This allows you two and a half minutes for each problem. 
                        After the time has elapsed, you will be automatically moved on to the next problem. 
                        You can only use the ‘continue’ button once you have entered text into each of the answer boxes.
                        The skip button will only be available after the first ten seconds. 
                        You are encouraged not to skip problems. 
                        In any event, you will not be able to skip more than four problems.
                </div>
            `;
        };

        let inputTrial = {
            type: jsPsychSurveyText,
            preamble: trialPreamble,
            questions: [
                {prompt: 'Your rule for set A', required: true, name: 'A-rule', rows:2, columns: 20},
                {prompt: 'Your rule for set B', required: true, name: 'B-rule', rows:2, columns: 20}
            ],
            data: {
                collect: true, // flag whether we want to collect to csv
                imagenr: imgstr,
                blockId: block.title,
            },
            sidebox: sideboxVal, 
            on_load: function() {
                setupTrialButtons();
                setupHelpButton();
            }
        }
        
        timeline.push(inputTrial);

        let results = jsPsych.data
            .get()
            .ignore('preamble')
            .csv();
    }
}

let finalTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: trialText.finalText, 
    choices: "NO_KEYS",
    on_finish: function() {
        jsPsych.data.get().localSave('csv', 'experiment_results.csv');
    }
};

timeline.push(finalTrial);


let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO KEYS'],
    async: false,
    stimulus: `
        <h1>Please wait...</h1>
        <p>We are saving your answers.</p>
        `,
    on_start: function () {
        let prefix = 'bpd_0';
        let dataPipeExperimentId = 'FP1EmrkIikGE';
        let forceOSFSave = false;

        // Filter and retrieve results as CSV data
        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
            .csv();

        // Generate a participant ID based on the current timestamp
        let participantId = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');

        // Dynamically determine if the experiment is currently running locally or on production
        let isLocalHost = window.location.href.includes('localhost');

        let destination = '/save';
        if (!isLocalHost || forceOSFSave) {
            destination = 'https://pipe.jspsych.org/api/data/';
        }

        // Send the results to our saving end point
        fetch(destination, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                experimentID: dataPipeExperimentId,
                filename: prefix + '-' + participantId + '.csv',
                data: results,
            }),
        }).then(data => {
            console.log(data);
            jsPsych.finishTrial();
        })
    }
}
timeline.push(resultsTrial);

let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you for participating!</h1> 
    <p>You can close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function() {
    	let data = jsPsych.data
	    	.get()
	    	.filter({ collect: true}) 
	    	.ignore(['stimulus', 'trial_type', 'trial_index', 'plugin_version'])
	    	.csv();
    	console.log(data);
    }
};

timeline.push(debriefTrial);

jsPsych.run(timeline);