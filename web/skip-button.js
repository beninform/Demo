function setupInstructionMC() {
    const btn = document.querySelector('.jspsych-btn');
    btn.classList.add('hidden');

    document.querySelectorAll('textarea').forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    });

    const form = document.querySelector('.jspsych-content');
    const htmlTemplate = trialText.exampleMC;
    
    form.insertAdjacentHTML('beforeend', htmlTemplate);

    const instructionBtn = document.querySelector('.instruction-btn');
    if (instructionBtn && btn) {
        instructionBtn.appendChild(btn);
    }

    const cb1 = document.getElementById('cb1');
    const cb2 = document.getElementById('cb2');
    const solutionText = document.getElementById('solution-text');

    function evaluateCheckboxes() {
        if (cb2.checked && !cb1.checked) {
            solutionText.classList.remove('hidden');
            btn.classList.remove('hidden');
        } else {
            solutionText.classList.add('hidden');
            btn.classList.add('hidden');
        }
    }

    cb1.addEventListener('change', evaluateCheckboxes);
    cb2.addEventListener('change', evaluateCheckboxes);

    btn.addEventListener('click', (e) => {
        const nativeForm = document.querySelector('form').requestSubmit();
    });
}

function setupTrialButton() {
    const btn = document.querySelector('.jspsych-btn');
    let buttonLockTime = 10;
    const remainingTime = 150;
    const totalTrialTime = (buttonLockTime + remainingTime) * 1000;
    const textAreas = document.querySelectorAll('textarea');
    
    let isTimeUp = false;
    btn.disabled = true;
    btn['value'] = `Continue (${buttonLockTime}s)`;

    function checkButtonState() {
        const hasEnoughText = Array.from(textAreas).every(t => t.value.trim().length > 3);
        
        if (isTimeUp || hasEnoughText) {
            btn.disabled = false;
            btn['value'] = `Continue`;
        } else {
            btn.disabled = true;
        }
    }

    const timer = setInterval(() => {
        buttonLockTime--;
        
        if (!isTimeUp) {
            btn['value'] = `Continue (${buttonLockTime}s)`;
        }

        if (buttonLockTime <= 0) {
            clearInterval(timer);
            isTimeUp = true;
            btn['value'] = "Continue";
            checkButtonState();
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

    textAreas.forEach(textarea => {
        textarea.style.overflowY = "hidden";
        textarea.style.resize = "none";
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
            checkButtonState();
        });
    });
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
        textarea0.value = ts;
    }
    if (textarea1.value.trim() === "") {
        textarea1.value = ts;
    }
};
