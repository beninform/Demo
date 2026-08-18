
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

let userResponseA = '';  // global variable for last A response
let userResponseB = '';  // global variable for last B response

let welcomeTrial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: pid == 'pib' ? trialText.introductionTextParts23 : trialText.introductionTextPart1,
    choices: ['Continue'],
    on_load: function() {
        insertParaTextTid(tid, pid, "para-condition-welcome", bsz);
        insertParaTextPid(pid, "para-intro-bottom", bsz);
        setFavicon();
    },
};

timeline.push(welcomeTrial);

let instructionTrial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: pid == 'pib' ? trialText.instructionTextParts23 : trialText.instructionTextPart1,
    choices: ['Continue'],
    on_load: function() {
        insertParaTextTim(pid, "para-instr-timing", bsz);
    }
};
timeline.push(instructionTrial);

let exampleTrial = {
    type: jsPsychSurveyText,
    preamble: trialText.exampleProblem,
    questions: [
        {prompt: 'Your rule for set A', required: true, name: 'a_rule', rows: 2},
        {prompt: 'Your rule for set B', required: true, name: 'b_rule', rows: 2}
    ],
    data: {
        collect: true, 
        imagenr: '0001',
        blockId: 'Part 0',
    },
    sidebox: 1, 
    on_load: function() {
        setupSurveyLayout();
        setupRightHandDiv(isExample=true, tid, 1);
        setupInstructionMC();
        setupExampleTabs(true);
        // testImgLoading('example img');

    },
    on_finish: function() {
        let responseObj = jsPsych.data.get().last(1).trials[0].response;
        userResponseA = responseObj.a_rule;
        userResponseB = responseObj.b_rule;
        document.removeEventListener('keydown', window.tabToggleListener);
    }
};
timeline.push(exampleTrial);

let exampleTrial2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: pid == 'pib' ? trialText.exampleExplanationPIA : trialText.exampleExplanationPIA,
    choices: ['Continue'],
    on_load: function() {
        // Examples and Explanation stuff
        setupExampleRulesDiv();
        moveContinueButton();  // bc layout was designed for survey text, not button response trial
        insertPrevResponses(userResponseA, userResponseB);
        insertParaTextExplain(pid, "example-problem-guidance-title", trialText.exampleProblemGuidanceTitle);
        insertParaTextExplain(pid, "example-problem-guidance-1", trialText.exampleProblemGuidance1);
        insertParaTextExplain(pid, "example-problem-guidance-2", trialText.exampleProblemGuidance2);
        setupExampleCommentButtons(trialText.exampleRulesArray);
        // insertParaTextExplain(pid, "example-problem-guidance-3", trialText.exampleProblemGuidance3);
        insertParaTextExplain(pid, "example-problem-guidance-4", trialText.exampleProblemGuidance4);
        insertParaTextExplain(pid, "example-problem-guidance-5", trialText.exampleProblemGuidance5);
        if (tid == 'wcr') {
            insertParaTextExplain(pid, "example-problem-guidance-6", trialText.exampleProblemGuidanceWcr);
        } 
        // Candidate rules stuff
        generateTable(1);  // candidate rules table
        setupExampleTabs(true);  // candidate rules tabs
        // testImgLoading('example 2 img');
    }
};
timeline.push(exampleTrial2);


// iterate the current array of blocks (called selectedBlock), show an intro, then get into the BPs
for (let block of selectedBlock) {
    if (block === blocks[2] && pid === 'pib') {
        let breakTrial = {
            type: jsPsychHtmlButtonResponse,
            stimulus: `
                <div class="intro-text-container">
                <h1>${block.title}</h1>
                <p>You have completed the first part of this session. Thank you.</p> 
                <p>You could now take a short break. But don‘t leave the page.</p> 
                <p>There are ${block.conditions[0].length} problems in this part.</p>
                <p class="button-below-para-break">Click the button below when you are ready for the final part.</p>
                </div>
                `,
            choices: ['Continue']
        };
        timeline.push(breakTrial);
    }
    else {
        let blockIntroTrial = {
            type: jsPsychHtmlButtonResponse,
            stimulus: `
                <div class="intro-text-container">
                <h1>${block.title}</h1>
                <p>There are ${block.conditions[0].length} problems in this part.</p>
                <p class="button-below-para-start">Click the button below to begin.</p>
                </div>
                `,
            choices: ['Continue']
        };
        timeline.push(blockIntroTrial);
    }   

    // iterate the BPs in the current block
    for (let imgno of block.conditions[0]) {
        let imagenostr = '000'+imgno;
        let imgstr = imagenostr.slice(-4);  // trim the zero-padded string to 4 chars
        let task_no = imgno-1;

        let trialPreamble = `
            <div class="trial-countdown-wrapper">
                Time remaining: <span id="trial-countdown">--:--</span>
            </div>
            <h3>Task ${task_no}</h3>
            ${trialText.LabelsText}
            <div id="image-container" class="image-container">
                <div id="pls-wait" class="pls-wait">Image loading...</div>
                <img id='bp-img' class="bp-img" src="img/p${imgstr}.png" alt="a visual logic problem" style="max-height: 350px; width: auto;"/>
            </div>        
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
                {prompt: 'Your rule for set A', required: true, name: 'a_rule', rows:2, columns: 20},
                {prompt: 'Your rule for set B', required: true, name: 'b_rule', rows:2, columns: 20}
            ],
            data: {
                collect: true, // flag whether we want to collect to csv
                imagenr: imgstr,
                blockId: block.title,
            },
            sidebox: sideboxVal, 
            on_start: function() {
                console.log(block.title);
            },
            on_load: function() {
                setupSurveyLayout();
                setupRightHandDiv(isExample=false, tid, imgno);
                setupExampleTabs(false);  // is not example page
                setupTrialButtons();   // function defined in skip-button.js
                setupHelpButton();     // function defined in skip-button.js
                setupFooter(trialText.contactEmailValue);
                testImgLoading(task_no);

            },
            on_finish: handleTrialFinish
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
        finalizeSession('NORMAL');  // function defined in data-save.js
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
    },
    on_load: function() {
        setContactEmail(trialText.contactEmailValue);
    }
};

timeline.push(debriefTrial);

jsPsych.run(timeline);

