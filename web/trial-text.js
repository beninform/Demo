let trialText = {
	introductionText: `
	<div class="intro-container">
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
	    	<p>Press the button below to proceed.</p>
	    </div>
	</div>
				`,
	oldinstructionText: `
	<div class="instructions-container">
		<h1>Instructions</h1>
		<p>In each part of the experiment, you will be asked to solve 33 problems.</p>
		<p>You will have the option to skip problems. But if you skip too many problems or if your answers make no sense (nonsense words or sentences), you will not be invited to proceed to the next study part.</p>

		<p>The study consists of three parts, which will each take approximately 35 minutes.</p>
		<p>Please enter a code you will be able to recall that consists of at least 5 characters using letters and numbers.
		It must be memorable for you. So we ask you to use the following.</p>
		<ol>
			<li>First letter of your first name</li>
			<li>Day of the month of your birthday</li>
			<li>Last two digits of year of birth</li>
			<li>Last letter of your hometown</li>
		</ol>
	</div>

	`,
	instructionText: `
	<div class="instructions-container">
		<h1>Instructions</h1>
		<p>In each part of the experiment, you will be asked to solve a set of problems.
		There will be one problem on each screen.</p>
		<p>Each of the three parts will take approximately 35 minutes to complete.</p>
		<p>Before we start part one, we will show you a single example problem.</p>
		<p>As with all the problems, you must enter an answer in each box to be able to continue.</p>
		<p>For efficient progress, if you wish, you can use the <code style="color:#8B0000;">Tab</code> button 
		to move between the answer boxes - and to move on to the <code style="color:#8B0000;">Continue</code> button.
		This means you can complete each screen using the keyboard alone.
		But you may also just click on the <code style="color:#8B0000;">Continue</code> button with the mouse.</p>
	</div>

	`,
	 tempLabelsText: `
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
		<div class="split-screen">
			<div class="left-panel">
				<h1>Example Problem</h1>

				<div class='set-a-b-label-container'>
					<div id='set-a-label'><p>Set A</p></div>
					<div id='set-b-label'><p>Set B</p></div>
				</div>
				
				<img class='bp-img' src='img/p0001.png' alt="Bongard Problem"/>

				<p style="margin-top:20px; font-weight: bold;">Write your answers in the boxes. Then check only the second box.</p>

				<div id="survey-container-target"></div>

				<div class="mc-container">
					<div id="solution-text" class="hidden">
						<p>Here is an acceptable solution to the example problem:</p>
						<div class="solution-rules">
							<p>empty</p>
							<p>non-empty</p>
						</div>
					</div>
				</div>
			</div>

			<div class="right-panel">
				<div class="instruction-box">
					<p>On this page, you are shown 12 diagrams. Each diagram represents shapes with specific features, such as geometric properties or higher-level concepts.</p>
					<p>The 6 diagrams on the left side belong to Set A.<br>
					The 6 diagrams on the right side belong to Set B.</p>
					<p>Your task is to determine two distinct rules, one rule that applies to all diagrams in Set A and one rule that applies to all diagrams in Set B.</p>
					<p><strong>Important:</strong> The rule for Set A must not apply to any diagram in Set B, and the rule for Set B must not apply to any diagram in Set A.</p>
				</div>
			</div>
		</div>
	`,
	exampleReadyText: `
		<div class="example-ready-container">
			<p>Write your answers in the boxes. After answering, check only the second box.</p>
		</div>

	`,
	exampleMC:`
		<div class="mc-container">
			<label><input type="checkbox" id="cb1"> First box</label>
			<label><input type="checkbox" id="cb2"> Second box</label>
			
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
		`
	};