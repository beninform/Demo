const urlParams = new URLSearchParams(window.location.search);

let uid = urlParams.get('uid') || 'PROLIFIC_ID'; 
let tid = urlParams.get('tid') || 'ncr';
let pid = urlParams.get('pid') || 'pia';

let jsPsych = initJsPsych();

let timeline = [];

let selectedBlock = [];

if (pid === 'pia') {
    selectedBlock = [blocks[0]];        // part a (pia) uses blocks[0] (first block)
} else if (pid === 'pib') {
    selectedBlock = blocks.slice(1,3);  // part b (pib) uses blocks[1] and blocks[2] (second and third block)
} else {
    selectedBlock = blocks;             // default, if no querystring value for pid, is to run all three blocks
}

let welcomeTrial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: pid == 'pib' ? trialText.introductionTextParts23 : trialText.introductionTextPart1,
    choices: ['Continue'],
};

timeline.push(welcomeTrial);

let instructionTrial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: pid == 'pib' ? trialText.instructionTextParts23 : trialText.instructionTextPart1,
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
    data: {
        collect: true, 
        imagenr: '0001',
        blockId: 'Part 0',
    },
    sidebox: 1, 
    on_load: function() {
        setupInstructionMC();
        setupExampleTabs();
    },
    on_finish: function() {
        document.removeEventListener('keydown', window.tabToggleListener);
    }
};

timeline.push(exampleTrial);


// iterate the current array of blocks (called selectedBlock), show an intro, then get into the BPs
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


    // iterate the BPs in the current block
    for (let imgno of block.conditions[0]) {
        let imagenostr = '000'+imgno;
        let imgstr = imagenostr.slice(-4);  // trim the zero-padded string to 4 chars

        let trialPreamble = `
            <div class="trial-countdown-wrapper">
                Time remaining: <span id="trial-countdown">--:--</span>
            </div>
            <h3>BP ${imgno - 1}</h3>
            ${trialText.LabelsText}
            <img class='bp-img' src='img/p${imgstr}.png'/>
        `;

        let sideboxVal = null;
        if (tid === 'wcr') {  
            sideboxVal = imgno;   // switches candidate rules on (from querystring)
            trialPreamble += trialText.helpButtonText_wcr;  // adds help button text for w candidate rules
        } else {
            trialPreamble += trialText.helpButtonText_ncr;  // adds help button text for no candidate rules
        };

        // create the regular BP trial page using values set above
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
                setupTrialButtons();   // function defined in skip-button.js
                setupHelpButton();     // function defined in skip-button.js
            }
        }
        
        timeline.push(inputTrial);

        // let results = jsPsych.data
        //     .get()
        //     .ignore('preamble')
        //     .csv();
    }
}

let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO KEYS'],
    async: false,
    stimulus: `
        <h1>Thank you - please wait...</h1>
        <p>We are saving your answers.</p>
        <p>We are most grateful for your contribution to this study.</p>
        <p>Please don't navigate away from this page while we send results to the server.</p>
        <p>Please don't close the tab or window until saving is complete.</p>

        `,
    on_start: function() { 
        finalizeSession('NORMAL');  // function defined in skip-button.js
        }
    } 
timeline.push(resultsTrial);

let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: pid == 'pib' ? trialText.finalTextParts23 : trialText.finalTextPart1,
    choices: ['NO KEYS'],
    on_start: function() {
        // Generate a current timestamp for the log
        let timestamp = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');

    	let data = jsPsych.data
	    	.get()
	    	.filter({ collect: true}) 
	    	.ignore(['stimulus', 'trial_type', 'trial_index', 'plugin_version'])
	    	.csv();
        console.log(uid + '_' + tid + '_' + pid + '-' + timestamp);
    	console.log(data);
    }
};

timeline.push(debriefTrial);

jsPsych.run(timeline);