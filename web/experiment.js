// get the user id from the querystring

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}
let id = getQueryVariable('id');
console.log('id', id);



let jsPsych = initJsPsych();

let timeline = [];

let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: trialText.introductionText,
};
timeline.push(welcomeTrial);

// TODO add radio button for 'I know the answer' prior to input text
// TODO add institutional logo
// TODO add option to resume later - with save form

let instructionTrial = {
    type: jsPsychSurveyText,
    preamble: trialText.instructionText,
    questions: [
        {prompt: 'Your code', required: true, name: 'usrcode'}
    ],
    data: {
        collect: true
    }
};
timeline.push(instructionTrial);

let exampleTrial = {
    type: jsPsychSurveyText,
    preamble: `
        ${trialText.exampleText}
        <h3>BP 1</h3>
        ${trialText.tempLabelsText}
        <img class='bp-img' src='img/p0001.png'/>
        <p>We will make it possible to skip forward later, if you cannot solve a problem.</p>
        `,
    questions: [
        {prompt: 'Your rule for set A', required: true, name: 'Arule', rows:3},
        {prompt: 'Your rule for set B', required: true, name: 'Brule', rows:3}
    ],
    data: {
        collect: true
    },
}
timeline.push(exampleTrial);

for (let block of blocks) {
    let blockIntroTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        	<h1>${block.title}</h1>
            <p>There are ${block.conditions[0].length} problems in this part.<br />
            You can save your progress at any time.</p>
            <p>Press any key to begin.</p>
        	`
    };
    timeline.push(blockIntroTrial);


    //TODO give feedback on example page response
    for (let imgno of block.conditions[0]) {
        let imagenostr = '000'+imgno;
        let imgstr = imagenostr.slice(-4);

        let sideboxVal = null;
        if (id=='H2SO4') {  // switches candidate rules on (from querystring)
            sideboxVal = imgno
        };



        let inputTrial = {
            type: jsPsychSurveyText,
            preamble: `
                <h3>BP ${imgno}</h3>
                ${trialText.tempLabelsText}
                <img class='bp-img' src='img/p${imgstr}.png'/>
                `,
            questions: [
                {prompt: 'Your rule for set A', required: true, name: 'A-rule', rows:2},
                {prompt: 'Your rule for set B', required: true, name: 'B-rule', rows:2}
            ],
            data: {
                collect: true, // flag whether we want to collect to csv
                imagenr: imgstr,
                blockId: block.title,
            },
            sidebox: sideboxVal

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