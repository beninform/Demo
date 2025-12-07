let jsPsych = initJsPsych();

let timeline = [];

let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse, 
    stimulus: `
    <h1>Welcome to the first D432 Demo</h1> 
    <p>In this experiment, you will be shown a set of figures in two groups
     and asked to tell us the rule that distinctly describes the first group.</p>
     <p>You will also be asked to tell us the rule that distinctly describes the
     second group.</p>
    <p>There are three parts to this experiment.</p>
    <p>Press SPACE to proceed to the first part.</p>
    `,
    choices: [' '], 
};
timeline.push(welcomeTrial);

for (let block of blocks) {
    let blockIntroTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        	<h1>${block.title}</h1>
        	<p>You are about to see a series of pages.</p>
            <p>Each page has a group of six figures on the left (set A), 
            separated from six figures on the right (set B).
            <p>What is the rule that describes set A?</p>
            <p>What is the rule that describes set B?</p>
    		<p>Press SPACE to see the first problem.</p>
        	`,
        choices: [' '],
    };
    timeline.push(blockIntroTrial);

    let tempLabelsText = `
            <p>Set A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Set B</p>`
    let preambleText = '';
    //TODO give feedback on example page response
    for (let imgno of block.conditions[0]) {
        let imagenostr = '000'+imgno;
        let imgstr = imagenostr.slice(-4);
        let inputTrial = {
            type: jsPsychSurveyText,
            preamble: `
                <h3>BP ${imgno}</h3>
                ${tempLabelsText}
                <img class='bp-img' src='img/p${imgstr}.png'/>
                `,
            questions: [
                {prompt: 'Your rule for set A', required: true},
                {prompt: 'Your rule for set B', required: true}
            ],

            data: {

                collect: true, // flag whether we want to collect to csv
                imagenr: imgstr,
                blockId: block.title,
            },
            // on_finish: function (data) {
            //     // do something
            // }

        }
	    timeline.push(inputTrial);
        
        let results = jsPsych.data
            .get()
            .ignore('preamble')
            .csv();
        console.log('£', results);
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