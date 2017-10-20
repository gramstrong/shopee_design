<div class="guideline buttons">
  <div class="container">
    <h1>Number input</h1>
    <h3>About</h3>
    <p>Digital input is a derivative component of the text box, giving the user more convenient to enter, adjust the value of
      the possibility. Compared to the text box, the numeric input text box allows the user to easily adjust the value by
      clicking the up / down arrow button in the interface or by using the keyboard up and down arrow keys, in addition to
      allowing the value to be entered via the keyboard.</p>
    <div class="row">
      <div class="col-md-6">
        <h3>Status</h3>
        <p>The numeric input box inherits the style and state of the simple text box, and adds a numeric adjustment button (up
          and down) on this basis.</p>
        <p>The status of number input includes:</p>
        <ul>
          <li>Normal</li>
          <li>Hover</li>
          <li>Focus</li>
          <li>Disabled</li>
          <li>Prohibited to adjust (forbidden to be raised, forbidden to cut)</li>
        </ul>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-number-input-status.svg" alt="number input demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Attribute</h3>
    <div class="row">
      <div class="col-md-6">
        <h4>Step count</h4>
        <p>Each time you press the Up / Down button, or tap the up / down arrow keys to increase or decrease the number of steps
          in the current input box.</p>
        <p>The default value for the step number is 1, but it can be changed to 1000, 0.1, 0.5 and so on.</p>
        <h4>Critical value</h4>
        <p>If the range of numbers is limited, you can increase the critical value, that is, the maximum or minimum, for the
          numeric input box. After arriving at the limit value, click the digital adjustment button to adjust to the disabled
          state, and prevent the user from continuing to adjust the number to the limit range.</p>
        <h4>Default value and initial value</h4>
        <p>The default value is the text box or the numeric input box shared by the property, that is, the default fill in the
          copy or the number; the initial value is limited to all the digital input box, that is, even if there is no input
          box input directly when the adjustment operation value. Normally this value is 0, but it can also be specified
          as any other value (such as the minimum).</p>
        <p class="hint">Note: When there is a value in the numeric input box (user input value or default value), any adjustment is based
          on the input value.</p>
      </div>
    </div>
    <div class="row">
      <h4>Set reasonable default</h4>
      <div class="col-md-6">
        <p>Setting a reasonable default value for the numeric input box helps to speed up the process of completing the task
          or get the expected results of the business.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-number-input-reasonable.svg" alt="number input demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Adjust button group</h3>
    <div class="row">
      <div class="col-md-6">
        <h4>Behavior</h4>
        <p>The adjustment button appears when the mouse is over the input box in the non-focus state, and disappears when it
          is removed; the focus button is hidden.</p>
        <h4>Control</h4>
        <p>When the mouse hovers over the number adjustment button, the button is highlighted and the value of the unit is triggered
          by a single click.</p>
        <p>When the number reaches the threshold, it will prevent the user from adjusting the number to the limit range by adjusting
          it as a prohibited state. For example, if the click exceeds the maximum, the up button (and the corresponding operation
          of the keyboard) is disabled, and vice versa.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Exception</h4>
        <p>Although the digital adjustment button is limited by the limit value, there are still numbers other than the keyboard
          input limit value. In principle, the situation is allowed to occur, but a warning should be given through the error
          box of the text box.</p>
        <p>In the case of an overrun, the state of the adjustment button group is handled in accordance with the above-mentioned
          critical situation: it is forbidden to click the button away from the critical value but not to click the button
          near the critical value. And, when you click the button, the value is immediately adjusted to the nearest threshold.
          Keyboard operation is also the same.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-number-input-exception.svg" alt="number input demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>combination</h3>
    <div class="row">
      <div class="col-md-6">
        <h4>With the text box suffix</h4>
        <p>The digital adjustment button is placed on the right side of the text input area. When the numeric input box has
          a suffix, follow the nearest principle. Place the digital adjustment button on the right side of the input area
          and the left side of the suffix.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-number-input-suffix.svg" alt="number input demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Visual annotation</h4>
        <p>The height of the digital adjustment button is the same as the input box, and is fixed to 24px for easy click-through
          width.
        </p>
        <p>When there is no text box suffix, the digital adjustment button close to the right side of the text box;</p>
        <p>When combined with a text box suffix, the numeric adjustment button is close to the suffix left.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-number-input-annotation.svg" alt="number input demo" class="img-responsive">
      </div>
    </div>
  </div>
</div>