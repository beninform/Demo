let jsPsych = initJsPsych();

let timeline = [];

let block = blocks[0]

for (let block of blocks) {

    let blockIntroTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
            <h1>${block.title}</h1>
            <p>There are ${block.conditions[0].length} problems in this part.<br />
            You can save your progress at any time.</p>
            <p>Press any key to begin.</p>
            `,
        // choices: [' '],
    };
    timeline.push(blockIntroTrial);


    for (let imgno of block.conditions[0]) {
        let imagenostr = '000'+imgno;
        let imgstr = imagenostr.slice(-4);


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
            sidebox: imgno,

        }
        timeline.push(inputTrial);

        let results = jsPsych.data
            .get()
            .ignore('preamble')
            .csv();
    }
}
    



jsPsych.run(timeline);