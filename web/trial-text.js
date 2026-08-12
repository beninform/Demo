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
				<h1>Logic Problems Study</h1>
				<h2>Welcome to the study<br />
				Logic Problems and Simple Machine Assistance</h2>
				<p id="para-condition-welcome"></p>
				<p>In this study, you will be shown a set of figures in two groups.</p>
			</div>

			<div class="intro-middle-container">
				<div class="intro-middle-left">
					<p>You will be asked to tell us the rule that distinctly describes the first group.</p>
					<img src="img/p286A.png" alt="Example Set A" style="max-height: 250px; width: auto;">
					<p>Example: Large squares are higher</p>
				</div>
				<div class="intro-middle-right">
				<p>You will be asked to tell us the rule that distinctly describes the second group.</p>
					<img src="img/p286B.png" alt="Example Set B" style="max-height: 250px; width: auto;">
					<p>Example: Small squares are higher</p>
				</div>
			</div>

			<div class="intro-bottom">
				<p id="para-intro-bottom"></p>
				<p>Press the button below to proceed.</p>
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
				<h1>Logic Problems Study</h1>
				<h2>Welcome to the study<br />
				Logic Problems and Simple Machine Assistance</h2>
				<p id="para-condition-welcome"></p>
				<p>As before, in this session you will be shown a set of figures in two groups.</p>
			</div>

			<div class="intro-middle-container">
				<div class="intro-middle-left">
					<p>You will be asked to tell us the rule that distinctly describes the first group.</p>
					<img src="img/p286A.png" alt="Example Set A" style="max-height: 250px; width: auto;">
					<p>Example: Large squares are higher</p>
				</div>
				<div class="intro-middle-right">
				<p>You will be asked to tell us the rule that distinctly describes the second group.</p>
					<img src="img/p286B.png" alt="Example Set B" style="max-height: 250px; width: auto;">
					<p>Example: Small squares are higher</p>
				</div>
			</div>

			<div class="intro-bottom">
				<p id="para-intro-bottom"></p>
				<p>You have been asked to complete these because of your success in the first session.</p>
				<p>Press the button below to proceed.</p>
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
		<img class='bp-img' src='img/p0001.png' alt="Bongard Problem" style="max-height: 350px; width: auto;"/>
		<p class="example-instruction-text">Write your answers in the boxes.</p>
    `,
	ExampleProblemInstructions: `
			<p>On this page, you are shown 12 diagrams. Each diagram represents shapes with specific features, such as geometric properties or higher-level concepts.</p>
			<p>The 6 diagrams on the left side belong to Set A.<br>
			The 6 diagrams on the right side belong to Set B.</p>
			<p>Your task is to determine two distinct rules, one rule that applies to all diagrams in Set A and one rule that applies to all diagrams in Set B.</p>
			<p><strong>Important:</strong> The rule for Set A must not apply to any diagram in Set B, and the rule for Set B must not apply to any diagram in Set A.</p>
			<p><b>Want to use keyboard only?</b></p>
			<p>For efficient progress, if you wish, you can use the <code style="color:#8B0000;">Tab</code> button 
			to move between the answer boxes - and to move on to the <code style="color:#8B0000;">Continue</code> button.
			This means you can complete each screen using the keyboard alone.
			But you may also just click on the <code style="color:#8B0000;">Continue</code> button with the mouse.</p>
	`,
	ProblemInstructions: `
			<p>Your task is to determine two distinct rules, one rule that applies to all diagrams in Set A and one rule that applies to all diagrams in Set B.</p>
			<p>Click the help button (?) for more information.</p>
			<p><strong>Important:</strong> The rule for Set A must not apply to any diagram in Set B, and the rule for Set B must not apply to any diagram in Set A.</p>
			<p><b>Want to use keyboard only?</b></p>
			<p>For efficient progress, if you wish, you can use the <code style="color:#8B0000;">Tab</code> button 
			to move between the answer boxes - and to move on to the <code style="color:#8B0000;">Continue</code> button.
			This means you can complete each screen using the keyboard alone.
			But you may also just click on the <code style="color:#8B0000;">Continue</code> button with the mouse.</p>		
	`,
	wcrInstructions: `
			<p><b>AI assistance</b></p>
			<p>You are given candidate rules for assistance (click the tab above to see them). Note that the candidate rules are AI-generated, so they may contain errors. In particular, there may be one correct rule-pair for each problem. But there could be several, or even none at all, that are correct.</p>
	`,
	exampleProblemGuidanceTitle: `
		Looking at the example problem
		`,
	exampleProblemGuidance1: `
		There's no one right answer. 
		So here are some good and bad responses to show the kinds of things to think about.
		`,
	exampleProblemGuidance2: `
		The rules are in pairs. And a correct pair needs both rule A and rule B to be true. 
		Looking at the good rule pairs, they are not just mostly true. 
		Both the rule for set A and the rule for set B are consistently true - that is, for all six figures in their set. 
		`,
	exampleProblemGuidance3: `
		Notice, also, that in the bad rule pairs, an error in the rule for one set can make it a bad pair.
		Saying there's an odd number of shapes in set B looks at first like it might be true. But there are two figures that have an even number of shapes. 
		So the rule pair fails overall, even though the correct rule is about the number of shapes in the figures.
		`,
	exampleProblemGuidance4: `
		In the last bad rule pair, again, an error on the rule for set B is what makes it bad overall.
		Saying there's no space in the figures in set B isn't correct. 
		So the rule pair fails, even though the correct rule involves space used in the figures.
		`,
	exampleProblemGuidance5: `
		Try to answer as precisely as you can with as few words as possible.
		`,
	exampleProblemGuidanceWcr: `
		Remember the candidate rules (click the tab above to see them). 
		They are AI-generated, so they may contain errors. 
		There may be one, several, or none at all correct. 
		You might find it useful to compare the AI-generated rule pairs with the good and bad ones given here.
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
      <img class="bp-img" src="img/p0001.png" alt="Bongard Problem" style="max-height: 350px; width: auto;">
      <p class="example-instruction-text">&nbsp;</p>
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

      <div class="label-row">
		<p class="eg-row-text">Good rule pairs</p>
	  </div>

      <div class="form-row">
        <div id="jspsych-survey-text-0" class="jspsych-survey-text-question" style="margin: 2em 0em;">
          <textarea readonly class="good-rule cols="40" rows="2">contain no figures at all</textarea>
        </div>
        <div id="jspsych-survey-text-1" class="jspsych-survey-text-question" style="margin: 2em 0em;">
          <textarea readonly class="good-rule cols="40" rows="2">contain at least one drawn figure</textarea>
        </div>
      </div>

      <div class="form-row">
        <div id="jspsych-survey-text-0" class="jspsych-survey-text-question" style="margin: 2em 0em;">
          <textarea readonly class="good-rule cols="40" rows="2">blank</textarea>
        </div>
        <div id="jspsych-survey-text-1" class="jspsych-survey-text-question" style="margin: 2em 0em;">
          <textarea readonly class="good-rule cols="40" rows="2">has shapes</textarea>
        </div>
      </div>

      <div class="label-row">
		<p class="eg-row-text">Bad rule pairs</p>
	  </div>
      
      <div class="form-row">
        <div id="jspsych-survey-text-0" class="jspsych-survey-text-question" style="margin: 2em 0em;">
          <textarea readonly class="bad-rule cols="40" rows="2">zero shapes</textarea>
        </div>
        <div id="jspsych-survey-text-1" class="jspsych-survey-text-question" style="margin: 2em 0em;">
          <textarea readonly class="bad-rule" cols="40" rows="2">odd number of shapes</textarea>
        </div>
      </div>

      <div class="form-row">
        <div id="jspsych-survey-text-0" class="jspsych-survey-text-question" style="margin: 2em 0em;">
          <textarea readonly class="bad-rule cols="40" rows="2">space</textarea>
        </div>
        <div id="jspsych-survey-text-1" class="jspsych-survey-text-question" style="margin: 2em 0em;">
          <textarea readonly class="bad-rule" cols="40" rows="2">no space</textarea>
        </div>
      </div>

    </form>
    
    
    
    
  </div>
  <div id="instructions-div" class="instructions-div" style="height: 100%">

        <div class="instruction-box" style="padding-top: 0px;">
         <h2 id="example-problem-guidance-title"></h2>
          <p id="example-problem-guidance-1"></p>
          <p id="example-problem-guidance-2"></p>
          <p id="example-problem-guidance-3"></p>
          <p id="example-problem-guidance-4"></p>
          <p id="example-problem-guidance-5"></p>
          <p id="example-problem-guidance-6"></p>
        
        </div>
        
        
        
        
        
        
        <div id="table-container" class="table-container hidden" style="margin-top: 0px;">
          <h3>Candidate Rules - static until updated for code</h3>

          <table id="rules-table">
            <thead>

              <tr>
                <th>A</th>
                <th>B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>[static] zero enclosed regions inside the frame</td>
                <td>contain at least one closed outline shape</td>
              </tr>
              <tr>
                <td>contain only white space with total ink limited to the border</td>
                <td>contain exactly one connected figure</td>
              </tr>
              <tr>
                <td>perfectly symmetric under any rotation</td>
                <td>contain a small outline shape such as a circle or polygon</td>
              </tr>
              <tr>
                <td>empty frames containing no figures at all</td>
                <td>contain at least one drawn figure</td>
              </tr>
              <tr>
                <td>nothing near their center</td>
                <td>a figure occupying the central area</td>
              </tr>
              <tr>
                <td>no curved lines</td>
                <td>contain at least one curved line</td>
              </tr>
            </tbody>

          </table>

        </div>
      </div>
    </div>
  </div>
</div>
	`,
	exampleExplanationPIB: `
			<p>example explanation of the example problem (pib)</p>
			<p id="example-problem-guidance-1"></p>
			<p id="example-problem-guidance-2"></p>
			<p id="example-problem-guidance-3"></p>
	`,
	exampleMC:`
		<div class="mc-container">
			<label><input type="checkbox" id="cb1"> First checkbox</label>
			<label><input type="checkbox" id="cb2"> Second checkbox</label>
			<strong>Check only the second checkbox.</strong>
			<div id="solution-text" class="hidden">
				<div class="instruction-btn">
					<button type="submit" id="btn" class="jspsych-btn hidden">Continue</button>
				</div>
			</div>
		</div>
	`,
	exampleMC_old:`
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
				You must enter each of your rules into the appropriate box. 
				You can copy and paste a candidate rule or type your own. Some candidate rules have further explanation
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
				<p>You will be sent to the next page.</p>
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