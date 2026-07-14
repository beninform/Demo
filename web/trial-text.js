let trialText = {
	introductionTextPart1: `
		<div class="intro-container">
			<div class="logo-container">
				<div class="logo-left">
					<img src="logos/tuda_logo.png" alt="Institution Logo 1" style="max-height: 80px; width: auto;">
				</div>
				<div class="logo-center">
					<img src="logos/swansea_logo.png" alt="Institution Logo 2" style="max-height: 80px; width: auto;">
				</div>
				<div class="logo-right">
					<img src="logos/tango_logo.png" alt="Institution Logo 3" style="max-height: 80px; width: auto;">
				</div>
			</div>

			<div class="intro-top">
				<h1>Bongard Problems</h1>
				<h2>Welcome to the Access Demonstrator</h2>
				<p>In this demonstrator, you will be shown a set of figures in two groups.</p>
			</div>

			<div class="intro-middle-container">
				<div class="intro-middle-left">You will be asked to tell us the rule that distinctly describes the first group.</div>
				<div class="intro-middle-right">You will also be asked to tell us the rule that distinctly describes the second group.</div>
			</div>

			<div class="intro-bottom">
				<p>There are three parts to the experience.</p>
				<p>Access to parts two and three depend on your success in part one.</p>
				<p>Press the button below to proceed.</p>
			</div>
		</div>
	`,
	instructionTextPart1: `
		<div class="instructions-container">
			<h1>Instructions</h1>
			<p>In each part of the experiment, you will be asked to solve a set of problems.
			There will be one problem on each screen.</p>
			<p>Each of the three parts will take approximately 35 minutes to complete. Your access to part two is dependent on your progress in part one.</p>
			<p>Before we start part one, we will show you a single example problem.</p>
			<p>As with all the problems, you must enter an answer in each box to be able to continue.</p>
			<p>For efficient progress, if you wish, you can use the <code style="color:#8B0000;">Tab</code> button 
			to move between the answer boxes - and to move on to the <code style="color:#8B0000;">Continue</code> button.
			This means you can complete each screen using the keyboard alone.
			But you may also just click on the <code style="color:#8B0000;">Continue</code> button with the mouse.</p>
		</div>
	`,
	introductionTextParts23: `
		<div class="intro-container">
			<div class="logo-container">
				<div class="logo-left">
					<img src="logos/tuda_logo.png" alt="Institution Logo 1" style="max-height: 80px; width: auto;">
				</div>
				<div class="logo-center">
					<img src="logos/swansea_logo.png" alt="Institution Logo 2" style="max-height: 80px; width: auto;">
				</div>
				<div class="logo-right">
					<img src="logos/tango_logo.png" alt="Institution Logo 3" style="max-height: 80px; width: auto;">
				</div>
			</div>
			<div class="intro-top">
				<h1>Bongard Problems</h1>
				<h2>Welcome back to the Access Demonstrator</h2>
				<p>As before, in this session, you will be shown a set of figures in two groups.</p>
			</div>

			<div class="intro-middle-container">
				<div class="intro-middle-left">You will be asked to tell us the rule that distinctly describes the first group.</div>
				<div class="intro-middle-right">You will also be asked to tell us the rule that distinctly describes the second group.</div>
			</div>

			<div class="intro-bottom">
				<p>There are two parts to this session. You have been asked to complete parts two and three because of your success in part one.</p>
				<p>Press the button below to proceed.</p>
			</div>
		</div>
	`,
	instructionTextParts23: `
		<div class="instructions-container">
			<h1>Instructions</h1>
			<p>In each of the two parts of this session, you will be asked to solve a set of problems.
			As before, there will be one problem on each screen.</p>
			<p>Each of the two parts will take approximately 35 minutes to complete.</p>
			<p>Before we start, we will show you the example problem again, as a reminder of what to expect.</p>
			<p>As with all the problems, you must enter an answer in each box to be able to continue.</p>
			<p>For efficient progress, if you wish, you can use the <code style="color:#8B0000;">Tab</code> button 
			to move between the answer boxes - and to move on to the <code style="color:#8B0000;">Continue</code> button.
			This means you can complete each screen using the keyboard alone.
			But you may also just click on the <code style="color:#8B0000;">Continue</code> button with the mouse.</p>
		</div>
	`,
	 LabelsText: `
		<div class='set-a-b-label-container'>
			<div id='set-a-label'>
				<p>Set A</p>
			</div>
			<div id='set-b-label'>
				<p>Set B</p>
			</div>
		</div>
    `,
	exampleProblem: `
		<h1>Example Problem</h1>
		<div class='set-a-b-label-container'>
			<div id='set-a-label'><p>Set A</p></div>
			<div id='set-b-label'><p>Set B</p></div>
		</div>
		<img class='bp-img' src='img/p0001.png' alt="Bongard Problem"/>
		<p class="example-instruction-text">Write your answers in the boxes.</p>
    `,
	ncrExampleProblemInstructions: `
		<div class="instruction-box">
			<p>On this page, you are shown 12 diagrams. Each diagram represents shapes with specific features, such as geometric properties or higher-level concepts.</p>
			<p>The 6 diagrams on the left side belong to Set A.<br>
			The 6 diagrams on the right side belong to Set B.</p>
			<p>Your task is to determine two distinct rules, one rule that applies to all diagrams in Set A and one rule that applies to all diagrams in Set B.</p>
			<p><strong>Important:</strong> The rule for Set A must not apply to any diagram in Set B, and the rule for Set B must not apply to any diagram in Set A.</p>
		</div>
	`,
	wcrExampleProblemInstructions: `
		<div id="wcr-instructions" class="instruction-box">
			<p>On this page, you are shown 12 diagrams. Each diagram represents shapes with specific features, such as geometric properties or higher-level concepts.</p>
			<p>The 6 diagrams on the left side belong to Set A.<br>
			The 6 diagrams on the right side belong to Set B.</p>
			<p>Your task is to determine two distinct rules, one rule that applies to all diagrams in Set A and one rule that applies to all diagrams in Set B.</p>
			<p>You are given candidate rules for assistance. Note that the candidate rules are AI-generated, so they may contain errors. In particular, there may be one correct rule-pair for each problem. But there could be several, or even none at all, that are correct.</p>
			<p><strong>Important:</strong> The rule for Set A must not apply to any diagram in Set B, and the rule for Set B must not apply to any diagram in Set A.</p>
		</div>
	`,
	exampleMC:`
		<div class="mc-container">
			<label><input type="checkbox" id="cb1"> First checkbox</label>
			<label><input type="checkbox" id="cb2"> Second checkbox</label>
			<strong>Check only the second checkbox.</strong>
			<div id="solution-text" class="hidden">
				<p>Here is an acceptable solution to the example problem:</p>
				
				<div class="solution-rules">
					<p>empty</p>
					<p>non-empty</p>
				</div>
				
				<div class="instruction-btn">
					<button type="submit" id="btn" class="jspsych-btn hidden">Continue</button>
				</div>
			</div>
		</div>
	`,
	helpButtonText_ncr:`
	    <button type="button" class="help-btn" id="help-toggle-btn">?</button>
            <div class="help-popup hidden" id="help-popup-box">
				<p>Type each of your rules into the appropriate answer box. </p>
				<p>The page shows a ‘time remaining’ countdown timer. 
				This allows you two and a half minutes for each problem. 
				After the time has elapsed, you will be automatically moved on to the next problem.
				After three such 'timeouts', a further 'timeout' will end your session.</p>
				<p>You can only use the ‘continue’ button once you have entered text into each of the answer boxes.
				You can skip if you are really stuck. But you are encouraged not to skip problems. 
				The skip button will only be available after the first ten seconds, so you should try to answer. 
				In any event, you will not be able to skip more than three problems.</p>
		</div>
	`,
	helpButtonText_wcr:`
	    <button type="button" class="help-btn" id="help-toggle-btn">?</button>
		<div class="help-popup hidden" id="help-popup-box">
				<p>Complete each answer box. You cannot drag and drop any text from the candidate rules list. 
				You must type each of your rules into the appropriate box. Some candidate rules have further explanation
				which you can see if you hover your mouse over the rule text.</p>
				<p>The page shows a ‘time remaining’ countdown timer. 
				This allows you two and a half minutes for each problem. 
				After the time has elapsed, you will be automatically moved on to the next problem. 
				After three such 'timeouts', a further 'timeout' will end your session.</p>
				<p>You can only use the ‘continue’ button once you have entered text into each of the answer boxes.
				You can skip if you are really stuck. But you are encouraged not to skip problems. 
				The skip button will only be available after the first ten seconds, so you should try to answer. 
				In any event, you will not be able to skip more than three problems.</p>
		</div>
	`,
	timeoutPopup: `
		<div class="timeout-popup-overlay">
			<div class="timeout-popup-content">
				<h3>Time for trial has run out!</h3>
				<p>You will be sent to the next trial.</p>
				<div class="spinner"></div>
			</div>
		</div>
	`,
	skipPopup: `
		<div class="skip-popup-overlay" id="skip-confirm-popup">
			<div class="skip-popup-content">
				<p>%%POPUP_TEXT%%</p> 
				<div class="skip-popup-buttons">
					<button type="button" class="jspsych-btn" id="skip-popup-cancel">Cancel</button>
					<button type="button" class="jspsych-btn" id="skip-popup-confirm" onclick="skipAction()">%%BTN_LABEL%%</button>
				</div>
			</div>
		</div>
	`,
	abortSkipText: `
		<div class="final-text-container">
			<div class="logo-container">
				<div class="logo-left">
					<img src="logos/tuda_logo.png" alt="Institution Logo 1" style="max-height: 80px; width: auto;">
				</div>
				<div class="logo-center">
					<img src="logos/swansea_logo.png" alt="Institution Logo 2" style="max-height: 80px; width: auto;">
				</div>
				<div class="logo-right">
					<img src="logos/tango_logo.png" alt="Institution Logo 3" style="max-height: 80px; width: auto;">
				</div>
			</div>
			<h1>Experiment Ended</h1>
			<p>You have reached the maximum number of skips. 
			Thank you for your efforts. You will be compensated according to the policy.
			The session is now over. You can close this tab.</p>
		</div>
	`,
	abortTimeoutText: `
		<div class="final-text-container">
			<div class="logo-container">
				<div class="logo-left">
					<img src="logos/tuda_logo.png" alt="Institution Logo 1" style="max-height: 80px; width: auto;">
				</div>
				<div class="logo-center">
					<img src="logos/swansea_logo.png" alt="Institution Logo 2" style="max-height: 80px; width: auto;">
				</div>
				<div class="logo-right">
					<img src="logos/tango_logo.png" alt="Institution Logo 3" style="max-height: 80px; width: auto;">
				</div>
			</div>
			<h1>Experiment Ended</h1>
			<p>You have reached the maximum number of timeouts. 
			Thank you for your efforts. You will be compensated according to the policy.
			The session is now over. You can close this tab.</p>
		</div>
	`,
	finalTextPart1:`
	<div class="final-text-container">
		<div class="logo-container">
			<div class="logo-left">
				<img src="logos/tuda_logo.png" alt="Institution Logo 1" style="max-height: 80px; width: auto;">
			</div>
			<div class="logo-center">
				<img src="logos/swansea_logo.png" alt="Institution Logo 2" style="max-height: 80px; width: auto;">
			</div>
			<div class="logo-right">
				<img src="logos/tango_logo.png" alt="Institution Logo 3" style="max-height: 80px; width: auto;">
			</div>
		</div>
		<h1>Thank you!</h1>
		<p>Thank you for completing the first part of the experiment. 
        Your responses will be reviewed - usually within 24 hours, often sooner, depending on the time of day. 
        You will be contacted and either thanked for your time or asked to attempt some further problems. 
        Please contact us if you have heard nothing after two days. info@synergy.trx.li.</p>
        <p>You can now close this tab.</p>
	</div>
	`,
	finalTextParts23:`
	<div class="final-text-container">
		<div class="logo-container">
			<div class="logo-left">
				<img src="logos/tuda_logo.png" alt="Institution Logo 1" style="max-height: 80px; width: auto;">
			</div>
			<div class="logo-center">
				<img src="logos/swansea_logo.png" alt="Institution Logo 2" style="max-height: 80px; width: auto;">
			</div>
			<div class="logo-right">
				<img src="logos/tango_logo.png" alt="Institution Logo 3" style="max-height: 80px; width: auto;">
			</div>
		</div>
		<h1>Thank you!</h1>
		<p>Thank you for completing the second and third parts of the experiment. 
		We would like to ask you some questions about the experience and will be in touch through Prolific.
        Please contact us if you have any questions or feedback. info@synergy.trx.li.</p>
        <p>You can now close this tab.</p>
	</div>`
	};