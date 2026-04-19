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



let jsPsych = initJsPsych();

let timeline = [];


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
    preamble: `
        ${trialText.exampleText}
        <h3>BP 1</h3>
        ${trialText.tempLabelsText}
        <img class='bp-img' src='img/p0001.png'/>
        `,
    questions: [
        {prompt: 'Your rule for set A', required: true, name: 'Arule', rows:2, columns: 19},
        {prompt: 'Your rule for set B', required: true, name: 'Brule', rows:2, columns: 19}
    ],
    data: {
        collect: true
    },
}
timeline.push(exampleTrial);

for (let block of blocks) {
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

        let sideboxVal = null;
        if (id=='H2SO4') {  // switches candidate rules on (from querystring)
            // console.log('H2SO4 detected in url');
            sideboxVal = imgno
            // console.log('imgno', imgno);
        // } else {
        //     console.log('wrong or no id in url');
        };


        let inputTrial = {
            type: jsPsychSurveyText,
            preamble: `
                <h3>BP ${imgno}</h3>
                ${trialText.tempLabelsText}
                <img class='bp-img' src='img/p${imgstr}.png'/>
                `,
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
            button_label: 'Continue', 
            on_load: function() {
                const btn = document.querySelector('.jspsych-btn');
                let buttonLockTime = 30; // time in seconds that the continue button is locked
                const remainingTime = 150; // time in seconds after which the trial will auto-submit if the participant hasn't clicked continue
                const totalTrialTime = (buttonLockTime + remainingTime) * 1000;
                
                btn.disabled = true;
                btn['value'] = `Continue (${buttonLockTime}s)`;

                const timer = setInterval(() => {
                    buttonLockTime--;
                    btn['value'] = `Continue (${buttonLockTime}s)`;

                    if (buttonLockTime <= 0) {
                        clearInterval(timer);
                        btn.disabled = false;
                        btn['value'] = "Continue";
                    }
                }, 1000);

                const autoSubmitTimer = setTimeout(() => {
                    const textFields = document.querySelectorAll('textarea, input[type="text"]');
                    textFields.forEach(field => {
                        field.required = false;
                    });
                    btn.disabled = false;
                    btn.click(); 
                }, totalTrialTime);

                btn.addEventListener('click', () => {
                    clearTimeout(autoSubmitTimer);
                });

                // dynamically resize textareas
                const textAreas = document.querySelectorAll('textarea');
                textAreas.forEach(textarea => {
                    textarea.style.overflowY = "hidden";
                    textarea.style.resize = "none";
                    textarea.addEventListener('input', function() {
                        this.style.height = 'auto';
                        this.style.height = this.scrollHeight + 'px';
                    });
                });
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