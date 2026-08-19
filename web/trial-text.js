let trialText = {
	contactEmailValue1: `experiment@synergy.trx.li`,
	contactEmailValue: `b.j.m.wilson@swansea.ac.uk`,
	noticeText:`
		<h1>&nbsp;</h1>
		<h1>&nbsp;</h1>
		<h1>&nbsp;</h1>
		<h1>Notice to Pilot Users</h1>
		<h1>&nbsp;</h1>
		<p>I am currently carrying out some tests in the live site</p> 
		<p>(since the local development site does not reproduce problems with image loading).</p>
		<p>&nbsp;</p>
		<p>I can restore the intro and tutorial pages relatively quickly.</p>
		<p>If you drop me an email or msg while this page is showing,</p> 
		<p>I can probably restore for you in minutes.</p>
		<p>&nbsp;</p>
		<p>Ben</p>

		`,
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
				<h2>Logic Problems and Simple Machine Assistance</h2>
				<p id="para-condition-welcome"></p>
			</div>

			<div class="intro-middle-container">
				<div class="intro-middle-left">
					<p>You will be asked to tell us the rule that distinguishes the first group from the second.</p>
					<img src="img/p286A.png" alt="Example Set A" style="max-height: 250px; width: auto;">
					<p>Example: Large squares are higher</p>
				</div>
				<div class="intro-middle-right">
				<p>You will be asked to tell us the rule that distinguishes the second group from the first.</p>
					<img src="img/p286B.png" alt="Example Set B" style="max-height: 250px; width: auto;">
					<p>Example: Small squares are higher</p>
				</div>
			</div>

			<div class="intro-bottom">
				<p id="para-intro-bottom"></p>
			</div>
		</div>
	`,
	instructionTextPart1: `
		<div class="instructions-container">
			<h1>Instructions</h1>
			<p>Throughout this session, there will be one problem on each screen.</p>
		    <p>You will have a maximum of 2.5 minutes for each problem. You can skip a problem if you're stuck. But you can only skip a maximum of three problems.</p>
			<p id="para-instr-timing"></p>
			<p>Your access to a second session is dependent on your progress in this session.</p>
			<p>Before we start, we will show you a single example problem.</p>
			<p>As with all the problems, you must enter an answer in each box to be able to continue.</p>
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
				<h2>Logic Problems and Simple Machine Assistance</h2>
				<p id="para-condition-welcome"></p>
			</div>

			<div class="intro-middle-container">
				<div class="intro-middle-left">
					<p>You will be asked to tell us the rule that distinguishes the first group from the second.</p>
					<img src="img/p286A.png" alt="Example Set A" style="max-height: 250px; width: auto;">
					<p>Example: Large squares are higher</p>
				</div>
				<div class="intro-middle-right">
				<p>You will be asked to tell us the rule that distinguishes the second group from the first.</p>
					<img src="img/p286B.png" alt="Example Set B" style="max-height: 250px; width: auto;">
					<p>Example: Small squares are higher</p>
				</div>
			</div>

			<div class="intro-bottom">
				<p id="para-intro-bottom"></p>
			</div>
		</div>
	`,
	instructionTextParts23: `
		<div class="instructions-container">
			<h1>Instructions</h1>
			<p>As before, there will be one problem on each screen throughout this session.</p>
		    <p>You will have a maximum of 2.5 minutes for each problem. You can skip a problem if you're stuck. But you can only skip a maximum of three problems.</p>
			<p id="para-instr-timing"></p>
			<p>After the first part you will have the opportunity to take a short break.</p>
			<p>Before we start, we will show you the example problem again, as a reminder of what to expect.</p>
			<p>As with all the problems, you must enter an answer in each box to be able to continue.</p>
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
    <div id="image-container" class="image-container">
        <div id="pls-wait" class="pls-wait">Image loading...</div>
        <img id='bp-img' class="bp-img" src="img/p0001.png" alt="a visual logic problem" style="max-height: 350px; width: auto;"/>
    </div>   
		<p class="example-instruction-text">Write your answers in the boxes.</p>
    `,
	ExampleProblemInstructions: `
			<p>On this page, you are shown 12 diagrams. Each diagram represents shapes with specific features, such as geometric properties or higher-level concepts.</p>
			<p>The 6 diagrams on the left side belong to Set A.<br>
			The 6 diagrams on the right side belong to Set B.</p>
			<p>Your task is to determine two distinct rules, one rule that applies to all diagrams in Set A and one rule that applies to all diagrams in Set B.</p>
			<p><strong>Important:</strong> The rule for Set A must not apply to any diagram in Set B, and the rule for Set B must not apply to any diagram in Set A.</p>

			<div>
				<div class="kb-tooltip">
					<p><b>Want to use keyboard only?</b></p>
						<span class="kb-tooltip-text">For efficient progress, if you wish, you can use the <span class="emph-text">Tab</span> key 
						to move between the answer boxes - and to move on to the <span class="emph-text">Continue</span> button.
						This means you can complete each screen using the keyboard alone.
						But you may also just click on the <span class="emph-text">Continue</span> button with the mouse.</span>
					</p>
			  </div>
		  <p>&nbsp;</p>
		  </div>
	`,
	ProblemInstructions: `
			<p>Your task is to determine two distinct rules, one rule that applies to all diagrams in Set A and one rule that applies to all diagrams in Set B.</p>
			<p>Click the help button (?) for more information.</p>
			<p><strong>Important:</strong> The rule for Set A must not apply to any diagram in Set B, and the rule for Set B must not apply to any diagram in Set A.</p>

			<div>
				<div class="kb-tooltip">
					<p><b>Want to use keyboard only?</b></p>
						<span class="kb-tooltip-text">For efficient progress, if you wish, you can use the <span class="emph-text">Tab</span> key 
						to move between the answer boxes - and to move on to the <span class="emph-text">Continue</span> button.
						This means you can complete each screen using the keyboard alone.
						But you may also just click on the <span class="emph-text">Continue</span> button with the mouse.</span>
					</p>
			  </div>
		  <p>&nbsp;</p>
		  </div>
	`,
	wcrInstructions: `
		  <div class="ai-tooltip">
			<p><b>AI assistance</b></p>
			<span class="ai-tooltip-text">You are given candidate rules for assistance (click the tab above to see them). Note that the candidate rules are AI-generated, so they may contain errors. In particular, there may be one correct rule-pair for each problem. But there could be several, or even none at all, that are correct.</span>
			</div>

	`,
	exampleProblemGuidanceTitle: `
		Look at some example answers
		`,
	exampleProblemGuidance1: `
    This page won't tell you whether your rule pair was correct or not. 
    Nor will it let you improve your example problem rules. 
    But here you can see some different example responses, each with an 
    explanation of how they're good or bad. 
		`,
	exampleProblemGuidance2: `
		Click the button to reveal the example options.
		`,
	// exampleProblemGuidance3: `
	// 	   
	// 	`,
	exampleProblemGuidance4: `
		Advice
		`,
	exampleProblemGuidance5: `
		The best advice is, try to answer as precisely as you can with as few words as possible.
		And check your rules.
		`,
	exampleProblemGuidanceWcr: `
		Remember the candidate rules are AI-generated. 
		One, several, or none at all may be correct. 
		You can compare them with the good and bad ones given here (click the tab above to see them).
		`,
	exampleExplanationPIA: `
<div id="outer-wrapper" class="outer-wrapper">
  <div id="preamble-form-wrapper" class="preamble-form-wrapper">
    <div id="jspsych-survey-text-preamble" class="jspsych-survey-text-preamble">
      <h1>Example Problem</h1>
      <div class="set-a-b-label-container">
        <div id="set-a-label">
          <p>Set A</p>
        </div>
        <div id="set-b-label">
          <p>Set B</p>
        </div>
      </div>
	    <div id="image-container" class="image-container">
	        <div id="pls-wait" class="pls-wait">Image loading...</div>
	        <img id='bp-img' class="bp-img" src="img/p0001.png" alt="a visual logic problem" style="max-height: 350px; width: auto;"/>
	    </div>   
      <p class="example-instruction-text">Your rules are now saved</p>
    </div>
    <form id="jspsych-survey-text-form" autocomplete="off">
      <div class="form-row">
        <div id="jspsych-survey-text-0" class="jspsych-survey-text-question" style="margin: 2em 0em;">
          <p class="jspsych-survey-text">Your rule for set A</p>
          <textarea readonly id="input-0" name="#jspsych-survey-text-response-0" data-name="a_rule" cols="40" rows="2" autofocus="" required="" placeholder=""></textarea>
        </div>
        <div id="jspsych-survey-text-1" class="jspsych-survey-text-question" style="margin: 2em 0em;">
          <p class="jspsych-survey-text">Your rule for set B</p>
          <textarea readonly id="input-1" name="#jspsych-survey-text-response-1" data-name="b_rule" cols="40" rows="2" required="" placeholder=""></textarea>
        </div>
      </div>


			<div id="fixed-height-div">
				<p id='replaceable-text'>While your responses are fixed,<br />
				there are example answers for this problem.<br />
				See the instructions on the right for how to reveal them.</p>
				<div id="example-rules-div"></div>
			</div>


    </form>
  </div>
  <div id="instructions-div" class="instructions-div" style="height: 100%">
    <div class="instruction-box" style="padding-top: 0px;">
      <h2 id="example-problem-guidance-title"></h2>
      <p id="example-problem-guidance-1"></p>
      <p id="example-problem-guidance-2"></p>

      <form id="example-problem-guidance-button-group"></form>

      <h3 id="example-problem-guidance-4"></h3>
      <p id="example-problem-guidance-5"></p>
      <p id="example-problem-guidance-6"></p>
    </div>
    <div id="table-container" class="table-container hidden" style="margin-top: 0px;">
      <h3>Candidate Rules</h3>
    </div>
  </div>
</div>
	`,
	exampleRulesArray:
  {
    "1":
    {
      "A": "contains no shapes at all",
      "B": "contains at least one shape",
      "capt": `This example is a good rule pair`,
      "note": `This example is a correct response. Rule A is true of each figure in set A. And rule B is true of each figure in set B.`
    },
    "2":
    {
      'A':'blank',
      'B':'has shapes',
      "capt": `This example is a good rule pair`,
      "note": `A correct example response that's also concise. Rule A is true of each figure in set A. And rule B is true of each figure in set B.`
    },
    "3":
  {
      "A": "zero shapes present",
      "B": "odd number of shapes present",
      "capt": `This example is a bad rule pair`,
      "note": `An incorrect example for the problem. While A is true, B isn't. There are figures with an even number of shapes in B. Both A and B must be true.`
    },
    "4":
    {
      'A':'space',
      'B':'no space',
      "capt": `This example is a bad rule pair`,
      "note": `A poor rule pair. B isn't specific enough in this example. And though A is true, that's not enough on its own. Both must be true.`
    }   
  }
	,
	exampleExplanationPIB: `
			<p>example explanation of the example problem (pib)</p>
			<p id="example-problem-guidance-1"></p>
			<p id="example-problem-guidance-2"></p>
			<p id="example-problem-guidance-3"></p>
	`,
	exampleMC:`
		<div class="mc-container">
			<strong>Check only the second option below to continue.</strong>
			<label><input type="checkbox" id="cb1"> First option</label>
			<label><input type="checkbox" id="cb2"> Second option</label>
			<div id="solution-text" class="hidden">
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
				You must enter each of your rules into the appropriate box. 
				You can click-to-copy and paste a candidate rule - or type your own. Some candidate rules have further explanation
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
				<h3>Time for this task has run out!</h3>
				<p>You will be sent to the next task.</p>
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
	waitForSaving: `
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
		<h1>Thank you - please wait...</h1>
    <p>We are saving your answers.</p>
    <p>We are most grateful for your contribution to this study.</p>
    <p>Please don't navigate away from this page while we send results to the server.</p>
    <p>Please don't close the tab or window until saving is complete.</p>
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
        Please contact us if you have heard nothing after two days.</p>
        <p class="contact-email">info@synergy.trx.li</p>
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
    Please contact us if you have any questions or feedback.</p>
		<p class="contact-email">info@synergy.trx.li</p>
    <p>You can now close this tab.</p>
	</div>`
	};

