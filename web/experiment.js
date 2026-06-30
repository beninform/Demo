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
    selectedBlock = blocks.slice(1,3); 
// } else if (pid === 'pic') {
//     selectedBlock = [blocks[2]]; 
} else {
    selectedBlock = blocks;
}

let welcomeTrial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: pid == 'pib' ? trialText.introductionTextParts23 : trialText.introductionTextPart1,
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
    stimulus: pid == 'pib' ? trialText.instructionTextParts23 : trialText.instructionTextPart1,
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
    preamble: trialText.ncrExampleProblem,
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


    //
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
            trialPreamble += trialText.helpButtonText_wcr; 
        } else {
            trialPreamble += trialText.helpButtonText_ncr;
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

let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO KEYS'],
    async: false,
    stimulus: `
        <h1>Please wait...</h1>
        <p>We are saving your answers.</p>
        `,
    on_start: function () {
        let prefix = uid + '_' + tid + '_' + pid;
        let dataPipeExperimentId = 'FP1EmrkIikGE';
        let forceOSFSave = false;

        // Filter and retrieve results as CSV data
        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
            .csv();

        // Generate a participant ID based on the current timestamp
        let timestamp = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');

        // Dynamically determine if the experiment is currently running locally or on production
        let isLocalHost = window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1');

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
                filename: prefix + '-' + timestamp + '.csv',
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
    stimulus: pid == 'pib' ? trialText.finalTextParts23 : trialText.finalTextPart1,
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