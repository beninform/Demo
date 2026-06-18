// setup for the attention check boxes
function setupInstructionMC() {
    const btn = document.querySelector('.jspsych-btn');
    btn.classList.add('hidden');

    document.querySelectorAll('textarea').forEach(field => {
        field.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
            checkTextRequirement();
        });
    });

    const jspsychForm = document.getElementById('jspsych-survey-text-form');
    const mcContainer = document.querySelector('.left-panel .mc-container');
    
    mcContainer.parentNode.insertBefore(jspsychForm, mcContainer);
    mcContainer.insertAdjacentHTML('beforebegin', trialText.exampleMC);

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
        if (cb1 && cb2 && solutionText) {
            if (cb2.checked && !cb1.checked) {
                solutionText.classList.remove('hidden');
                btn.classList.remove('hidden');
            } else {
                solutionText.classList.add('hidden');
                btn.classList.add('hidden');
            }
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

    if (!continueBtn) return; 

    continueBtn.innerText = 'Continue';

    const skipBtn = document.createElement('button');
    skipBtn.type = 'button';
    skipBtn.id = 'skip-btn';
    skipBtn.className = 'jspsych-btn';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'trial-buttons-container';

    continueBtn.parentNode.insertBefore(buttonContainer, continueBtn);
    buttonContainer.appendChild(continueBtn);
    buttonContainer.appendChild(skipBtn);

    let skipLockTime = 10;
    let totalTrialTime = 150;
    
    continueBtn.disabled = true;
    skipBtn.disabled = true;
    skipBtn.innerText = `Skip (${skipLockTime}s)`;

    function updateCountdownDisplay() {
        if (countdownDisplay) {
            const mins = String(Math.floor(totalTrialTime / 60)).padStart(2, '0');
            const secs = String(totalTrialTime % 60).padStart(2, '0');
            countdownDisplay.innerText = `${mins}:${secs}`;
        }
    }

    function checkTextRequirement() {
        const hasEnoughText = Array.from(textAreas).every(t => t.value.trim().length >= 3);
        continueBtn.disabled = !hasEnoughText;
    }

    updateCountdownDisplay();
    checkTextRequirement();

    const timer = setInterval(() => {
        if (skipLockTime > 0) {
            skipLockTime--;
            skipBtn.innerText = `Skip (${skipLockTime}s)`;
            if (skipLockTime === 0) {
                skipBtn.disabled = false;
                skipBtn.innerText = 'Skip';
            }
        }

        totalTrialTime--;
        updateCountdownDisplay();
        
        if (totalTrialTime <= 0) {
            clearInterval(timer);
            
            const popupHTML = `
                <div class="timeout-popup-overlay">
                    <div class="timeout-popup-content">
                        <h3>Time for trial has run out!</h3>
                        <p>You will be sent to the next trial.</p>
                        <div class="spinner"></div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', popupHTML);

            textAreas.forEach(field => {
                field.disabled = true;
            });

            setTimeout(() => {
                const popup = document.querySelector('.timeout-popup-overlay');
                if (popup) popup.remove();

                textAreas.forEach(field => field.required = false); 
                continueBtn.disabled = false; 
                continueBtn.click();
            }, 2000);
        }
    }, 1000);

    continueBtn.addEventListener('click', () => {
        clearInterval(timer);
    });

    skipBtn.addEventListener('click', () => {
        clearInterval(timer);
        
        textAreas.forEach(field => field.required = false); 
        
        continueBtn.disabled = false; 
        continueBtn.click(); 
    });

    textAreas.forEach(field => {
        field.style.overflowY = "hidden";
        field.style.resize = "none";
        field.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
            checkTextRequirement();
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
