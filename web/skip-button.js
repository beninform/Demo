// setup for the attention check boxes
function setupInstructionMC() {
    const btn = document.querySelector('.jspsych-btn');
    const textAreas = document.querySelectorAll('textarea');
    btn.classList.add('hidden');

    document.querySelectorAll('textarea').forEach(field => {
        field.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
            checkTextRequirement();
        });
    });

    const jspsychForm = document.getElementById('jspsych-survey-text-form');
    const wrapper = document.querySelector('.preamble-form-wrapper');
    
    wrapper.insertAdjacentHTML('beforeend', trialText.exampleMC);

    const instructionBtn = document.querySelector('.instruction-btn');
    instructionBtn.appendChild(btn);

    const cb1 = document.getElementById('cb1');
    const cb2 = document.getElementById('cb2');
    const solutionText = document.getElementById('solution-text');

    solutionText.classList.add('hidden');

    function checkTextRequirement() {

        const hasEnoughText = Array.from(textAreas).every(t => t.value.trim().length >= 3);
        cb1.disabled = !hasEnoughText;
        cb2.disabled = !hasEnoughText;
        
        if (!hasEnoughText) {
            cb1.checked = false;
            cb2.checked = false;
            evaluateCheckboxes();
        }
    }

    function evaluateCheckboxes() {
        if (cb2.checked && !cb1.checked) {
            solutionText.classList.remove('hidden');
            btn.classList.remove('hidden');
        } else {
            solutionText.classList.add('hidden');
            btn.classList.add('hidden');
        }
    }

    if (cb1 && cb2) {
        cb1.addEventListener('change', evaluateCheckboxes);
        cb2.addEventListener('change', evaluateCheckboxes);
    }

    checkTextRequirement();

    btn.addEventListener('click', (e) => {
        document.querySelector('form').requestSubmit();
    });
}

// setup continue and skip buttons 
function setupTrialButtons() {
    const continueBtn = document.getElementById('jspsych-survey-text-next');
    const textAreas = document.querySelectorAll('textarea');
    const countdownDisplay = document.getElementById('trial-countdown');
    const bpImg = document.querySelector('.bp-img');

    continueBtn.innerText = 'Continue';

    const skipBtn = document.createElement('button');
    skipBtn.type = 'button';
    skipBtn.id = 'skip-btn';
    skipBtn.className = 'jspsych-btn';

    const btnContainer = document.createElement('div');
    btnContainer.className = 'trial-buttons-container';

    continueBtn.parentNode.insertBefore(btnContainer, continueBtn);
    btnContainer.appendChild(continueBtn);
    btnContainer.appendChild(skipBtn);

    let skipLockTime = 10;
    let totalTrialTime = 150;

    const startSkipLock = skipLockTime;
    const startTotalTime = totalTrialTime;
    
    continueBtn.disabled = true;
    skipBtn.disabled = true;
    skipBtn.innerText = `Skip (${skipLockTime}s)`;

    function updateCountdownDisplay() {
        const mins = String(Math.floor(totalTrialTime / 60)).padStart(2, '0');
        const secs = String(totalTrialTime % 60).padStart(2, '0');
        countdownDisplay.innerText = `${mins}:${secs}`;
    }

    function checkTextRequirement() {
        const hasEnoughText = Array.from(textAreas).every(t => t.value.trim().length >= 3);
        continueBtn.disabled = !hasEnoughText;
    }

    document.querySelectorAll('textarea').forEach(field => {
        field.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
            checkTextRequirement();
        });
    });

    updateCountdownDisplay();
    checkTextRequirement();

    let timer = null;

    function startTimer() {
        const startTime = Date.now();

        timer = setInterval(() => {
            const secondsElapsed = Math.floor((Date.now() - startTime) / 1000);

            skipLockTime = Math.max(0, startSkipLock - secondsElapsed);
            totalTrialTime = Math.max(0, startTotalTime - secondsElapsed);

            if (skipLockTime > 0) {
                skipBtn.innerText = `Skip (${skipLockTime}s)`;
            } else {
                skipBtn.disabled = false;
                skipBtn.innerText = 'Skip';
            }

            updateCountdownDisplay();
            
            if (totalTrialTime <= 0) {
                clearInterval(timer);
                handleTimeout();
            }
        }, 1000);
    }

    function handleTimeout() {
        window.numTimeouts = (window.numTimeouts || 0) + 1;

        const popupHTML = trialText.timeoutPopup;
        document.body.insertAdjacentHTML('beforeend', popupHTML);

        textAreas.forEach(field => { field.disabled = true; });

        setTimeout(() => {
            const popup = document.querySelector('.timeout-popup-overlay');
            if (popup) popup.remove();

            if (window.numTimeouts > 3) {
                finalizeSession('ABORT_TIMEOUT');
                return;
            }

            textAreas.forEach(field => field.required = false); 
            continueBtn.disabled = false; 
            continueBtn.click();
        }, 2000);
    }
    
    if (bpImg.complete) {
        startTimer();
    } else {
        bpImg.addEventListener('load', startTimer);
    }

    continueBtn.addEventListener('click', () => {
        clearInterval(timer);
    });

    skipBtn.addEventListener('click', () => {
        const numSkips = (window.skipCount || 0) + 1;

        let popupText = "";
        let confirmBtnLabel = "Skip";

        if (numSkips === 1) {
            popupText = "You are about to skip a problem. You are allowed a maximum of three skips.";
        } else if (numSkips === 2) {
            popupText = "You are about to skip a second problem. You are allowed a maximum of three skips.";
        } else if (numSkips === 3) {
            popupText = "You are about to skip a third problem. You are allowed a maximum of three skips.";
        } else if (numSkips === 4) {
            popupText = "You are about to skip a fourth problem. Your session will end with this action.";
            confirmBtnLabel = "End";
        }

        let skipPopupHTML = trialText.skipPopup;

        skipPopupHTML = skipPopupHTML.replace('%%POPUP_TEXT%%', popupText);
        skipPopupHTML = skipPopupHTML.replace('%%BTN_LABEL%%', confirmBtnLabel);

        document.body.insertAdjacentHTML('beforeend', skipPopupHTML);

        const cancelBtn = document.getElementById('skip-popup-cancel');
        const confirmBtn = document.getElementById('skip-popup-confirm');
        const popupOverlay = document.getElementById('skip-confirm-popup');

        cancelBtn.addEventListener('click', () => {
            if (popupOverlay) popupOverlay.remove();
        });

        confirmBtn.addEventListener('click', () => {
            if (popupOverlay) popupOverlay.remove();

            clearInterval(timer);
            
            window.skipCount = numSkips;
            jsPsych.data.addProperties({ total_skips: window.skipCount });

            if (numSkips > 3) {
                finalizeSession('ABORT_SKIP');
                return;
            }

            textAreas.forEach(field => field.required = false); 
            continueBtn.disabled = false; 
            continueBtn.click(); 
        });
    });
}

// setup the help button and popup
function setupHelpButton() {
    const helpBtn = document.getElementById('help-toggle-btn');
    const helpPopup = document.getElementById('help-popup-box');

    helpBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        helpPopup.classList.toggle('hidden');
    });

    helpPopup.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.addEventListener('click', () => {
        helpPopup.classList.add('hidden');
    });
}

function finalizeSession(status = 'NORMAL') {
    let prefix = uid + '_' + tid + '_' + pid;
    let dataPipeExperimentId = 'FP1EmrkIikGE';
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

// Function to show the skip button after 1 minute (60,000 ms)
function showSkipButton() {
	const skipBtn = document.getElementById('skipBtn');
	if (skipBtn) {
		skipBtn.style.display = 'inline-block';
	}
}

// Action when skip button is clicked
function skipAction() {
	console.log("You skipped!");
    insertTimeInBlanks();
	// Perform another action here
}


/**
 * Creates a resettable timer.
 * @param {Function} callback - Function to execute after the delay.
 * @param {number} delay - Delay in milliseconds.
 * @returns {Object} - An object with reset() and clear() methods.
 */
function createResettableTimer(callback, delay) {
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
    if (typeof delay !== 'number' || delay < 0) {
        throw new RangeError('Delay must be a non-negative number');
    }

    let timerId = null;

    // Internal function to start the timer
    function start() {
        timerId = setTimeout(callback, delay);
    }

    // Start immediately when created
    start();

    return {
        reset: function () {
            if (timerId !== null) {
                clearTimeout(timerId);
            }
            start();
        },
        clear: function () {
            if (timerId !== null) {
                clearTimeout(timerId);
                timerId = null;
            }
        }
    };
}


// insert formatted timestamp in any empty text area
function getFormattedTimestamp() {
    const now = new Date();
    // Format: YYYY-MM-DD HH:MM:SS
    return now.getFullYear() + "-" +
           String(now.getMonth() + 1).padStart(2, '0') + "-" +
           String(now.getDate()).padStart(2, '0') + " " +
           String(now.getHours()).padStart(2, '0') + ":" +
           String(now.getMinutes()).padStart(2, '0') + ":" +
           String(now.getSeconds()).padStart(2, '0');
       };

function insertTimeInBlanks() {
    const textarea0 = document.getElementById('input-0');
    const textarea1 = document.getElementById('input-1');

    let ts = getFormattedTimestamp();
    console.log('ts', ts);

    // Check if textarea is empty or only whitespace
    if (textarea0.value.trim() === "") {
        textarea0.value = 'skipped ' + ts;
    } else {
        textarea0.value += ' skipped ' + ts;
    }
    if (textarea1.value.trim() === "") {
        textarea1.value = 'skipped ' + ts;
    } else {
        textarea1.value += ' skipped ' + ts;
    };
};