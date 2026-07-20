function finalizeSession(status = 'NORMAL') {
    let prefix = uid + '_' + tid + '_' + pid;
    let dataPipeExperimentId = 'ZIT1uRogs750';
    let forceOSFSave = false;

    // Filter and retrieve results as CSV data
    let results = jsPsych.data
        .get()
        .filter({ collect: true })
        .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
        .csv();

    // Generate a current timestamp for the filename
    let timestamp = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');

    // Dynamically determine if the experiment is currently running locally or on production
    let isLocalHost = window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1');

    let destination = '/save';
    if (!isLocalHost || forceOSFSave) {
        destination = 'https://pipe.jspsych.org/api/data/';
    };

    // Send the results to our saving end point
    fetch(destination, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: dataPipeExperimentId,
            filename: prefix + '_' + status + '-' + timestamp + '.csv',
            data: results,
        }),
    }).then(data => {
        if (status === 'NORMAL') {
            jsPsych.finishTrial();
        }
    })

    if (status === 'ABORT_TIMEOUT') {
        jsPsych.abortExperiment(trialText.abortTimeoutText);
    } else if (status === 'ABORT_SKIP') {
        jsPsych.abortExperiment(trialText.abortSkipText);
    }
}
